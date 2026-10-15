# Portafolio — Cristian Cárdenas

Sitio de una sola página (HTML/CSS/JS puro, sin frameworks ni build step).

## Estructura

```
index.html              Página principal (todas las secciones)
css/styles.css           Estilos (variables de color/tipografía al inicio del archivo)
js/proyectos-data.js     Datos de cada proyecto del portafolio (editar aquí)
js/main.js               Lógica: menú móvil, render de tarjetas, filtros, animaciones
assets/img/perfil/       Foto de perfil (hero)
assets/img/proyectos/    Fotos de cada proyecto
cv/cv.html                Plantilla imprimible del CV (fuente del PDF)
cv/CV-Cristian-Cardenas.pdf   PDF descargable, enlazado desde los botones "Descargar CV"
generate-cv.js            Script que convierte cv/cv.html en el PDF de arriba
```

## Cómo ver el sitio localmente

```bash
cd portafolio-cristian
python3 -m http.server 8420
# abrir http://localhost:8420
```

## Cómo agregar la foto de perfil

1. Copia la imagen a `assets/img/perfil/cristian.jpg`.
2. En `index.html`, dentro de `<div class="photo-placeholder">`, reemplaza ese bloque por:
   ```html
   <img src="assets/img/perfil/cristian.jpg" alt="Cristian Cárdenas">
   ```

## Cómo agregar un proyecto nuevo

1. Copia la foto del proyecto a `assets/img/proyectos/` (ej. `nombre-proyecto.jpg`).
2. Abre `js/proyectos-data.js` y agrega un objeto nuevo al arreglo `PROYECTOS`
   (copia uno existente como plantilla) con `img: "assets/img/proyectos/nombre-proyecto.jpg"`.
3. Guarda. La tarjeta aparece automáticamente en la sección Proyectos, con su
   filtro de categoría — no hay que tocar el HTML ni el CSS.

Mientras no tengas la foto de un proyecto, deja `img: null` y la tarjeta
muestra un marcador de posición estilo plano ("Imagen próximamente").

## Cómo regenerar el CV en PDF

Si editas `cv/cv.html` (por ejemplo para agregar experiencia nueva), regenera el PDF con:

```bash
node generate-cv.js
```

Esto sobrescribe `cv/CV-Cristian-Cardenas.pdf`, que es el mismo archivo que
descargan los botones "Descargar CV" del sitio.

> Nota técnica: `generate-cv.js` usa Puppeteer con Chrome headless.
> El binario y sus librerías del sistema (nspr/nss/asound, ausentes por
> defecto en este entorno) quedan cacheados en `~/.cache/puppeteer` y en
> `.chrome-libs/` de este proyecto — no se necesita volver a instalarlos.

## Paleta y tipografía

Definidas como variables CSS al inicio de `css/styles.css` (`:root`):
fondo neutro cálido, acento cobre/bronce, tipografía Space Grotesk (títulos)
+ Inter (texto).
