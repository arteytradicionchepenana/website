# Arte y Tradición Chepenana — Landing page

Sitio web estático (HTML, CSS y JavaScript) para el emprendimiento familiar **Arte y Tradición Chepenana**, de Chepén, La Libertad, Perú. Funciona en GitHub Pages: no necesita servidor, base de datos, pagos ni carrito.

## Estructura

```
index.html                 Página principal (textos de las secciones)
css/styles.css             Colores, tipografías y diseño
js/main.js                 Configuración + productos + galería + funciones
assets/images/
  brand/                   Logo, favicon e imagen para compartir
  arte-cultural/           Cuadros, llaveros, San Sebastián, Sacerdotisa de Moro
  bordados/                Toallas, manteles y telas bordadas
  patchwork/               Cuadros y cojines patchwork
  bisuteria/               Pulseras, aretes, collares
  temporada/               Muñecos navideños y detalles de temporada
  historia/                Imágenes de la sección "Nuestra tierra"
  personalizados/          Imagen de pedidos personalizados
  galeria/                 (vacía) para tus fotos propias de la galería
```

## Importante sobre las imágenes

Las imágenes incluidas son **referenciales**: sirven para ver cómo queda el diseño. No son fotografías reales de las piezas ni documentación histórica. Cámbialas por tus propias fotos en cuanto las tengas (ver más abajo). El sitio muestra avisos de «imagen referencial» que puedes quitar cuando uses fotos reales (busca `ref-note` y `photo-note` en `index.html`).

## Publicar en GitHub Pages

1. **Crear un repositorio** en [github.com](https://github.com) (botón *New*), por ejemplo `arte-y-tradicion-chepenana`. Márcalo como *Public*.
2. **Subir los archivos**: en el repositorio pulsa *Add file → Upload files* y arrastra **el contenido** de esta carpeta (`index.html`, `css`, `js`, `assets`, `README.md`). Pulsa *Commit changes*.
3. **Activar GitHub Pages**: ve a *Settings → Pages*.
4. En *Build and deployment* elige *Source: Deploy from a branch*, rama **main** y carpeta **/ (root)**. Pulsa *Save*.
5. **Obtener la URL pública**: tras uno o dos minutos aparecerá arriba, con la forma `https://TU-USUARIO.github.io/arte-y-tradicion-chepenana/`.
6. **Actualizar** fotos, productos y redes: edita o sube archivos al repositorio y haz *Commit*; el sitio se actualiza solo en unos minutos.

> `index.html` debe quedar en la raíz del repositorio. Todas las rutas son relativas, así que funcionan dentro de la subcarpeta que usa GitHub Pages.

## Cómo editar (todo en `js/main.js`, parte superior)

### Número y mensajes de WhatsApp
Busca `WHATSAPP_NUMBER` y `WA_MESSAGES`. El número va con el código de país sin `+` (`51949722356`).

### Redes sociales
```js
const socialLinks = { instagram: "", facebook: "", tiktok: "" };
```
Pega el enlace completo entre las comillas (por ejemplo `"https://www.instagram.com/tu_usuario"`). Si lo dejas vacío, ese botón no se muestra; si todos están vacíos, desaparece el bloque «Síguenos».

### Reemplazar una imagen
1. Prepara tu foto (JPG, ideal de 1200 px de ancho y menos de 400 KB).
2. Sube la foto a la carpeta correspondiente de `assets/images/` **con el mismo nombre** que la imagen que reemplaza. No hay que tocar el código.

### Agregar un producto
Copia un bloque dentro de `const products = [ ... ]` y cambia los datos:
```js
{ name: "Llavero de hibisco", category: "arte-cultural", destacado: true,
  description: "Llavero artesanal con hibisco bordado.",
  image: "assets/images/arte-cultural/llavero-hibisco.jpg",
  alt: "Llavero de madera con un hibisco" },
```
- `category` debe ser uno de: `arte-cultural`, `bordados`, `patchwork`, `bisuteria`, `temporada`.
- `destacado: true` muestra la etiqueta «Destacado».
- Para quitar un producto, borra su bloque.
- Cuidado con las comas entre bloques y con no usar comillas dobles dentro de los textos.

### Agregar fotos a la galería
1. Sube la foto a `assets/images/galeria/`.
2. Añade una línea en `const galleryPhotos = [ ... ]`:
```js
{ src: "assets/images/galeria/mi-foto.jpg", category: "bordados", title: "Toalla bordada a pedido" },
```

### Otras ediciones
- **Textos de las secciones**: `index.html`.
- **Colores y tipografías**: variables al inicio de `css/styles.css` (`:root`).
- **Meta description y título**: dentro de `<head>` en `index.html`.

## Nota sobre pedidos
GitHub Pages es un servicio estático: la página **no guarda archivos ni formularios**. Los pedidos y consultas se hacen por WhatsApp. Las fotos y productos nuevos se actualizan subiendo archivos al repositorio.

## Probar en tu computadora
Abre `index.html` con doble clic, o, si tienes Python: `python -m http.server 8000` y entra a `http://localhost:8000`.
