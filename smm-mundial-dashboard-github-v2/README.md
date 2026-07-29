# Supermercados Morelos — Mundial 2026 Dashboard v2

Dashboard HTML estático y responsive que conecta:

- Ventas de siete categorías rastreadas
- Meta Ads
- Contenido de Facebook e Instagram, con **Total = Organic + Boost**
- TV y radio
- Activaciones, premios, pasaportes, futbolito y QR

## Ajustes de esta versión

- La inversión aparece consolidada en el Overview y separada posteriormente entre Meta y Offline.
- Se eliminó el timeline de inversión e impresiones de Meta; ahora se muestra la distribución de inversión por objetivo.
- Organic muestra resultados totales y su separación entre distribución orgánica y boost.
- Ventas compara exactamente las mismas fechas en 2025 y 2026.
- Se muestran dos lecturas de ventas:
  - **Portfolio growth:** incluye FROZEN, que no tiene baseline en el mismo periodo de 2025.
  - **Like-for-like growth:** excluye categorías sin baseline.
- Se señalan explícitamente las categorías que subieron, bajaron y las nuevas/sin baseline.

## Estructura

```text
smm-mundial-dashboard-v2/
├── index.html
├── .nojekyll
├── README.md
├── assets/
│   ├── app.js
│   ├── morelos-logo.png
│   ├── plotly.min.js
│   └── styles.css
└── data/
    ├── dashboard-data.js
    ├── sales-audit-summary.json
    └── category-sales-audit.csv
```

No requiere backend, base de datos ni build process. Todas las dependencias están incluidas localmente.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido de esta carpeta**, conservando las subcarpetas `assets` y `data`.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona `main` y `/ (root)`.
6. Guarda.

## Probar localmente

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

## Notas metodológicas

- La base de ventas incluye siete departamentos y no representa el POS total.
- Admiral no tiene baseline comparable contra 2025.
- FROZEN inicia en la base a finales de 2025 y no tiene baseline para junio-julio 2025.
- Se removieron cinco duplicados exactos del archivo de ventas: USD 37 y 12 unidades.
- El 20 de julio contiene solamente USD 499 y se excluye como día parcial.
- La suma de Reach de Meta proviene de breakdown diario y no es alcance único del periodo.
- Offline tiene granularidad mensual/total; no se prorratea artificialmente por día.
- El dashboard muestra asociación y contribución observada; no afirma causalidad incremental ni calcula ROAS.
