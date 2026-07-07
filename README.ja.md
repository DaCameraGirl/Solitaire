<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="ソリティア — 定番のクロンダイク、ブラウザでそのまま遊べる" width="100%"/>
</p>

# ソリティア

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-d4af37?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="アニメーション図解：カードが裏返ってスペードのAが現れる" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_ライブデモ-d4af37?style=for-the-badge" alt="ライブデモ"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**定番のクロンダイク・ソリティアが、そのままブラウザで遊べます。** カードをドラッグ＆
ドロップで動かし、デッキスタイルを選び、テーブルの色を選び、チャレンジミッションに挑戦
し、音楽とサウンドを鳴らしながらプレイできます。インストール不要、ビルド不要、依存関係
なし — 純粋な HTML・CSS・JavaScript だけで作られています。

ライブ版: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## 機能

| 機能 | 内容 |
|---|---|
| **本物のドラッグ＆ドロップ** | カードをつかんで行き先に置くだけ、クリック→クリックの手間なし |
| **自動ファウンデーション送り** | 有効な移動先があれば、カードをクリックするだけで自動的にファウンデーションへ。エースなどは自分で帰っていく |
| **4種類のデッキスタイル** | クラシック、ロイヤル（アイボリー・セリフ体・金の透かし）、ミニマル、ネオン。選んだスタイルは次回も記憶される |
| **5種類のテーブルカラー** | グリーンフェルト、パープル、ネイビー、バーガンディ、チャコール。こちらも記憶される |
| **チャレンジミッション** | スピードラン（60手未満でクリア）、ノーリドロー（山札の再利用なし）、エースラッシュ（15手までにエース4枚をファウンデーションへ） |
| **音楽とサウンド** | オン・オフ切り替え可能なループBGMに加え、ドロー・カード設置・無効な操作・勝利時の効果音 |
| **勝利演出** | 盤面をクリアすると紙吹雪とファンファーレで祝福 |

## 遊び方

- カードをドラッグしてファウンデーションや別の列にドロップすると移動します。
- ドラッグせずにカードをクリックするだけで、有効な置き場所があれば自動的に
  ファウンデーションへ送られます。エースや小さい数字のカードを素早く片付けるのに便利です。
- カードはエースから始まり、スートごとに昇順でファウンデーションに積みます。
- カードは1つ上の数字で色が反対のカードの上に移動できます（空いた列にはキングのみ置けます）。
- 山札をクリックすると1枚が捨て札に表になります。山札が空のときにもう一度クリックすると
  捨て札が山札に戻ります。
- 52枚すべてをファウンデーションに移動させればクリアです。

## ローカルで実行する

インストール不要 — ブラウザで直接 `index.html` を開くか、任意の静的ファイルサーバーで
フォルダを配信してください。

```bash
python -m http.server 8000
```

その後 `http://localhost:8000` にアクセスします。

## デプロイ

GitHub Pages は `main` ブランチのルートから直接このリポジトリを配信します。ビルド手順
がないため、`main` へのプッシュはそのまま自動的に公開されます。

## コントリビューター

- Angela — プロダクトの方向性、テスト
- Claude — 実装とGitHubワークフロー

## 法的事項

すべての処理はブラウザ内で完結します。アカウントも、データ収集も、サーバーもありません。
ゲームの状態はページ内にのみ存在し、デッキ／テーブルの設定はブラウザのローカルストレージ
に保存されます。
