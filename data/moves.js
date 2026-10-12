// v7保存データと二次資料で照合した参考技。確認できない威力はnull。
window.PokemonAppData = window.PokemonAppData || {};
Object.assign(window.PokemonAppData, {
  "moves": [
    {
      "name": "アクセルロック",
      "type": "いわ",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。"
    },
    {
      "name": "アシッドボム",
      "type": "どく",
      "category": "special",
      "power": 40,
      "aliases": [],
      "effect": "命中時、相手のとくぼうを2段階下げる。"
    },
    {
      "name": "アクロバット",
      "type": "ひこう",
      "category": "physical",
      "power": 55,
      "aliases": [],
      "special_rule": "acrobatics",
      "effect": "持ち物を持っていない時、威力が2倍になる。"
    },
    {
      "name": "つばめがえし",
      "type": "ひこう",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "命中率・回避率の影響を受けず必ず命中する。"
    },
    {
      "name": "エアカッター",
      "type": "ひこう",
      "category": "special",
      "power": 60,
      "aliases": [],
      "effect": "急所に当たりやすい。相手全体攻撃。"
    },
    {
      "name": "エアスラッシュ",
      "type": "ひこう",
      "category": "special",
      "power": 75,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "みわくのボイス",
      "type": "フェアリー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "そのターンに能力が上がった相手をこんらんにする。音技。"
    },
    {
      "name": "げんしのちから",
      "type": "いわ",
      "category": "special",
      "power": 60,
      "aliases": [],
      "effect": "一定確率で自分の全能力が上がる。"
    },
    {
      "name": "りんごさん",
      "type": "くさ",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "命中時、相手のとくぼうを下げる。"
    },
    {
      "name": "アクアジェット",
      "type": "みず",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。"
    },
    {
      "name": "アクアステップ",
      "type": "みず",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "命中後、自分のすばやさが1段階上がる。"
    },
    {
      "name": "アクアテール",
      "type": "みず",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "アーマーキャノン",
      "type": "ほのお",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "攻撃後、自分のぼうぎょ・とくぼうが下がる。"
    },
    {
      "name": "ダメおし",
      "type": "あく",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "そのターンに相手が既にダメージを受けていると威力が上がる。"
    },
    {
      "name": "はどうだん",
      "type": "かくとう",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "必中の波動技。"
    },
    {
      "name": "オーラぐるま",
      "type": "でんき",
      "category": "physical",
      "power": 110,
      "aliases": [],
      "effect": "攻撃後、自分のすばやさが上がる。モルペコの姿でタイプが変わる。"
    },
    {
      "name": "ゆきなだれ",
      "type": "こおり",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "後攻になりやすく、そのターンに攻撃を受けていると威力が2倍。"
    },
    {
      "name": "かかとおとし",
      "type": "かくとう",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "外すか防がれると自分も大きな反動ダメージを受ける。一定確率でこんらん。"
    },
    {
      "name": "くちばしキャノン",
      "type": "ひこう",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "そのターンに接触してきた相手をやけどにする。"
    },
    {
      "name": "ゲップ",
      "type": "どく",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "しめつける",
      "type": "ノーマル",
      "category": "physical",
      "power": 15,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "かみつく",
      "type": "あく",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "むねんのつるぎ",
      "type": "ほのお",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "与えたダメージの一部を回復する。"
    },
    {
      "name": "うらみつらみ",
      "type": "ゴースト",
      "category": "special",
      "power": 75,
      "aliases": [],
      "effect": "命中時、相手のこうげきを下げる。"
    },
    {
      "name": "ブラストバーン",
      "type": "ほのお",
      "category": "special",
      "power": 150,
      "aliases": [],
      "effect": "高威力だが、次のターン動けない。"
    },
    {
      "name": "ブレイズキック",
      "type": "ほのお",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "急所に当たりやすく、一定確率でやけど。"
    },
    {
      "name": "ふぶき",
      "type": "こおり",
      "category": "special",
      "power": 110,
      "aliases": [],
      "effect": "一定確率でこおり。天候がゆきなら命中安定。"
    },
    {
      "name": "ブラッドムーン",
      "type": "ノーマル",
      "category": "special",
      "power": 130,
      "aliases": [],
      "effect": "連続使用できない高威力特殊技。"
    },
    {
      "name": "ボディプレス",
      "type": "かくとう",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "special_rule": "defense_attack",
      "effect": "自分のぼうぎょを攻撃側能力として計算する。"
    },
    {
      "name": "のしかかり",
      "type": "ノーマル",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "一定確率でまひ。"
    },
    {
      "name": "ボーンラッシュ",
      "type": "じめん",
      "category": "physical",
      "power": 30,
      "aliases": [],
      "effect": "2〜5回連続で攻撃する。"
    },
    {
      "name": "ばくおんぱ",
      "type": "ノーマル",
      "category": "special",
      "power": 140,
      "aliases": [],
      "effect": "高威力の音技。自分以外全体に当たる。"
    },
    {
      "name": "とびはねる",
      "type": "ひこう",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "1ターン目に空中へ、2ターン目に攻撃。一定確率でまひ。"
    },
    {
      "name": "ブレイブバード",
      "type": "ひこう",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "与えたダメージの一部を反動で受ける。"
    },
    {
      "name": "ワイドブレイカー",
      "type": "ドラゴン",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "相手のこうげきを下げる。相手全体攻撃。"
    },
    {
      "name": "かわらわり",
      "type": "かくとう",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "リフレクター・ひかりのかべ・オーロラベールを壊す。"
    },
    {
      "name": "ぶんまわす",
      "type": "あく",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "むしくい",
      "type": "むし",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "相手のきのみを奪って使うことがある。"
    },
    {
      "name": "むしのさざめき",
      "type": "むし",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で相手のとくぼうを下げる。音技。"
    },
    {
      "name": "じならし",
      "type": "じめん",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "命中時、相手のすばやさを下げる。全体攻撃。"
    },
    {
      "name": "バレットパンチ",
      "type": "はがね",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。パンチ技。"
    },
    {
      "name": "タネマシンガン",
      "type": "くさ",
      "category": "physical",
      "power": 25,
      "aliases": [],
      "effect": "2〜5回連続で攻撃する。"
    },
    {
      "name": "もえつきる",
      "type": "ほのお",
      "category": "special",
      "power": 130,
      "aliases": [],
      "effect": "使用後、自分のほのおタイプがなくなる。"
    },
    {
      "name": "しっとのほのお",
      "type": "ほのお",
      "category": "special",
      "power": 70,
      "aliases": [],
      "effect": "そのターンに能力が上がった相手をやけどにする。"
    },
    {
      "name": "ひけん・ちえなみ",
      "type": "あく",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "相手の場にまきびしを設置する。"
    },
    {
      "name": "チャージビーム",
      "type": "でんき",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "一定確率で自分のとくこうが上がる。"
    },
    {
      "name": "ひやみず",
      "type": "みず",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "命中時、相手のこうげきを下げる。"
    },
    {
      "name": "ともえなげ",
      "type": "かくとう",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "後攻になり、命中後に相手を交代させる。"
    },
    {
      "name": "スケイルノイズ",
      "type": "ドラゴン",
      "category": "special",
      "power": 110,
      "aliases": [],
      "effect": "攻撃後、自分のぼうぎょが下がる。音技。"
    },
    {
      "name": "クリアスモッグ",
      "type": "どく",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "相手の能力ランク変化をリセットする。"
    },
    {
      "name": "インファイト",
      "type": "かくとう",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "攻撃後、自分のぼうぎょ・とくぼうが下がる。"
    },
    {
      "name": "ほしがる",
      "type": "ノーマル",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "相手の持ち物を奪うことがある。"
    },
    {
      "name": "クラブハンマー",
      "type": "みず",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "急所に当たりやすい。"
    },
    {
      "name": "クロスチョップ",
      "type": "かくとう",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "急所に当たりやすい。"
    },
    {
      "name": "クロスポイズン",
      "type": "どく",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "急所に当たりやすく、一定確率でどく。"
    },
    {
      "name": "かみくだく",
      "type": "あく",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手のぼうぎょを下げる。"
    },
    {
      "name": "ブレイククロー",
      "type": "ノーマル",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "一定確率で相手のぼうぎょを下げる。"
    },
    {
      "name": "あくのはどう",
      "type": "あく",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "DDラリアット",
      "type": "あく",
      "category": "physical",
      "power": 85,
      "aliases": [
        "ddラリアット",
        "ＤＤラリアット"
      ],
      "effect": "相手の能力ランク変化を無視して攻撃する。"
    },
    {
      "name": "マジカルシャイン",
      "type": "フェアリー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "あなをほる",
      "type": "じめん",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "1ターン目に地中へ、2ターン目に攻撃。"
    },
    {
      "name": "フェイタルクロー",
      "type": "どく",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "一定確率でどく・まひ・ねむりのいずれかにする。"
    },
    {
      "name": "ほうでん",
      "type": "でんき",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "周囲全体攻撃。一定確率でまひ。"
    },
    {
      "name": "ダイビング",
      "type": "みず",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "1ターン目に水中へ、2ターン目に攻撃。"
    },
    {
      "name": "ダブルアタック",
      "type": "ノーマル",
      "category": "physical",
      "power": 35,
      "aliases": [],
      "effect": "2回連続で攻撃する。"
    },
    {
      "name": "すてみタックル",
      "type": "ノーマル",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "与えたダメージの一部を反動で受ける。"
    },
    {
      "name": "りゅうせいぐん",
      "type": "ドラゴン",
      "category": "special",
      "power": 130,
      "aliases": [],
      "effect": "攻撃後、自分のとくこうが大きく下がる。"
    },
    {
      "name": "ドラゴンクロー",
      "type": "ドラゴン",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "ドラゴンアロー",
      "type": "ドラゴン",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "2回攻撃。ダブルでは相手2体に分散することがある。"
    },
    {
      "name": "りゅうのはどう",
      "type": "ドラゴン",
      "category": "special",
      "power": 85,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "ドラゴンダイブ",
      "type": "ドラゴン",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "ドラゴンテール",
      "type": "ドラゴン",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "後攻になり、命中後に相手を交代させる。"
    },
    {
      "name": "ドレインパンチ",
      "type": "かくとう",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "与えたダメージの一部を回復する。パンチ技。"
    },
    {
      "name": "ドレインキッス",
      "type": "フェアリー",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "与えたダメージの多めの割合を回復する。"
    },
    {
      "name": "ドリルくちばし",
      "type": "ひこう",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "ドリルライナー",
      "type": "じめん",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "急所に当たりやすい。"
    },
    {
      "name": "ダブルウイング",
      "type": "ひこう",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "2回連続で攻撃する。"
    },
    {
      "name": "ばくれつパンチ",
      "type": "かくとう",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "命中時、相手をこんらんにする。パンチ技。"
    },
    {
      "name": "だいちのちから",
      "type": "じめん",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で相手のとくぼうを下げる。"
    },
    {
      "name": "じしん",
      "type": "じめん",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "全体攻撃。じめん定番高威力技。"
    },
    {
      "name": "ぶきみなじゅもん",
      "type": "エスパー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "相手が最後に使った技のPPを減らす。"
    },
    {
      "name": "エレクトロビーム",
      "type": "でんき",
      "category": "special",
      "power": 130,
      "aliases": [],
      "effect": "1ターン目にとくこうを上げ、2ターン目に攻撃。雨なら即攻撃。"
    },
    {
      "name": "エレキネット",
      "type": "でんき",
      "category": "special",
      "power": 55,
      "aliases": [],
      "effect": "相手全体のすばやさを下げる。"
    },
    {
      "name": "エナジーボール",
      "type": "くさ",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で相手のとくぼうを下げる。"
    },
    {
      "name": "ふんか",
      "type": "ほのお",
      "category": "special",
      "power": 150,
      "aliases": [],
      "effect": "自分のHPが多いほど威力が高い。"
    },
    {
      "name": "ワイドフォース",
      "type": "エスパー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "サイコフィールド下で威力が上がり相手全体攻撃になる。"
    },
    {
      "name": "だいばくはつ",
      "type": "ノーマル",
      "category": "physical",
      "power": 250,
      "aliases": [],
      "effect": "使用後、自分はひんしになる。高威力全体攻撃。"
    },
    {
      "name": "じんつうりき",
      "type": "エスパー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "しんそく",
      "type": "ノーマル",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "高優先度の先制技。"
    },
    {
      "name": "からげんき",
      "type": "ノーマル",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "自分が状態異常なら威力が2倍。やけどの物理低下も受けにくい。"
    },
    {
      "name": "ねこだまし",
      "type": "ノーマル",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "場に出た最初のターンのみ使える先制ひるみ技。"
    },
    {
      "name": "フェイント",
      "type": "ノーマル",
      "category": "physical",
      "power": 30,
      "aliases": [],
      "effect": "まもる系を崩して攻撃できる先制技。"
    },
    {
      "name": "とどめばり",
      "type": "むし",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "この技で相手を倒すと自分のこうげきが大きく上がる。"
    },
    {
      "name": "きまぐレーザー",
      "type": "ドラゴン",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で威力が大きく上がる。"
    },
    {
      "name": "ほのおのまい",
      "type": "ほのお",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で自分のとくこうが上がる。"
    },
    {
      "name": "だいもんじ",
      "type": "ほのお",
      "category": "special",
      "power": 110,
      "aliases": [],
      "effect": "一定確率でやけど。"
    },
    {
      "name": "ほのおのキバ",
      "type": "ほのお",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "一定確率でやけど、またはひるみ。"
    },
    {
      "name": "ほのおのムチ",
      "type": "ほのお",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "命中時、相手のぼうぎょを下げる。"
    },
    {
      "name": "ほのおのパンチ",
      "type": "ほのお",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "一定確率でやけど。パンチ技。"
    },
    {
      "name": "ほのおのうず",
      "type": "ほのお",
      "category": "special",
      "power": 35,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "であいがしら",
      "type": "むし",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "場に出た最初のターンのみ使える高威力先制技。"
    },
    {
      "name": "ニトロチャージ",
      "type": "ほのお",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "命中後、自分のすばやさが上がる。"
    },
    {
      "name": "かえんほうしゃ",
      "type": "ほのお",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率でやけど。"
    },
    {
      "name": "フレアドライブ",
      "type": "ほのお",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "反動ダメージあり。一定確率でやけど。"
    },
    {
      "name": "ラスターカノン",
      "type": "はがね",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手のとくぼうを下げる。"
    },
    {
      "name": "クイックターン",
      "type": "みず",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "攻撃後、手持ちに戻る。"
    },
    {
      "name": "トリックフラワー",
      "type": "くさ",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "必中かつ急所に当たりやすい。"
    },
    {
      "name": "そらをとぶ",
      "type": "ひこう",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "1ターン目に空中へ、2ターン目に攻撃。"
    },
    {
      "name": "フライングプレス",
      "type": "かくとう",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "かくとう・ひこう両方の相性を含む特殊な技。"
    },
    {
      "name": "きあいだま",
      "type": "かくとう",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "きあいパンチ",
      "type": "かくとう",
      "category": "physical",
      "power": 150,
      "aliases": [],
      "effect": "後攻発動。攻撃前に被弾すると失敗する。パンチ技。"
    },
    {
      "name": "イカサマ",
      "type": "あく",
      "category": "physical",
      "power": 95,
      "aliases": [],
      "special_rule": "target_attack",
      "effect": "相手のこうげきを使ってダメージ計算する。"
    },
    {
      "name": "フリーズドライ",
      "type": "こおり",
      "category": "special",
      "power": 70,
      "aliases": [],
      "effect": "みずタイプにも効果抜群。一定確率でこおり。"
    },
    {
      "name": "ハードプラント",
      "type": "くさ",
      "category": "special",
      "power": 150,
      "aliases": [],
      "effect": "高威力だが、次のターン動けない。"
    },
    {
      "name": "こおりのいぶき",
      "type": "こおり",
      "category": "special",
      "power": 60,
      "aliases": [],
      "effect": "必ず急所に当たる。"
    },
    {
      "name": "みらいよち",
      "type": "エスパー",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "使用から数ターン後に攻撃が発生する。"
    },
    {
      "name": "ギガドレイン",
      "type": "くさ",
      "category": "special",
      "power": 75,
      "aliases": [],
      "effect": "与えたダメージの一部を回復する。"
    },
    {
      "name": "ギガインパクト",
      "type": "ノーマル",
      "category": "physical",
      "power": 150,
      "aliases": [],
      "effect": "高威力だが、次のターン動けない。"
    },
    {
      "name": "デカハンマー",
      "type": "はがね",
      "category": "physical",
      "power": 160,
      "aliases": [],
      "effect": "連続して使えない高威力技。"
    },
    {
      "name": "グラススライダー",
      "type": "くさ",
      "category": "physical",
      "power": 55,
      "aliases": [],
      "effect": "グラスフィールド下で先制しやすい。"
    },
    {
      "name": "Gのちから",
      "type": "くさ",
      "category": "physical",
      "power": 90,
      "aliases": [
        "gのちから",
        "Ｇのちから"
      ],
      "effect": "命中時、相手のぼうぎょを下げる。"
    },
    {
      "name": "ダストシュート",
      "type": "どく",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "一定確率でどく。"
    },
    {
      "name": "アームハンマー",
      "type": "かくとう",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "攻撃後、自分のすばやさが下がる。パンチ技。"
    },
    {
      "name": "もろはのずつき",
      "type": "いわ",
      "category": "physical",
      "power": 150,
      "aliases": [],
      "effect": "強い反動ダメージを受ける。"
    },
    {
      "name": "ぶちかまし",
      "type": "じめん",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "攻撃後、自分のぼうぎょ・とくぼうが下がる。"
    },
    {
      "name": "ねっぷう",
      "type": "ほのお",
      "category": "special",
      "power": 95,
      "aliases": [],
      "effect": "相手全体攻撃。一定確率でやけど。"
    },
    {
      "name": "10まんばりき",
      "type": "じめん",
      "category": "physical",
      "power": 95,
      "aliases": [
        "１０まんばりき"
      ],
      "effect": ""
    },
    {
      "name": "とびひざげり",
      "type": "かくとう",
      "category": "physical",
      "power": 130,
      "aliases": [],
      "effect": "外すか防がれると自分も大きな反動ダメージを受ける。"
    },
    {
      "name": "ウッドホーン",
      "type": "くさ",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "与えたダメージの一部を回復する。"
    },
    {
      "name": "ぼうふう",
      "type": "ひこう",
      "category": "special",
      "power": 110,
      "aliases": [],
      "effect": "一定確率でこんらん。雨で命中しやすく、晴れで命中しにくい。"
    },
    {
      "name": "ハイドロカノン",
      "type": "みず",
      "category": "special",
      "power": 150,
      "aliases": [],
      "effect": "高威力だが、次のターン動けない。"
    },
    {
      "name": "ハイドロポンプ",
      "type": "みず",
      "category": "special",
      "power": 110,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "はかいこうせん",
      "type": "ノーマル",
      "category": "special",
      "power": 150,
      "aliases": [],
      "effect": "高威力だが、次のターン動けない。"
    },
    {
      "name": "ハイパーボイス",
      "type": "ノーマル",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "れいとうビーム",
      "type": "こおり",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率でこおり。"
    },
    {
      "name": "こおりのキバ",
      "type": "こおり",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "一定確率でこおり、またはひるみ。"
    },
    {
      "name": "アイスハンマー",
      "type": "こおり",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "攻撃後、自分のすばやさが下がる。パンチ技。"
    },
    {
      "name": "れいとうパンチ",
      "type": "こおり",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "一定確率でこおり。パンチ技。"
    },
    {
      "name": "こおりのつぶて",
      "type": "こおり",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。"
    },
    {
      "name": "アイススピナー",
      "type": "こおり",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "フィールド状態を解除する。"
    },
    {
      "name": "つららおとし",
      "type": "こおり",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "つららばり",
      "type": "こおり",
      "category": "physical",
      "power": 25,
      "aliases": [],
      "effect": "2〜5回連続で攻撃する。"
    },
    {
      "name": "こごえるかぜ",
      "type": "こおり",
      "category": "special",
      "power": 55,
      "aliases": [],
      "effect": "相手全体のすばやさを下げる。"
    },
    {
      "name": "ひゃっきやこう",
      "type": "ゴースト",
      "category": "special",
      "power": 65,
      "aliases": [],
      "effect": "状態異常の相手に威力が上がる。一定確率でやけど。"
    },
    {
      "name": "れんごく",
      "type": "ほのお",
      "category": "special",
      "power": 100,
      "aliases": [],
      "effect": "命中時、相手をやけどにする。"
    },
    {
      "name": "まとわりつく",
      "type": "むし",
      "category": "special",
      "power": 20,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "アイアンヘッド",
      "type": "はがね",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "アイアンテール",
      "type": "はがね",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "一定確率で相手のぼうぎょを下げる。"
    },
    {
      "name": "ツタこんぼう",
      "type": "くさ",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "急所に当たりやすい。オーガポンの姿でタイプが変わる。"
    },
    {
      "name": "ジェットパンチ",
      "type": "みず",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。パンチ技。"
    },
    {
      "name": "はたきおとす",
      "type": "あく",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "相手の持ち物を落とす。持ち物がある相手には威力が上がる。"
    },
    {
      "name": "ドゲザン",
      "type": "あく",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "必中扱いの攻撃。"
    },
    {
      "name": "うっぷんばらし",
      "type": "あく",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "そのターンに能力を下げられていると威力が2倍。"
    },
    {
      "name": "とっておき",
      "type": "ノーマル",
      "category": "physical",
      "power": 140,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "おはかまいり",
      "type": "ゴースト",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "味方がひんしになるほど威力が上がる。"
    },
    {
      "name": "ふんえん",
      "type": "ほのお",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "周囲全体攻撃。一定確率でやけど。"
    },
    {
      "name": "リーフブレード",
      "type": "くさ",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "急所に当たりやすい。"
    },
    {
      "name": "リーフストーム",
      "type": "くさ",
      "category": "special",
      "power": 130,
      "aliases": [],
      "effect": "攻撃後、自分のとくこうが大きく下がる。"
    },
    {
      "name": "きゅうけつ",
      "type": "むし",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "与えたダメージの一部を回復する。"
    },
    {
      "name": "はめつのひかり",
      "type": "フェアリー",
      "category": "special",
      "power": 140,
      "aliases": [],
      "effect": "与えたダメージの一部を反動で受ける。"
    },
    {
      "name": "アクアブレイク",
      "type": "みず",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "一定確率で相手のぼうぎょを下げる。"
    },
    {
      "name": "ローキック",
      "type": "かくとう",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "命中時、相手のすばやさを下げる。"
    },
    {
      "name": "ルミナコリジョン",
      "type": "エスパー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "命中時、相手のとくぼうを大きく下げる。"
    },
    {
      "name": "とびかかる",
      "type": "むし",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "命中時、相手のこうげきを下げる。"
    },
    {
      "name": "マッハパンチ",
      "type": "かくとう",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。パンチ技。"
    },
    {
      "name": "シャカシャカほう",
      "type": "くさ",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手の命中率を下げる。自分の状態異常を治すことがある。"
    },
    {
      "name": "メガトンキック",
      "type": "ノーマル",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "通常攻撃。命中は不安定。"
    },
    {
      "name": "メガホーン",
      "type": "むし",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "通常攻撃。高威力のむし物理技。"
    },
    {
      "name": "メテオビーム",
      "type": "いわ",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "1ターン目にとくこうを上げ、2ターン目に攻撃。"
    },
    {
      "name": "コメットパンチ",
      "type": "はがね",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で自分のこうげきが上がる。パンチ技。"
    },
    {
      "name": "ミストバースト",
      "type": "フェアリー",
      "category": "special",
      "power": 100,
      "aliases": [],
      "effect": "使用後、自分はひんし。ミストフィールド下で威力上昇。"
    },
    {
      "name": "ムーンフォース",
      "type": "フェアリー",
      "category": "special",
      "power": 95,
      "aliases": [],
      "effect": "一定確率で相手のとくこうを下げる。"
    },
    {
      "name": "キラースピン",
      "type": "どく",
      "category": "physical",
      "power": 30,
      "aliases": [],
      "effect": "拘束技・設置技を解除し、一定確率でどく。"
    },
    {
      "name": "ひょうざんおろし",
      "type": "こおり",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "マッドショット",
      "type": "じめん",
      "category": "special",
      "power": 55,
      "aliases": [],
      "effect": "命中時、相手のすばやさを下げる。"
    },
    {
      "name": "どろかけ",
      "type": "じめん",
      "category": "special",
      "power": 20,
      "aliases": [],
      "effect": "命中時、相手の命中率を下げる。"
    },
    {
      "name": "だくりゅう",
      "type": "みず",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "相手全体攻撃。一定確率で命中率を下げる。"
    },
    {
      "name": "マジカルフレイム",
      "type": "ほのお",
      "category": "special",
      "power": 75,
      "aliases": [],
      "effect": "命中時、相手のとくこうを下げる。"
    },
    {
      "name": "ナイトバースト",
      "type": "あく",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で相手の命中率を下げる。"
    },
    {
      "name": "ほっぺすりすり",
      "type": "でんき",
      "category": "physical",
      "power": 20,
      "aliases": [],
      "effect": "命中時、相手をまひにする。"
    },
    {
      "name": "げきりん",
      "type": "ドラゴン",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "2〜3ターン連続攻撃後、こんらんする。"
    },
    {
      "name": "オーバーヒート",
      "type": "ほのお",
      "category": "special",
      "power": 130,
      "aliases": [],
      "effect": "攻撃後、自分のとくこうが大きく下がる。"
    },
    {
      "name": "パラボラチャージ",
      "type": "でんき",
      "category": "special",
      "power": 65,
      "aliases": [],
      "effect": "与えたダメージの一部を回復する。周囲攻撃。"
    },
    {
      "name": "しっぺがえし",
      "type": "あく",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "後攻で攻撃すると威力が上がる。"
    },
    {
      "name": "はなふぶき",
      "type": "くさ",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "はなびらのまい",
      "type": "くさ",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "2〜3ターン連続攻撃後、こんらんする。"
    },
    {
      "name": "ゴーストダイブ",
      "type": "ゴースト",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "1ターン目に消え、2ターン目に攻撃。まもる系を一部貫通。"
    },
    {
      "name": "ミサイルばり",
      "type": "むし",
      "category": "physical",
      "power": 25,
      "aliases": [],
      "effect": "2〜5回連続で攻撃する。"
    },
    {
      "name": "じゃれつく",
      "type": "フェアリー",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で相手のこうげきを下げる。"
    },
    {
      "name": "ついばむ",
      "type": "ひこう",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "どくどくのキバ",
      "type": "どく",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "一定確率で相手をもうどくにする。"
    },
    {
      "name": "どくづき",
      "type": "どく",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "一定確率でどく。"
    },
    {
      "name": "かふんだんご",
      "type": "むし",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "相手には攻撃、味方には回復として働く。"
    },
    {
      "name": "ポルターガイスト",
      "type": "ゴースト",
      "category": "physical",
      "power": 110,
      "aliases": [],
      "effect": "相手が持ち物を持っている時に成功する。"
    },
    {
      "name": "ネズミざん",
      "type": "ノーマル",
      "category": "physical",
      "power": 20,
      "aliases": [],
      "effect": "最大10回まで連続攻撃する。"
    },
    {
      "name": "とびつく",
      "type": "むし",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "命中時、相手のすばやさを下げる。"
    },
    {
      "name": "はたく",
      "type": "ノーマル",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "パワージェム",
      "type": "いわ",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "つけあがる",
      "type": "あく",
      "category": "physical",
      "power": 20,
      "aliases": [],
      "effect": "自分の能力上昇が多いほど威力が上がる。"
    },
    {
      "name": "パワーウィップ",
      "type": "くさ",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "サイコキネシス",
      "type": "エスパー",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率で相手のとくぼうを下げる。"
    },
    {
      "name": "サイコファング",
      "type": "エスパー",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "リフレクター・ひかりのかべ・オーロラベールを壊す。"
    },
    {
      "name": "サイコノイズ",
      "type": "エスパー",
      "category": "special",
      "power": 75,
      "aliases": [],
      "effect": "相手を数ターン回復できない状態にする。音技。"
    },
    {
      "name": "サイコカッター",
      "type": "エスパー",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "急所に当たりやすい。"
    },
    {
      "name": "バリアーラッシュ",
      "type": "エスパー",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "命中後、自分のぼうぎょが上がる。"
    },
    {
      "name": "サイコショック",
      "type": "エスパー",
      "category": "special",
      "power": 80,
      "aliases": [],
      "special_rule": "physical_defense",
      "effect": "相手のぼうぎょでダメージ計算する特殊技。"
    },
    {
      "name": "でんこうせっか",
      "type": "ノーマル",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。"
    },
    {
      "name": "レイジングブル",
      "type": "ノーマル",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "壁技を破壊する。ケンタロスの姿でタイプが変わる。"
    },
    {
      "name": "だいふんげき",
      "type": "ほのお",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "2〜3ターン連続攻撃後、こんらんする。"
    },
    {
      "name": "こうそくスピン",
      "type": "ノーマル",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "拘束技・設置技を解除し、自分のすばやさが上がる。"
    },
    {
      "name": "シェルブレード",
      "type": "みず",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "一定確率で相手のぼうぎょを下げる。"
    },
    {
      "name": "ライジングボルト",
      "type": "でんき",
      "category": "special",
      "power": 70,
      "aliases": [],
      "effect": "相手がエレキフィールド上にいると威力が2倍。"
    },
    {
      "name": "ロックブラスト",
      "type": "いわ",
      "category": "physical",
      "power": 25,
      "aliases": [],
      "effect": "2〜5回連続で攻撃する。"
    },
    {
      "name": "いわなだれ",
      "type": "いわ",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "相手全体攻撃。一定確率でひるみ。"
    },
    {
      "name": "がんせきふうじ",
      "type": "いわ",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "命中時、相手のすばやさを下げる。"
    },
    {
      "name": "がんせきほう",
      "type": "いわ",
      "category": "physical",
      "power": 150,
      "aliases": [],
      "effect": "高威力だが、次のターン動けない。"
    },
    {
      "name": "りんしょう",
      "type": "ノーマル",
      "category": "special",
      "power": 60,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "せいなるつるぎ",
      "type": "かくとう",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "相手の能力ランク変化を無視して攻撃する。"
    },
    {
      "name": "しおづけ",
      "type": "いわ",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "継続ダメージを与える。みず・はがねには効果が大きい。"
    },
    {
      "name": "すなじごく",
      "type": "じめん",
      "category": "physical",
      "power": 35,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "ねっとう",
      "type": "みず",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率でやけど。"
    },
    {
      "name": "スケイルショット",
      "type": "ドラゴン",
      "category": "physical",
      "power": 25,
      "aliases": [],
      "effect": "2〜5回攻撃後、すばやさが上がりぼうぎょが下がる。"
    },
    {
      "name": "ねっさのだいち",
      "type": "じめん",
      "category": "special",
      "power": 70,
      "aliases": [],
      "effect": "一定確率でやけど。"
    },
    {
      "name": "タネばくだん",
      "type": "くさ",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "じばく",
      "type": "ノーマル",
      "category": "physical",
      "power": 200,
      "aliases": [],
      "effect": "使用後、自分はひんしになる。高威力全体攻撃。"
    },
    {
      "name": "シャドーボール",
      "type": "ゴースト",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手のとくぼうを下げる。"
    },
    {
      "name": "シャドークロー",
      "type": "ゴースト",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "シャドーパンチ",
      "type": "ゴースト",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "必中のパンチ技。"
    },
    {
      "name": "かげうち",
      "type": "ゴースト",
      "category": "physical",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい。"
    },
    {
      "name": "シェルアームズ",
      "type": "どく",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "物理・特殊のうち通りやすい側で攻撃することがある。一定確率でどく。"
    },
    {
      "name": "はいよるいちげき",
      "type": "むし",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "命中時、相手のとくこうを下げる。"
    },
    {
      "name": "ゴッドバード",
      "type": "ひこう",
      "category": "physical",
      "power": 140,
      "aliases": [],
      "effect": "1ターン目にため、2ターン目に攻撃。急所・ひるみ要素あり。"
    },
    {
      "name": "ヘドロばくだん",
      "type": "どく",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "一定確率でどく。"
    },
    {
      "name": "ヘドロウェーブ",
      "type": "どく",
      "category": "special",
      "power": 95,
      "aliases": [],
      "effect": "周囲全体攻撃。一定確率でどく。"
    },
    {
      "name": "うちおとす",
      "type": "いわ",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "ひこう・ふゆう等を地面に落とし、じめん技を当てやすくする。"
    },
    {
      "name": "スマートホーン",
      "type": "はがね",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "必中技。"
    },
    {
      "name": "トラバサミ",
      "type": "はがね",
      "category": "physical",
      "power": 35,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "バークアウト",
      "type": "あく",
      "category": "special",
      "power": 55,
      "aliases": [],
      "effect": "相手全体のとくこうを下げる。音技。"
    },
    {
      "name": "いびき",
      "type": "ノーマル",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "自分がねむりの時のみ使用。一定確率でひるみ。音技。"
    },
    {
      "name": "ソーラービーム",
      "type": "くさ",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "通常は1ターンためる。晴れなら即攻撃。"
    },
    {
      "name": "ソーラーブレード",
      "type": "くさ",
      "category": "physical",
      "power": 125,
      "aliases": [],
      "effect": "通常は1ターンためる。晴れなら即攻撃。"
    },
    {
      "name": "うたかたのアリア",
      "type": "みず",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "音技。対象のやけどを治す。"
    },
    {
      "name": "かげぬい",
      "type": "ゴースト",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "命中した相手を交代・逃走しにくくする。"
    },
    {
      "name": "てっていこうせん",
      "type": "はがね",
      "category": "special",
      "power": 140,
      "aliases": [],
      "effect": "自分のHPを大きく削る高威力技。"
    },
    {
      "name": "アイアンローラー",
      "type": "はがね",
      "category": "physical",
      "power": 130,
      "aliases": [],
      "effect": "フィールドを解除する。フィールドがないと失敗。"
    },
    {
      "name": "はがねのつばさ",
      "type": "はがね",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "一定確率で自分のぼうぎょが上がる。"
    },
    {
      "name": "じだんだ",
      "type": "じめん",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "直前の技が失敗していると威力が2倍。"
    },
    {
      "name": "がんせきアックス",
      "type": "いわ",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "相手の場にステルスロックを設置する。"
    },
    {
      "name": "ストーンエッジ",
      "type": "いわ",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "急所に当たりやすい。"
    },
    {
      "name": "アシストパワー",
      "type": "エスパー",
      "category": "special",
      "power": 20,
      "aliases": [],
      "effect": "自分の能力上昇が多いほど威力が上がる。"
    },
    {
      "name": "やまあらし",
      "type": "かくとう",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "必ず急所に当たる。"
    },
    {
      "name": "むしのていこう",
      "type": "むし",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "相手全体のとくこうを下げる。"
    },
    {
      "name": "ふいうち",
      "type": "あく",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "相手が攻撃技を選んだ時に先制して成功する。"
    },
    {
      "name": "サンダーダイブ",
      "type": "でんき",
      "category": "physical",
      "power": 100,
      "aliases": [],
      "effect": "外すか防がれると自分も大きな反動ダメージを受ける。一定確率でまひ。"
    },
    {
      "name": "ばかぢから",
      "type": "かくとう",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "攻撃後、自分のこうげき・ぼうぎょが下がる。"
    },
    {
      "name": "なみのり",
      "type": "みず",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "みずあめボム",
      "type": "くさ",
      "category": "special",
      "power": 60,
      "aliases": [],
      "effect": "命中後、相手のすばやさを下げる。"
    },
    {
      "name": "タキオンカッター",
      "type": "はがね",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "2回攻撃。必中扱い。"
    },
    {
      "name": "スイープビンタ",
      "type": "ノーマル",
      "category": "physical",
      "power": 25,
      "aliases": [],
      "effect": "2〜5回連続で攻撃する。"
    },
    {
      "name": "やけっぱち",
      "type": "ほのお",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "前のターンに技が失敗していると威力が2倍。"
    },
    {
      "name": "テラクラスター",
      "type": "ノーマル",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "テラスタル時にタイプが変わり、攻撃・特攻の高い方で計算。"
    },
    {
      "name": "だいちのはどう",
      "type": "ノーマル",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "フィールドに応じてタイプと威力が変わる。"
    },
    {
      "name": "どろぼう",
      "type": "あく",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "相手の持ち物を奪うことがある。"
    },
    {
      "name": "あばれる",
      "type": "ノーマル",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "2〜3ターン連続攻撃後、こんらんする。"
    },
    {
      "name": "じごくづき",
      "type": "あく",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "相手を数ターン音技が使えない状態にする。"
    },
    {
      "name": "かみなり",
      "type": "でんき",
      "category": "special",
      "power": 110,
      "aliases": [],
      "effect": "一定確率でまひ。雨で命中しやすく、晴れで命中しにくい。"
    },
    {
      "name": "かみなりのキバ",
      "type": "でんき",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "一定確率でまひ、またはひるみ。"
    },
    {
      "name": "かみなりパンチ",
      "type": "でんき",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "一定確率でまひ。パンチ技。"
    },
    {
      "name": "10まんボルト",
      "type": "でんき",
      "category": "special",
      "power": 90,
      "aliases": [
        "１０まんボルト"
      ],
      "effect": "一定確率でまひ。"
    },
    {
      "name": "フレアソング",
      "type": "ほのお",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "攻撃後、自分のとくこうが上がる。音技。"
    },
    {
      "name": "くさわけ",
      "type": "くさ",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "攻撃後、自分のすばやさが上がる。"
    },
    {
      "name": "トライアタック",
      "type": "ノーマル",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "一定確率でまひ・やけど・こおりのいずれかにする。"
    },
    {
      "name": "3ぼんのや",
      "type": "かくとう",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "急所に当たりやすく、防御低下・ひるみの追加効果を持つ。"
    },
    {
      "name": "トリプルアクセル",
      "type": "こおり",
      "category": "physical",
      "power": 20,
      "aliases": [],
      "effect": "最大3回連続で攻撃し、当たるたび威力が上がる。"
    },
    {
      "name": "トロピカルキック",
      "type": "くさ",
      "category": "physical",
      "power": 85,
      "aliases": [],
      "effect": "命中時、相手のこうげきを下げる。"
    },
    {
      "name": "ツインビーム",
      "type": "エスパー",
      "category": "special",
      "power": 40,
      "aliases": [],
      "effect": "2回連続で攻撃する。"
    },
    {
      "name": "とんぼがえり",
      "type": "むし",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "攻撃後、手持ちに戻る。"
    },
    {
      "name": "はやてがえし",
      "type": "かくとう",
      "category": "physical",
      "power": 65,
      "aliases": [],
      "effect": "相手の先制技に反応して有効。成功時にひるませる。"
    },
    {
      "name": "さわぐ",
      "type": "ノーマル",
      "category": "special",
      "power": 90,
      "aliases": [],
      "effect": "数ターン連続攻撃。音技。場のポケモンが眠れなくなる。"
    },
    {
      "name": "しんくうは",
      "type": "かくとう",
      "category": "special",
      "power": 40,
      "aliases": [],
      "effect": "優先度+1で先制しやすい特殊技。"
    },
    {
      "name": "ベノムショック",
      "type": "どく",
      "category": "special",
      "power": 65,
      "aliases": [],
      "effect": "相手がどく状態なら威力が2倍。"
    },
    {
      "name": "ボルトチェンジ",
      "type": "でんき",
      "category": "special",
      "power": 70,
      "aliases": [],
      "effect": "攻撃後、手持ちに戻る。"
    },
    {
      "name": "ボルテッカー",
      "type": "でんき",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "反動ダメージあり。一定確率でまひ。"
    },
    {
      "name": "みずのはどう",
      "type": "みず",
      "category": "special",
      "power": 60,
      "aliases": [],
      "effect": "一定確率でこんらん。波動技。"
    },
    {
      "name": "みずしゅりけん",
      "type": "みず",
      "category": "special",
      "power": 15,
      "aliases": [],
      "effect": "優先度+1。2〜5回連続で攻撃する。"
    },
    {
      "name": "しおふき",
      "type": "みず",
      "category": "special",
      "power": 150,
      "aliases": [],
      "effect": "自分のHPが多いほど威力が高い。"
    },
    {
      "name": "たきのぼり",
      "type": "みず",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "一定確率で相手をひるませる。"
    },
    {
      "name": "ウェーブタックル",
      "type": "みず",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "与えたダメージの一部を反動で受ける。"
    },
    {
      "name": "ウェザーボール",
      "type": "ノーマル",
      "category": "special",
      "power": 50,
      "aliases": [],
      "effect": "天気でタイプが変わり、天気下で威力が上がる。"
    },
    {
      "name": "うずしお",
      "type": "みず",
      "category": "special",
      "power": 35,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "ワイルドボルト",
      "type": "でんき",
      "category": "physical",
      "power": 90,
      "aliases": [],
      "effect": "与えたダメージの一部を反動で受ける。"
    },
    {
      "name": "ウッドハンマー",
      "type": "くさ",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "与えたダメージの一部を反動で受ける。"
    },
    {
      "name": "まきつく",
      "type": "ノーマル",
      "category": "physical",
      "power": 15,
      "aliases": [],
      "effect": "数ターン拘束し、継続ダメージを与える。"
    },
    {
      "name": "シザークロス",
      "type": "むし",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "でんじほう",
      "type": "でんき",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "命中時、相手をまひにする。"
    },
    {
      "name": "しねんのずつき",
      "type": "エスパー",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": ""
    },
    {
      "name": "アクアリング",
      "type": "みず",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "あくび",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "あさのひざし",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "あまいかおり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "あまえる",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "あまごい",
      "type": "みず",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "あやしいひかり",
      "type": "ゴースト",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "アロマミスト",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "アンコール",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いえき",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いかりのこな",
      "type": "むし",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いたみわけ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いちゃもん",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いとをはく",
      "type": "むし",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いのちのしずく",
      "type": "みず",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いばる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いやしのすず",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いやしのねがい",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いやしのはどう",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "いやなおと",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "うそなき",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "うたう",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "うらみ",
      "type": "ゴースト",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "エレキフィールド",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おいかぜ",
      "type": "ひこう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おかたづけ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おきみやげ",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おさきにどうぞ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おたけび",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おだてる",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おちゃかい",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "おにび",
      "type": "ほのお",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "オーロラベール",
      "type": "こおり",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "かいでんぱ",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "かげぶんしん",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "かなしばり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "からをやぶる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ガードシェア",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ガードスワップ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "きあいだめ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "きりばらい",
      "type": "ひこう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "キングシールド",
      "type": "はがね",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "きんぞくおん",
      "type": "はがね",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "くすぐる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "グラスフィールド",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "くろいきり",
      "type": "こおり",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "くろいまなざし",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "こうごうせい",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "こうそくいどう",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "コスモパワー",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "コットンガード",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "このゆびとまれ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "こらえる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "こわいかお",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "コーチング",
      "type": "かくとう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "サイコフィールド",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "サイドチェンジ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "さいはい",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "さいみんじゅつ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "さきおくり",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "さむいギャグ",
      "type": "こおり",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "じこあんじ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "じこさいせい",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "しっぽきり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "じばそうさ",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "しびれごな",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "じゅうでん",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "じゅうりょく",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "しんぴのまもり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "シンプルビーム",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "スキルスワップ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "すてゼリフ",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ステルスロック",
      "type": "いわ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "すなあらし",
      "type": "いわ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "スピードスワップ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "すりかえ",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "せいちょう",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "そうでん",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ソウルビート",
      "type": "ドラゴン",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "たくわえる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "たてこもる",
      "type": "はがね",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ちいさくなる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ちからをすいとる",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ちょうのまい",
      "type": "むし",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ちょうはつ",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "つきのひかり",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "つぶらなひとみ",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "つぼをつく",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "つるぎのまい",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "てだすけ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "てっぺき",
      "type": "はがね",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "てんしのキッス",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "とおせんぼう",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "とおぼえ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "とぐろをまく",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "とける",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "デコレーション",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "トリック",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "トリックルーム",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "でんじは",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "でんじふゆう",
      "type": "でんき",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "トーチカ",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "なかまづくり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "どくどく",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "どくのいと",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "どくのこな",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "どくびし",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "なまける",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "なみだめ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "なやみのタネ",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ドラゴンエール",
      "type": "ドラゴン",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "なりきり",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ドわすれ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "にほんばれ",
      "type": "ほのお",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ニードルガード",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ねがいごと",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ねごと",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ねばねばネット",
      "type": "むし",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "のみこむ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ねむりごな",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ねむる",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "のろい",
      "type": "ゴースト",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ねをはる",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "バトンタッチ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "はねやすめ",
      "type": "ひこう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ハバネロエキス",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "はらだいこ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ハロウィン",
      "type": "ゴースト",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "パワーシェア",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "パワースワップ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "パワートリック",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ひかりのかべ",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ビルドアップ",
      "type": "かくとう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ファストガード",
      "type": "かくとう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ふういん",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "フェアリーロック",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "フェザーダンス",
      "type": "ひこう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ふきとばし",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ふしょくガス",
      "type": "どく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "フラフラダンス",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "へびにらみ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "へんしん",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ほえる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ほおばる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ほろびのうた",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "まきびし",
      "type": "じめん",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "マジックルーム",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "まねっこ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "まほうのこな",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "まもる",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "みがわり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "みきり",
      "type": "かくとう",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ミストフィールド",
      "type": "フェアリー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "みずびたし",
      "type": "みず",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "みちづれ",
      "type": "ゴースト",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ミラータイプ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "めいそう",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "メロメロ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "もりののろい",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "やどりぎのタネ",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ゆきげしき",
      "type": "こおり",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "リサイクル",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "リフレクター",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "りゅうのまい",
      "type": "ドラゴン",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ロックオン",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ロックカット",
      "type": "いわ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ワイドガード",
      "type": "いわ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "わたほうし",
      "type": "くさ",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "わるだくみ",
      "type": "あく",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ワンダールーム",
      "type": "エスパー",
      "category": "status",
      "power": null,
      "accuracy": null,
      "pp": null,
      "effect": "変化技。詳細効果はゲーム内またはポケモンチャンピオンズの最新技一覧で確認してください。"
    },
    {
      "name": "ハサミギロチン",
      "type": "ノーマル",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "つのドリル",
      "type": "ノーマル",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "けたぐり",
      "type": "かくとう",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "カウンター",
      "type": "かくとう",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ちきゅうなげ",
      "type": "かくとう",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "じわれ",
      "type": "じめん",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ナイトヘッド",
      "type": "ゴースト",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "いかりのまえば",
      "type": "ノーマル",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "きりさく",
      "type": "ノーマル",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "じたばた",
      "type": "ノーマル",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "きしかいせい",
      "type": "かくとう",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ミルクのみ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ミラーコート",
      "type": "エスパー",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ふくろだたき",
      "type": "あく",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "はきだす",
      "type": "ノーマル",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "がむしゃら",
      "type": "ノーマル",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ぜったいれいど",
      "type": "こおり",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ジャイロボール",
      "type": "はがね",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "メタルバースト",
      "type": "はがね",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "なげつける",
      "type": "あく",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "つじぎり",
      "type": "あく",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "くさむすび",
      "type": "くさ",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ヘビーボンバー",
      "type": "はがね",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "エレキボール",
      "type": "でんき",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "たたりめ",
      "type": "ゴースト",
      "category": "special",
      "power": 65,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ギアチェンジ",
      "type": "はがね",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "いのちがけ",
      "type": "かくとう",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ヒートスタンプ",
      "type": "ほのお",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ひっくりかえす",
      "type": "あく",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "びりびりちくちく",
      "type": "でんき",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ねらいうち",
      "type": "みず",
      "category": "special",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "くらいつく",
      "type": "あく",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "はいすいのじん",
      "type": "かくとう",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "たこがため",
      "type": "かくとう",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "コートチェンジ",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ドラムアタック",
      "type": "くさ",
      "category": "physical",
      "power": 80,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "かえんボール",
      "type": "ほのお",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "オーバードライブ",
      "type": "でんき",
      "category": "special",
      "power": 80,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ソウルクラッシュ",
      "type": "フェアリー",
      "category": "physical",
      "power": 75,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "スターアサルト",
      "type": "かくとう",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "どくばりセンボン",
      "type": "どく",
      "category": "physical",
      "power": 60,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "きょけんとつげき",
      "type": "ドラゴン",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "さいきのいのり",
      "type": "ノーマル",
      "category": "status",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ゴールドラッシュ",
      "type": "はがね",
      "category": "special",
      "power": 120,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ふんどのこぶし",
      "type": "ゴースト",
      "category": "physical",
      "power": 50,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "でんこうそうげき",
      "type": "でんき",
      "category": "physical",
      "power": 120,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ほうふく",
      "type": "あく",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "アクアカッター",
      "type": "みず",
      "category": "physical",
      "power": 70,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    },
    {
      "name": "ハードプレス",
      "type": "はがね",
      "category": "physical",
      "power": null,
      "aliases": [],
      "effect": "効果詳細：未確認。"
    }
  ],
  "moveAliases": {
    "アクセルロック": "アクセルロック",
    "アシッドボム": "アシッドボム",
    "アクロバット": "アクロバット",
    "つばめがえし": "つばめがえし",
    "エアカッター": "エアカッター",
    "エアスラッシュ": "エアスラッシュ",
    "みわくのボイス": "みわくのボイス",
    "げんしのちから": "げんしのちから",
    "りんごさん": "りんごさん",
    "アクアジェット": "アクアジェット",
    "アクアステップ": "アクアステップ",
    "アクアテール": "アクアテール",
    "アーマーキャノン": "アーマーキャノン",
    "ダメおし": "ダメおし",
    "はどうだん": "はどうだん",
    "オーラぐるま": "オーラぐるま",
    "ゆきなだれ": "ゆきなだれ",
    "かかとおとし": "かかとおとし",
    "くちばしキャノン": "くちばしキャノン",
    "ゲップ": "ゲップ",
    "しめつける": "しめつける",
    "かみつく": "かみつく",
    "むねんのつるぎ": "むねんのつるぎ",
    "うらみつらみ": "うらみつらみ",
    "ブラストバーン": "ブラストバーン",
    "ブレイズキック": "ブレイズキック",
    "ふぶき": "ふぶき",
    "ブラッドムーン": "ブラッドムーン",
    "ボディプレス": "ボディプレス",
    "のしかかり": "のしかかり",
    "ボーンラッシュ": "ボーンラッシュ",
    "ばくおんぱ": "ばくおんぱ",
    "とびはねる": "とびはねる",
    "ブレイブバード": "ブレイブバード",
    "ワイドブレイカー": "ワイドブレイカー",
    "かわらわり": "かわらわり",
    "ぶんまわす": "ぶんまわす",
    "むしくい": "むしくい",
    "むしのさざめき": "むしのさざめき",
    "じならし": "じならし",
    "バレットパンチ": "バレットパンチ",
    "タネマシンガン": "タネマシンガン",
    "もえつきる": "もえつきる",
    "しっとのほのお": "しっとのほのお",
    "ひけん・ちえなみ": "ひけん・ちえなみ",
    "チャージビーム": "チャージビーム",
    "ひやみず": "ひやみず",
    "ともえなげ": "ともえなげ",
    "スケイルノイズ": "スケイルノイズ",
    "クリアスモッグ": "クリアスモッグ",
    "インファイト": "インファイト",
    "ほしがる": "ほしがる",
    "クラブハンマー": "クラブハンマー",
    "クロスチョップ": "クロスチョップ",
    "クロスポイズン": "クロスポイズン",
    "かみくだく": "かみくだく",
    "ブレイククロー": "ブレイククロー",
    "あくのはどう": "あくのはどう",
    "ddラリアット": "DDラリアット",
    "ｄｄラリアット": "DDラリアット",
    "マジカルシャイン": "マジカルシャイン",
    "あなをほる": "あなをほる",
    "フェイタルクロー": "フェイタルクロー",
    "ほうでん": "ほうでん",
    "ダイビング": "ダイビング",
    "ダブルアタック": "ダブルアタック",
    "すてみタックル": "すてみタックル",
    "りゅうせいぐん": "りゅうせいぐん",
    "ドラゴンクロー": "ドラゴンクロー",
    "ドラゴンアロー": "ドラゴンアロー",
    "りゅうのはどう": "りゅうのはどう",
    "ドラゴンダイブ": "ドラゴンダイブ",
    "ドラゴンテール": "ドラゴンテール",
    "ドレインパンチ": "ドレインパンチ",
    "ドレインキッス": "ドレインキッス",
    "ドリルくちばし": "ドリルくちばし",
    "ドリルライナー": "ドリルライナー",
    "ダブルウイング": "ダブルウイング",
    "ばくれつパンチ": "ばくれつパンチ",
    "だいちのちから": "だいちのちから",
    "じしん": "じしん",
    "ぶきみなじゅもん": "ぶきみなじゅもん",
    "エレクトロビーム": "エレクトロビーム",
    "エレキネット": "エレキネット",
    "エナジーボール": "エナジーボール",
    "ふんか": "ふんか",
    "ワイドフォース": "ワイドフォース",
    "だいばくはつ": "だいばくはつ",
    "じんつうりき": "じんつうりき",
    "しんそく": "しんそく",
    "からげんき": "からげんき",
    "ねこだまし": "ねこだまし",
    "フェイント": "フェイント",
    "とどめばり": "とどめばり",
    "きまぐレーザー": "きまぐレーザー",
    "ほのおのまい": "ほのおのまい",
    "だいもんじ": "だいもんじ",
    "ほのおのキバ": "ほのおのキバ",
    "ほのおのムチ": "ほのおのムチ",
    "ほのおのパンチ": "ほのおのパンチ",
    "ほのおのうず": "ほのおのうず",
    "であいがしら": "であいがしら",
    "ニトロチャージ": "ニトロチャージ",
    "かえんほうしゃ": "かえんほうしゃ",
    "フレアドライブ": "フレアドライブ",
    "ラスターカノン": "ラスターカノン",
    "クイックターン": "クイックターン",
    "トリックフラワー": "トリックフラワー",
    "そらをとぶ": "そらをとぶ",
    "フライングプレス": "フライングプレス",
    "きあいだま": "きあいだま",
    "きあいパンチ": "きあいパンチ",
    "イカサマ": "イカサマ",
    "フリーズドライ": "フリーズドライ",
    "ハードプラント": "ハードプラント",
    "こおりのいぶき": "こおりのいぶき",
    "みらいよち": "みらいよち",
    "ギガドレイン": "ギガドレイン",
    "ギガインパクト": "ギガインパクト",
    "デカハンマー": "デカハンマー",
    "グラススライダー": "グラススライダー",
    "gのちから": "Gのちから",
    "ｇのちから": "Gのちから",
    "ダストシュート": "ダストシュート",
    "アームハンマー": "アームハンマー",
    "もろはのずつき": "もろはのずつき",
    "ぶちかまし": "ぶちかまし",
    "ねっぷう": "ねっぷう",
    "10まんばりき": "10まんばりき",
    "１０まんばりき": "10まんばりき",
    "とびひざげり": "とびひざげり",
    "ウッドホーン": "ウッドホーン",
    "ぼうふう": "ぼうふう",
    "ハイドロカノン": "ハイドロカノン",
    "ハイドロポンプ": "ハイドロポンプ",
    "はかいこうせん": "はかいこうせん",
    "ハイパーボイス": "ハイパーボイス",
    "れいとうビーム": "れいとうビーム",
    "こおりのキバ": "こおりのキバ",
    "アイスハンマー": "アイスハンマー",
    "れいとうパンチ": "れいとうパンチ",
    "こおりのつぶて": "こおりのつぶて",
    "アイススピナー": "アイススピナー",
    "つららおとし": "つららおとし",
    "つららばり": "つららばり",
    "こごえるかぜ": "こごえるかぜ",
    "ひゃっきやこう": "ひゃっきやこう",
    "れんごく": "れんごく",
    "まとわりつく": "まとわりつく",
    "アイアンヘッド": "アイアンヘッド",
    "アイアンテール": "アイアンテール",
    "ツタこんぼう": "ツタこんぼう",
    "ジェットパンチ": "ジェットパンチ",
    "はたきおとす": "はたきおとす",
    "ドゲザン": "ドゲザン",
    "うっぷんばらし": "うっぷんばらし",
    "とっておき": "とっておき",
    "おはかまいり": "おはかまいり",
    "ふんえん": "ふんえん",
    "リーフブレード": "リーフブレード",
    "リーフストーム": "リーフストーム",
    "きゅうけつ": "きゅうけつ",
    "はめつのひかり": "はめつのひかり",
    "アクアブレイク": "アクアブレイク",
    "ローキック": "ローキック",
    "ルミナコリジョン": "ルミナコリジョン",
    "とびかかる": "とびかかる",
    "マッハパンチ": "マッハパンチ",
    "シャカシャカほう": "シャカシャカほう",
    "メガトンキック": "メガトンキック",
    "メガホーン": "メガホーン",
    "メテオビーム": "メテオビーム",
    "コメットパンチ": "コメットパンチ",
    "ミストバースト": "ミストバースト",
    "ムーンフォース": "ムーンフォース",
    "キラースピン": "キラースピン",
    "ひょうざんおろし": "ひょうざんおろし",
    "マッドショット": "マッドショット",
    "どろかけ": "どろかけ",
    "だくりゅう": "だくりゅう",
    "マジカルフレイム": "マジカルフレイム",
    "ナイトバースト": "ナイトバースト",
    "ほっぺすりすり": "ほっぺすりすり",
    "げきりん": "げきりん",
    "オーバーヒート": "オーバーヒート",
    "パラボラチャージ": "パラボラチャージ",
    "しっぺがえし": "しっぺがえし",
    "はなふぶき": "はなふぶき",
    "はなびらのまい": "はなびらのまい",
    "ゴーストダイブ": "ゴーストダイブ",
    "ミサイルばり": "ミサイルばり",
    "じゃれつく": "じゃれつく",
    "ついばむ": "ついばむ",
    "どくどくのキバ": "どくどくのキバ",
    "どくづき": "どくづき",
    "かふんだんご": "かふんだんご",
    "ポルターガイスト": "ポルターガイスト",
    "ネズミざん": "ネズミざん",
    "とびつく": "とびつく",
    "はたく": "はたく",
    "パワージェム": "パワージェム",
    "つけあがる": "つけあがる",
    "パワーウィップ": "パワーウィップ",
    "サイコキネシス": "サイコキネシス",
    "サイコファング": "サイコファング",
    "サイコノイズ": "サイコノイズ",
    "サイコカッター": "サイコカッター",
    "バリアーラッシュ": "バリアーラッシュ",
    "サイコショック": "サイコショック",
    "でんこうせっか": "でんこうせっか",
    "レイジングブル": "レイジングブル",
    "だいふんげき": "だいふんげき",
    "こうそくスピン": "こうそくスピン",
    "シェルブレード": "シェルブレード",
    "ライジングボルト": "ライジングボルト",
    "ロックブラスト": "ロックブラスト",
    "いわなだれ": "いわなだれ",
    "がんせきふうじ": "がんせきふうじ",
    "がんせきほう": "がんせきほう",
    "りんしょう": "りんしょう",
    "せいなるつるぎ": "せいなるつるぎ",
    "しおづけ": "しおづけ",
    "すなじごく": "すなじごく",
    "ねっとう": "ねっとう",
    "スケイルショット": "スケイルショット",
    "ねっさのだいち": "ねっさのだいち",
    "タネばくだん": "タネばくだん",
    "じばく": "じばく",
    "シャドーボール": "シャドーボール",
    "シャドークロー": "シャドークロー",
    "シャドーパンチ": "シャドーパンチ",
    "かげうち": "かげうち",
    "シェルアームズ": "シェルアームズ",
    "はいよるいちげき": "はいよるいちげき",
    "ゴッドバード": "ゴッドバード",
    "ヘドロばくだん": "ヘドロばくだん",
    "ヘドロウェーブ": "ヘドロウェーブ",
    "うちおとす": "うちおとす",
    "スマートホーン": "スマートホーン",
    "トラバサミ": "トラバサミ",
    "バークアウト": "バークアウト",
    "いびき": "いびき",
    "ソーラービーム": "ソーラービーム",
    "ソーラーブレード": "ソーラーブレード",
    "うたかたのアリア": "うたかたのアリア",
    "かげぬい": "かげぬい",
    "てっていこうせん": "てっていこうせん",
    "アイアンローラー": "アイアンローラー",
    "はがねのつばさ": "はがねのつばさ",
    "じだんだ": "じだんだ",
    "がんせきアックス": "がんせきアックス",
    "ストーンエッジ": "ストーンエッジ",
    "アシストパワー": "アシストパワー",
    "やまあらし": "やまあらし",
    "むしのていこう": "むしのていこう",
    "ふいうち": "ふいうち",
    "サンダーダイブ": "サンダーダイブ",
    "ばかぢから": "ばかぢから",
    "なみのり": "なみのり",
    "みずあめボム": "みずあめボム",
    "タキオンカッター": "タキオンカッター",
    "スイープビンタ": "スイープビンタ",
    "やけっぱち": "やけっぱち",
    "テラクラスター": "テラクラスター",
    "だいちのはどう": "だいちのはどう",
    "どろぼう": "どろぼう",
    "あばれる": "あばれる",
    "じごくづき": "じごくづき",
    "かみなり": "かみなり",
    "かみなりのキバ": "かみなりのキバ",
    "かみなりパンチ": "かみなりパンチ",
    "10まんボルト": "10まんボルト",
    "１０まんボルト": "10まんボルト",
    "フレアソング": "フレアソング",
    "くさわけ": "くさわけ",
    "トライアタック": "トライアタック",
    "3ぼんのや": "3ぼんのや",
    "トリプルアクセル": "トリプルアクセル",
    "トロピカルキック": "トロピカルキック",
    "ツインビーム": "ツインビーム",
    "とんぼがえり": "とんぼがえり",
    "はやてがえし": "はやてがえし",
    "さわぐ": "さわぐ",
    "しんくうは": "しんくうは",
    "ベノムショック": "ベノムショック",
    "ボルトチェンジ": "ボルトチェンジ",
    "ボルテッカー": "ボルテッカー",
    "みずのはどう": "みずのはどう",
    "みずしゅりけん": "みずしゅりけん",
    "しおふき": "しおふき",
    "たきのぼり": "たきのぼり",
    "ウェーブタックル": "ウェーブタックル",
    "ウェザーボール": "ウェザーボール",
    "うずしお": "うずしお",
    "ワイルドボルト": "ワイルドボルト",
    "ウッドハンマー": "ウッドハンマー",
    "まきつく": "まきつく",
    "シザークロス": "シザークロス",
    "でんじほう": "でんじほう",
    "しねんのずつき": "しねんのずつき"
  }
});
