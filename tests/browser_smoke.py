"""Five-feature and layout parity checks. Optional --file checks direct file opening.
Run: python3 tests/browser_smoke.py
Requires Python Playwright and Chromium for development checks only.
"""
import argparse
from io import BytesIO
from PIL import Image, ImageChops
from pathlib import Path
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from threading import Thread
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--url', help='Also check an already running split application')
parser.add_argument('--file', action='store_true', help='Use file URLs instead of a temporary HTTP server')
parser.add_argument('--browser', help='Optional Chromium executable path')
args = parser.parse_args()


def exercise(browser, url, viewport):
    page = browser.new_page(viewport=viewport)
    errors = []
    failed = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('requestfailed', lambda r: failed.append(r.url))
    page.set_default_timeout(10000)
    page.goto(url, wait_until='load')
    expect(page).to_have_title('ポケモンチャンピオンズ検索ツール')
    assert page.locator('.tab-btn').count() == 5
    assert page.locator('#pokemonNames option').count() == 313
    assert page.locator('#moveNames option').count() == 466
    assert page.locator('#typeSelect option').count() == 18
    snapshots = {}

    def snapshot(key, result=None):
        page.locator('h1').click()  # Dismiss suggestions and the caret.
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        snapshots[key] = {
            'html': page.locator(result).inner_html() if result else '',
            'image': page.screenshot(full_page=True, animations='disabled'),
        }

    snapshot('initial')
    page.locator('#searchName').fill('げんがー')
    suggestion = page.locator('.suggestion-btn[data-name="ゲンガー"]')
    expect(suggestion).to_be_visible()
    suggestion.click()
    page.locator('#searchBtn').click()
    expect(page.locator('#searchResult .poke-name').first).to_have_text('ゲンガー')
    expect(page.locator('#searchResult')).to_contain_text('500')
    snapshot('search', '#searchResult')

    page.locator('#searchName').fill('ﾒｶﾞﾘｻﾞｰﾄﾞﾝＸ')
    page.locator('#searchName').press('Enter')
    expect(page.locator('#searchResult .poke-name').first).to_have_text('メガリザードンX')
    page.locator('#searchName').fill('存在しないポケモン')
    page.locator('#searchBtn').click()
    expect(page.locator('#searchResult .error')).to_contain_text('見つかりませんでした')

    page.locator('[data-tab="compare"]').click()
    expect(page.locator('#compare')).to_be_visible()
    page.locator('#compareA').fill('ゲンガー')
    page.locator('#compareB').fill('メガゲンガー')
    page.locator('h1').click()
    page.locator('#compareBtn').click()
    expect(page.locator('#compareResult tr').last).to_contain_text('500')
    expect(page.locator('#compareResult tr').last).to_contain_text('600')
    expect(page.locator('#compareResult tr').last).to_contain_text('+100')
    snapshot('compare', '#compareResult')

    page.locator('[data-tab="type"]').click()
    page.locator('#typeSelect').select_option('ほのお')
    page.locator('#typeBtn').click()
    expect(page.locator('#typeResult')).to_contain_text('ほのお技で攻撃した場合')
    snapshot('type-attack', '#typeResult')
    page.locator('#typeMode').select_option('defense')
    page.locator('#typeBtn').click()
    expect(page.locator('#typeResult')).to_contain_text('ほのおタイプで受ける場合')
    snapshot('type-defense', '#typeResult')

    page.locator('[data-tab="damage"]').click()
    page.locator('#attackerName').fill('ピカチュウ')
    page.locator('#defenderName').fill('ギャラドス')
    page.locator('#moveName').fill('１０まんボルト')
    page.locator('h1').click()
    page.locator('#damageBtn').click()
    expect(page.locator('#damageResult .damage-output')).to_have_text('70.3%〜83.2%')
    snapshot('damage', '#damageResult')
    page.locator('#attackerName').fill('ゲンガー')
    page.locator('#defenderName').fill('カビゴン')
    page.locator('#moveName').fill('シャドーボール')
    page.locator('h1').click()
    page.locator('#damageBtn').click()
    expect(page.locator('#damageResult .damage-output')).to_have_text('0.0%〜0.0%')
    page.locator('#moveName').fill('おにび')
    page.locator('h1').click()
    page.locator('#damageBtn').click()
    expect(page.locator('#damageResult .error')).to_contain_text('計算対象外')

    page.locator('[data-tab="moveSearch"]').click()
    page.locator('#moveSearchName').fill('しゃどーぼーる')
    page.locator('.suggestion-btn[data-name="シャドーボール"]').click()
    expect(page.locator('#moveSearchResult .move-name').first).to_have_text('シャドーボール')
    expect(page.locator('#moveSearchResult')).to_contain_text('一定確率で相手のとくぼうを下げる')
    snapshot('move-search', '#moveSearchResult')
    page.locator('#moveSearchName').fill('存在しない技')
    page.locator('#moveSearchBtn').click()
    expect(page.locator('#moveSearchResult .error')).to_contain_text('見つかりませんでした')
    assert not errors, errors
    assert not failed, failed
    page.close()
    return snapshots


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = None
if not args.file:
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT)))
    Thread(target=server.serve_forever, daemon=True).start()
    base_url = f'http://127.0.0.1:{server.server_port}'

with sync_playwright() as p:
    executable = args.browser or ('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else p.chromium.executable_path)
    browser = p.chromium.launch(executable_path=executable, headless=True)
    for width, height in [(1280, 900), (390, 844)]:
        viewport = {'width': width, 'height': height}
        original = exercise(browser, ((ROOT / 'originals/pokemon_champions_webapp_v7_regulation_mb.html').as_uri() if args.file else base_url + '/originals/pokemon_champions_webapp_v7_regulation_mb.html'), viewport)
        split = exercise(browser, ((ROOT / 'index.html').as_uri() if args.file else base_url + '/index.html'), viewport)
        assert original.keys() == split.keys()
        for key in original:
            assert original[key]['html'] == split[key]['html'], f'{width}: {key} HTML differs'
            before = Image.open(BytesIO(original[key]['image'])).convert('RGB')
            after = Image.open(BytesIO(split[key]['image'])).convert('RGB')
            assert before.size == after.size, f'{width}: {key} screen dimensions differ'
            # Rasterization can vary by one intensity level at rounded edges.
            delta = max(high for low, high in ImageChops.difference(before, after).getextrema())
            if delta > 1:
                Path(f'/tmp/pokemon-{width}-{key}-original.png').write_bytes(original[key]['image'])
                Path(f'/tmp/pokemon-{width}-{key}-split.png').write_bytes(split[key]['image'])
                raise AssertionError(f'{width}: {key} appearance differs (max channel delta {delta})')
        print(f'PASS: {width}px, all five features, {len(original)} matching screens (pixel tolerance 1/255), no JavaScript/resource errors', flush=True)
    if args.url:
        exercise(browser, args.url, {'width': 1280, 'height': 900})
        print('PASS: HTTP startup and all five features', flush=True)
    browser.close()

if server:
    server.shutdown()
    server.server_close()
