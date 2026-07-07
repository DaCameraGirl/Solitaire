<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="纸牌接龙 — 经典 Klondike，直接在浏览器中畅玩" width="100%"/>
</p>

# 纸牌接龙

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-d4af37?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="动画示意图：一张牌翻转露出黑桃 A" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_在线演示-d4af37?style=for-the-badge" alt="在线演示"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**经典 Klondike 纸牌接龙，直接在浏览器中畅玩。** 拖放卡牌、挑选牌面样式、挑选桌布颜色、
尝试挑战任务，还可以打开音乐和音效。无需安装，无需构建，零依赖——只有 HTML、CSS
和原生 JavaScript。

在线体验：[dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## 功能

| 功能 | 作用 |
|---|---|
| **真正的拖放操作** | 直接拿起一张牌放到该去的位置，不用先点选再点目标 |
| **自动归位** | 只需点击一张牌，如果有合法位置就会自动送入基础堆——比如 A 会自己回家 |
| **4 种牌面样式** | 经典、皇家（象牙白/衬线字体/金色水印）、简约、霓虹——你的选择会被记住 |
| **5 种桌布颜色** | 绿色毛毡、紫色、藏青色、酒红色、炭灰色——同样会被记住 |
| **挑战任务** | 极速挑战（60 步内获胜）、禁止回收（从不回收弃牌堆）、A 牌冲刺（第 15 步前凑齐 4 张 A） |
| **音乐与音效** | 可开关的循环环境音乐，加上抽牌、落牌、无效操作和获胜时的音效 |
| **胜利庆祝** | 通关时的彩纸庆祝动画和胜利音效 |

## 玩法

- 拖动一张牌并放到基础堆或另一列上即可移动它。
- 单击（不拖动）一张牌，如果有合法位置，它会自动送入基础堆——这是快速清理 A 和小牌的办法。
- 牌按花色从 A 开始按升序放入基础堆。
- 牌只能放到另一列中颜色相反、点数大一级的牌上（或放到空列上的 K）。
- 点击发牌堆将一张牌翻到弃牌堆；发牌堆为空时再次点击可将弃牌堆回收回发牌堆。
- 将全部 52 张牌移入四个基础堆即可获胜。

## 本地运行

无需安装——直接在浏览器中打开 `index.html`，或用任意静态文件服务器托管该文件夹：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署

GitHub Pages 直接从 `main` 分支根目录提供服务，无需构建步骤，因此每次推送到
`main` 都会自动上线。

## 贡献者

- Angela — 产品方向、测试
- Claude — 实现与 GitHub 工作流

## 法律声明

一切都完全在你的浏览器中运行。没有账户，不收集数据，没有服务器——你的游戏状态仅存在于
页面中；至于你的牌面/桌布偏好设置，则保存在浏览器的本地存储中。
