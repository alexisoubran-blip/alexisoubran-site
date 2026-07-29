# Morelos · Venta semanal por tienda

Serie semanal completa desde enero 2024, con detección automática de picos y caídas
y flujo de venta por área operativa. Página estática, sin dependencias ni build.

## Estructura

```
index.html        layout, estilos y motor de gráficas
assets/data.js    serie semanal, eventos y desglose por área
```

## Publicar en GitHub Pages

1. Subir ambos archivos respetando la carpeta `assets/`.
2. **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.
3. Queda en `https://<usuario>.github.io/<repo>/` en un par de minutos.

## Qué hace

- **Selector de tienda** arriba: red completa más las once sucursales.
- **Gráfica de línea con hover**: al pasar el cursor muestra la semana, la venta, el nivel
  normal y su desviación. Si la semana es un evento detectado, agrega la etiqueta de calendario
  y el desglose de los programas que la movieron.
- **Flujo por área**: carnicería, carnitas, cocina, panadería, congelados y abarrote.
  Alterna entre participación porcentual y dólares absolutos. También con hover.
- **Tarjetas de evento** abajo, ordenadas por magnitud.
- **Descargar CSV**: exporta la tienda seleccionada con venta semanal, nivel normal,
  desviación, evento y el desglose por área en columnas.

## Actualizar cifras

Todo vive en `assets/data.js`.

```js
window.VENTAS = {
  deps: ["Carnicería", "Carnitas", ...],
  net:  { id:"NET", nombre, ciudad, weeks:[...], events:[...], stream:[...] },
  stores: [ { id:"SMM1", nombre, ciudad, weeks, events, stream }, ... ]
};
```

- `weeks`: `{ w:"2026-06-14", v: 123456, b: 118000 }` — semana, venta y nivel normal (mediana
  móvil de 13 semanas). `b: null` en los extremos de la serie, donde no hay ventana suficiente.
- `events`: `{ w, dev, v, tags:[...], drv:[{p,delta,pct}] }` — `dev` es la desviación porcentual
  contra el nivel normal; `tags` son las etiquetas de calendario; `drv` los programas que lo movieron.
- `stream`: `{ k:"Carnicería", v:[...] }` — un arreglo por área. **Cada arreglo debe tener
  exactamente el mismo largo que `weeks`**, en el mismo orden.

## Notas técnicas

- Funciona abriendo `index.html` directo desde disco, sin servidor.
- Sin `localStorage` ni llamadas de red.
- Hover funciona con mouse y con touch.
- Respeta `prefers-reduced-motion`.
