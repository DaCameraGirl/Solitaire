<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="솔리테어 — 브라우저에서 바로 즐기는 클래식 클론다이크" width="100%"/>
</p>

# 솔리테어

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-d4af37?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="애니메이션 다이어그램: 카드가 뒤집혀 스페이드 에이스가 나타나는 모습" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_라이브_데모-d4af37?style=for-the-badge" alt="라이브 데모"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**클래식 클론다이크 솔리테어를 브라우저에서 바로 즐기세요.** 카드를 드래그 앤 드롭으로
움직이고, 카드 덱 스타일을 고르고, 테이블 색상을 고르고, 챌린지 미션에 도전하고,
음악과 효과음을 켜고 플레이하세요. 설치도, 빌드도, 의존성도 필요 없습니다 —
순수한 HTML, CSS, JavaScript만으로 만들어졌습니다.

라이브: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## 기능

| 기능 | 설명 |
|---|---|
| **진짜 드래그 앤 드롭** | 클릭 두 번이 아니라 카드를 집어서 원하는 곳에 바로 놓기 |
| **자동 파운데이션 이동** | 유효한 자리가 있으면 카드를 클릭하기만 해도 파운데이션으로 자동 이동 — 에이스는 알아서 제자리로 |
| **4가지 카드 덱 스타일** | 클래식, 로열(아이보리/세리프체/금박 워터마크), 미니멀, 네온 — 선택한 스타일은 다음에도 기억됨 |
| **5가지 테이블 색상** | 그린 펠트, 퍼플, 네이비, 버건디, 차콜 — 이것도 기억됨 |
| **챌린지 미션** | 스피드런(60수 이내 승리), 노 리드로우(패 더미 재활용 금지), 에이스 러시(15수 이내 에이스 4장 모두 파운데이션에) |
| **음악과 효과음** | 켜고 끌 수 있는 반복 배경음악과, 카드 뽑기·놓기·잘못된 이동·승리 시 효과음 |
| **승리 연출** | 보드를 클리어하면 색종이 폭죽과 팡파르로 축하 |

## 플레이 방법

- 카드를 드래그해서 파운데이션이나 다른 테이블로 놓으면 이동합니다.
- 드래그하지 않고 카드를 클릭만 해도, 유효한 자리가 있으면 자동으로 파운데이션으로
  이동합니다 — 에이스나 낮은 카드를 빠르게 정리할 때 유용합니다.
- 카드는 에이스부터 시작해 같은 무늬로 오름차순으로 파운데이션에 쌓입니다.
- 카드는 반대 색상의 한 끗 높은 카드 위로만 다른 열로 이동할 수 있습니다(빈 열에는
  킹만 놓을 수 있습니다).
- 패 더미를 클릭하면 카드 한 장이 버림 더미로 넘어갑니다. 패 더미가 비었을 때 다시
  클릭하면 버림 더미가 패 더미로 재활용됩니다.
- 52장을 모두 네 개의 파운데이션으로 옮기면 승리합니다.

## 로컬에서 실행하기

설치가 필요 없습니다 — 브라우저에서 `index.html`을 바로 열거나, 원하는 정적 파일
서버로 폴더를 서비스하세요.

```bash
python -m http.server 8000
```

그런 다음 `http://localhost:8000`에 접속하세요.

## 배포

GitHub Pages가 `main` 브랜치 루트에서 바로 이 저장소를 서비스합니다 — 빌드 단계가
없으므로 `main`에 푸시하면 자동으로 배포됩니다.

## 기여자

- Angela — 제품 방향, 테스트
- Claude — 구현 및 GitHub 워크플로

## 법적 고지

모든 것이 브라우저 안에서만 실행됩니다. 계정도, 데이터 수집도, 서버도 없습니다 —
게임 상태는 페이지 안에만 존재하며, 덱/테이블 설정은 브라우저의 로컬 저장소에
저장됩니다.
