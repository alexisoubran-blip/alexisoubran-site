# Supermercados Morelos — Website Redesign

Prototipo responsive inspirado en la estructura moderna de grocery e-commerce, conservando el espíritu visual de Morelos: verde, rojo, tradición, producto fresco, comunidad y comunicación bilingüe.

## Estructura

- `index.html` — homepage completa
- `assets/css/styles.css` — sistema visual y responsive
- `assets/js/main.js` — carrusel, buscador, filtros, idioma, geolocalización y formularios demo
- `assets/images/` — assets locales
- `vercel.json` — configuración para deploy estático

## Vista local

Puedes abrir `index.html` directamente o levantar un servidor local:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Deploy en GitHub + Vercel

1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. En Vercel selecciona **Add New → Project**.
4. Importa el repositorio.
5. Framework Preset: **Other**.
6. Build Command: dejar vacío.
7. Output Directory: dejar vacío.
8. Deploy.

## Consideraciones para producción

- Reemplazar los enlaces sociales por los perfiles oficiales.
- Conectar el formulario de newsletter a CRM o email platform.
- Conectar Radio Morelos a un stream real.
- Validar el listado completo de sucursales, teléfonos y horarios.
- Conectar especiales a CMS o feed de promociones.
- Configurar GA4/GTM y eventos: `store_directions`, `phone_click`, `special_view`, `menu_view`, `newsletter_signup`.
