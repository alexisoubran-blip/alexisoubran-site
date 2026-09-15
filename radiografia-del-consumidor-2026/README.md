# Radiografía del consumidor mexicano 2026

Página estática para `/radiografia-del-consumidor-2026`. No requiere instalar dependencias ni un servidor de datos.

## Fuente

Investigación: Merca2.0. Digitalización: Alexis Soubran. Los 576 valores se tomaron de `Base estatal!A6:S38` de la tabla completada por el usuario. El SHA-256 de la entrada está registrado en `data.json`. No se han sustituido valores por estimaciones ni cifras externas. El año 2026 es la edición editorial, no un periodo común de medición. Las notas de consistencia no modifican los datos.

Cartografía: Natural Earth, admin 1 a escala 1:10m, dominio público. Se filtraron las 32 entidades y se simplificaron sus geometrías para navegación. Los nombres México y Distrito Federal se mapean a Estado de México y Ciudad de México.

## Actualización

La página contiene los datos como JSON embebido y una tabla HTML para lectura sin JavaScript e indexación. Mantener ambos y `data.json` sincronizados al actualizar. Los porcentajes se almacenan como fracciones; el streaming, en millones de horas. No convertir los ceros en datos faltantes.

## Interacción

Mapa por indicador; fichas de 18 campos; acceso por teclado; selectores nativos para móvil; enlaces consultables con parámetros `estado` e `indicador`; tabla HTML completa. El mapa no depende de servicios de tiles, CDN ni API externos. Se conserva GTM-5752LGG del sitio y se agregan eventos de consulta sin datos personales: `consumer_state_select`, `consumer_metric_select`, `consumer_table_open`, `consumer_source_click`, `consumer_diagnostic_click`.
