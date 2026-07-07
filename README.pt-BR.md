<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="Paciência — o clássico Klondike, jogável no navegador" width="100%"/>
</p>

# Paciência

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-d4af37?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="Diagrama animado: uma carta vira para revelar o Ás de Espadas" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_Demo_ao_vivo-d4af37?style=for-the-badge" alt="Demo ao vivo"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**O clássico Paciência Klondike, direto no seu navegador.** Arraste e solte as
cartas, escolha um estilo de baralho, escolha uma cor de mesa, tente uma missão
desafio, e jogue com música e som. Sem instalação, sem build, sem
dependências — só HTML, CSS e JavaScript puro.

Ao vivo: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## Funcionalidades

| Funcionalidade | O que faz |
|---|---|
| **Arrastar e soltar de verdade** | Pegue uma carta e solte onde ela pertence, sem clicar duas vezes |
| **Fundação automática** | Um simples clique em uma carta a envia direto para sua fundação se houver um lugar válido — um Ás, por exemplo, vai sozinho |
| **4 estilos de baralho** | Clássico, Real (marfim/serifado/marca d'água dourada), Minimalista e Neon — sua escolha fica salva |
| **5 cores de mesa** | Verde Feltro, Roxo, Azul-Marinho, Bordô, Carvão — também salvas |
| **Missões desafio** | Corrida Rápida (vencer em menos de 60 jogadas), Sem Redistribuição (nunca reciclar o monte de descarte), Corrida dos Ases (os 4 Ases na fundação até a jogada 15) |
| **Música e som** | Uma trilha ambiente em loop que pode ser ativada, além de efeitos sonoros ao comprar, encaixar uma carta, um movimento inválido e ao vencer |
| **Comemoração de vitória** | Uma explosão de confete e fanfarra ao limpar o tabuleiro |

## Como jogar

- Arraste uma carta e solte em uma fundação ou em outra coluna do tabuleiro
  para movê-la.
- Um simples clique (sem arrastar) em uma carta a envia automaticamente para
  sua fundação, se houver um lugar válido — é a forma rápida de tirar Ases e
  cartas baixas do caminho.
- As cartas vão para uma fundação em ordem crescente por naipe, começando
  pelo Ás.
- As cartas se movem para outra coluna sobre uma carta de cor oposta uma
  posição acima (ou para uma coluna vazia com um Rei).
- Clique no monte para comprar uma carta para o descarte; clique novamente
  quando estiver vazio para reciclar o descarte de volta ao monte.
- Vença movendo as 52 cartas para as quatro fundações.

## Executar localmente

Não precisa instalar nada — abra o `index.html` direto no navegador, ou sirva
a pasta com qualquer servidor de arquivos estático:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Implantação

O GitHub Pages serve este repositório direto da raiz da branch `main` — sem
etapa de build, então qualquer push para `main` já vai ao ar automaticamente.

## Colaboradores

- Angela — direção de produto, testes
- Claude — implementação e fluxo de trabalho no GitHub

## Aviso legal

Tudo roda inteiramente no seu navegador. Sem contas, sem coleta de dados, sem
servidor — o estado do seu jogo vive apenas na página e, para suas
preferências de baralho/mesa, no armazenamento local do seu navegador.
