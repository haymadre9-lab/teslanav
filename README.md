# Tesla Nav

Navegador PWA fluido para la pantalla del Tesla (o el móvil).

## Qué hace
- **Modo Mapa**: mapa oscuro en vivo (MapLibre + CARTO) que sigue al coche, gira con el rumbo e inclinado tipo navegador. El coche se mueve **suave** gracias a interpolación del GPS entre lecturas.
- **Modo HUD**: panel con el coche, velocidad y límite.
- Aviso de **radares** acercándose por el arcén (con voz), **velocidad**, **límite** estimado y **cargadores** en el mapa.

## Cómo publicarlo (GitHub Pages)
1. Crea un repositorio nuevo llamado **teslanav** (público).
2. Sube TODOS estos archivos a la raíz del repo:
   - index.html
   - manifest.webmanifest
   - sw.js
   - icon-192.png, icon-512.png, icon-180.png
3. Settings → Pages → Source: rama **main**, carpeta **/ (root)** → Save.
4. Abre la URL: `https://TU-USUARIO.github.io/teslanav/`

## Uso
- Ábrelo en el móvil o en el navegador del Tesla y acepta el permiso de **ubicación (GPS)**.
- Botón arriba a la izquierda para cambiar **Mapa / HUD**.
- Botón 🎯 abajo a la derecha para recentrar si mueves el mapa.
- En el móvil puedes "Añadir a pantalla de inicio" para instalarlo como app.

## Notas
- El GPS necesita HTTPS (GitHub Pages ya lo es).
- Los radares salen de OpenStreetMap (cobertura irregular en España).
- Teselas de mapa: CARTO (gratis para uso normal).
- Pendiente para la siguiente versión: navegación con destino y maniobras por voz.
