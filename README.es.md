<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="Solitario — el clásico Klondike, jugable en el navegador" width="100%"/>
</p>

# Solitario

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-d4af37?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="Diagrama animado: una carta se voltea para revelar el As de Picas" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_Demo_en_vivo-d4af37?style=for-the-badge" alt="Demo en vivo"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**El clásico solitario Klondike, directamente en tu navegador.** Arrastra y suelta
cartas, elige un estilo de mazo, elige un color de mesa, prueba una misión de
desafío, y juega con música y sonido. Sin instalación, sin compilación, sin
dependencias: solo HTML, CSS y JavaScript puro.

En vivo: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## Funciones

| Función | Qué hace |
|---|---|
| **Arrastrar y soltar real** | Toma una carta y suéltala donde corresponde, sin hacer clic dos veces |
| **Auto-fundación** | Un simple clic en una carta la envía directo a su fundación si hay un lugar válido, por ejemplo un As va solo a su casa |
| **4 estilos de mazo** | Clásico, Real (marfil/serif/marca de agua dorada), Minimalista y Neón; tu elección se recuerda la próxima vez |
| **5 colores de mesa** | Verde Fieltro, Púrpura, Azul Marino, Borgoña, Carbón; también se recuerda |
| **Misiones de desafío** | Carrera Rápida (ganar en menos de 60 movimientos), Sin Redistribución (nunca reciclar el descarte), Carrera de Ases (los 4 Ases en casa antes del movimiento 15) |
| **Música y sonido** | Una banda sonora ambiental en bucle que puedes activar, más efectos de sonido al robar, colocar una carta, un movimiento inválido y ganar |
| **Celebración de victoria** | Una explosión de confeti y fanfarria al despejar el tablero |

## Cómo jugar

- Arrastra una carta y suéltala en una fundación o en otra columna del tablero
  para moverla.
- Un simple clic (sin arrastrar) en una carta la envía directo a su fundación
  automáticamente, si hay un lugar legal; es la forma rápida de despejar Ases y
  cartas bajas.
- Las cartas van a una fundación en orden ascendente por palo, empezando por el As.
- Las cartas se mueven a otra columna sobre una carta de color opuesto un rango
  más alto (o a una columna vacía con un Rey).
- Haz clic en el mazo para robar una carta al descarte; haz clic de nuevo cuando
  esté vacío para reciclar el descarte de vuelta al mazo.
- Ganas moviendo las 52 cartas a las cuatro fundaciones.

## Ejecutar localmente

No se necesita instalación: abre `index.html` directamente en un navegador, o
sirve la carpeta con cualquier servidor de archivos estático:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Despliegue

GitHub Pages sirve este repositorio directamente desde la raíz de la rama
`main`; sin paso de compilación, así que cualquier push a `main` se publica
automáticamente.

## Colaboradores

- Angela — dirección de producto, pruebas
- Claude — implementación y flujo de trabajo en GitHub

## Aviso legal

Todo funciona enteramente en tu navegador. Sin cuentas, sin recolección de
datos, sin servidor; el estado de tu partida vive solo en la página y, para tus
preferencias de mazo/mesa, en el almacenamiento local de tu navegador.
