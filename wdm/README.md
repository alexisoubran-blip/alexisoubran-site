# WDM · WeDoMarketing

Sitio bilingüe de marketing fraccional, creado como propuesta de rediseño. HTML estático, CSS y JavaScript progresivo. No necesita dependencias de aplicación ni base de datos.

## Desarrollo y build

Requiere Node.js 20 o posterior.

```sh
npm run build
npm run check
```

El build genera diez páginas HTML (inicio, tres servicios y privacidad en cada idioma), además de 404, sitemap, robots y llms.txt, dentro de `dist/`.

## Contenido

- `src/content.mjs`: descripciones de servicio y preguntas frecuentes ES/EN.
- `src/site.mjs`: dominio, indexación, correo y perfiles del equipo.
- `scripts/build.mjs`: plantillas semánticas, navegación y datos estructurados.
- `public/assets/site.css`: diseño responsive e identidad visual.
- `public/assets/site.js`: menú móvil, metodología accesible y preparación local del correo.
- `scripts/check.mjs`: integridad de rutas, assets, anchors, idioma y FAQ/schema.

La identidad conserva el logo original, azul petróleo, turquesa, naranja, rojo y geometría de WDM. La fuente Manrope se sirve localmente bajo la licencia incluida en `public/assets/FONT-LICENSE.txt`.

## Contacto

El formulario prepara un correo localmente. El visitante abre su aplicación de correo y confirma allí el envío. También puede copiar el mensaje. No simula un envío, no almacena leads y no incluye servicios externos de formularios. Existe un enlace directo a `contacto@wedomarketing.mx`.

Para recibir leads automáticamente, se deberá acordar y conectar un destino real (CRM o proveedor de correo), confirmar destinatarios y completar el aviso de privacidad aplicable. No se instalaron píxeles ni cuentas de analítica sin identificadores reales.

## SEO y GEO

Implementado:

- Contenido completo en HTML servido estáticamente.
- Una H1 por página, títulos y descriptions propios.
- Canonical, hreflang ES/EN y x-default.
- Datos JSON-LD Organization, WebSite, WebPage, Service, Person, BreadcrumbList y FAQPage que corresponden al contenido.
- Sitemap XML, robots.txt, favicon y Open Graph con imagen social 1200 × 630.
- FAQs útiles, estructura de servicios y enlaces a perfiles oficiales.
- llms.txt como índice adicional. Este archivo no garantiza visibilidad en IA ni es un requisito de Google.

El sitio de propuesta usa `noindex,follow` para no competir con el dominio vigente. `robots.txt` permite rastreo para que los motores puedan leer esta directiva. El sitemap está preparado para el dominio configurado.

Al aprobar el sitio para el dominio definitivo, configurar en Vercel:

```text
SITE_URL=https://DOMINIO-DEFINITIVO
SITE_INDEXABLE=true
```

Después reconstruir, conectar y verificar el dominio, registrar Search Console y enviar el sitemap. La página 404 siempre conserva `noindex`. No se promete aparición, posición ni citas en buscadores o respuestas de IA.

## Publicación

Configuración Vercel: framework Other, build `npm run build`, output `dist`, Node.js 20+.

Si se importa desde la rama `wdm-propuesta` del repositorio `alexisoubran-blip/alexisoubran-site`, seleccionar carpeta raíz `wdm` y esa misma rama. No modificar la rama principal ni el proyecto público del sitio personal.

La propuesta también puede extraerse a un repositorio independiente conservando el contenido de esta carpeta como raíz. Las rutas y recursos son absolutos desde la raíz del dominio, para una publicación independiente.

## Fuentes y revisión editorial

- Sitio y logo: https://wedomarketing.mx/
- Sitio en inglés: https://en.wedomarketing.mx/
- Perfil corporativo: https://www.linkedin.com/company/wdmkt/
- Perfiles del equipo: enlaces del archivo `src/site.mjs` proporcionados por el solicitante.
- Sabrina Vasquez Lanz, diseño gráfico: https://www.behance.net/SabrinaVLanz
- Retrato de Iliana y metodología: materiales proporcionados por el solicitante.
- Logotipos de clientes: recursos del sitio original de WDM.

Los textos son una propuesta editorial basada en los materiales. No se agregaron resultados numéricos, testimonios, antigüedad, precios, teléfonos, garantías ni cargos directivos no confirmados. Las iniciales se utilizan donde no se recibió una fotografía verificada. Confirmar con WDM los cargos y fotografías finales antes de la publicación definitiva.

Referencia técnica sobre IA y SEO: https://developers.google.com/search/docs/appearance/ai-features

## Accesibilidad

Navegación por teclado, enlace para saltar al contenido, controles etiquetados, tabs con flechas/Home/End, FAQ con details/summary, estado del contacto anunciado y respeto de reduced motion. El contenido principal y el contacto directo funcionan sin JavaScript.
