---
name: Auxilia · Sitio corporativo
description: El sitio de Auxilia se recorre como la señalética de una sala de emergencias. Placas claras y oscuras sobre una pared neutra, y una sola línea roja que lleva a pedir una demostración.
colors:
  linea: "#D92D20"
  lineaTexto: "#FFFFFF"
  primarioPresionado: "#B42318"
  primarioTinteTexto: "#B42318"
  pared: "#EFEFEC"
  placa: "#FFFFFF"
  bordePlaca: "#D9D9D4"
  bordeFuerte: "#D4D4D8"
  placaOscura: "#1A1A1D"
  placaOscuraTexto: "#F4F4F5"
  placaOscuraSecundario: "#B4B4BB"
  bordePlacaOscura: "#323238"
  texto: "#18181B"
  textoSecundario: "#5E5E66"
  plano: "#E4E4E0"
  planoTrazo: "#C6C6C0"
  planoCalle: "#FFFFFF"
  disponibleFuerte: "#15803D"
  enAtencionFuerte: "#B45309"
  lineaOscuro: "#D92D20"
  primarioTinteTextoOscuro: "#F97066"
  paredOscuro: "#111114"
  placaOscuro: "#1A1A1F"
  bordePlacaOscuro: "#2A2A31"
  bordeFuerteOscuro: "#3F3F46"
  placaOscuraOscuro: "#F4F4F5"
  placaOscuraTextoOscuro: "#18181B"
  placaOscuraSecundarioOscuro: "#52525B"
  bordePlacaOscuraOscuro: "#D4D4D8"
  textoOscuro: "#F4F4F5"
  textoSecundarioOscuro: "#A1A1AA"
  planoOscuro: "#17171B"
  planoTrazoOscuro: "#34343C"
  planoCalleOscuro: "#222228"
typography:
  titulo-pagina:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "88px"
    fontWeight: 700
    lineHeight: "84px"
    letterSpacing: "-1.6px"
  placa-portada:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "68px"
    fontWeight: 700
    lineHeight: "68px"
    letterSpacing: "-1.2px"
  titulo-tramo:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "56px"
    letterSpacing: "-0.6px"
  rotulo-grande:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: "36px"
  rotulo:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "30px"
  rotulo-chico:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: "28px"
  accion:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    letterSpacing: "0.2px"
  navegacion:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    letterSpacing: "0.2px"
  entrada:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "31px"
  cuerpo:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "29px"
  cuerpo-placa:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "26px"
  etiqueta-campo:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  apoyo:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  dato:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    fontFeature: "tnum"
rounded:
  parada: "2px"
  rotulo: "3px"
  control: "4px"
  placa: "6px"
  placaGrande: "8px"
spacing:
  junto: "10px"
  grupo: "18px"
  placa: "24px"
  bloque: "36px"
  margen: "40px"
  columnas: "56px"
  tramo: "112px"
components:
  accion-principal:
    backgroundColor: "{colors.linea}"
    textColor: "{colors.lineaTexto}"
    typography: "{typography.accion}"
    rounded: "{rounded.control}"
    height: "56px"
    padding: "0 18px 0 22px"
  accion-principal-hover:
    backgroundColor: "{colors.primarioPresionado}"
    textColor: "{colors.lineaTexto}"
  accion-secundaria:
    textColor: "{colors.texto}"
    typography: "{typography.accion}"
    height: "56px"
    padding: "0 4px"
  navegacion:
    textColor: "{colors.texto}"
    typography: "{typography.navegacion}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 14px"
  navegacion-hover:
    backgroundColor: "{colors.placa}"
  navegacion-activa:
    backgroundColor: "{colors.placaOscura}"
    textColor: "{colors.placaOscuraTexto}"
  campo:
    backgroundColor: "{colors.placa}"
    textColor: "{colors.texto}"
    rounded: "{rounded.control}"
    height: "52px"
  opcion:
    backgroundColor: "{colors.placa}"
    textColor: "{colors.texto}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "0 18px"
  opcion-elegida:
    backgroundColor: "{colors.placaOscura}"
    textColor: "{colors.placaOscuraTexto}"
  placa:
    backgroundColor: "{colors.placa}"
    textColor: "{colors.texto}"
    rounded: "{rounded.placa}"
    padding: "24px"
  placa-oscura:
    backgroundColor: "{colors.placaOscura}"
    textColor: "{colors.placaOscuraTexto}"
    rounded: "{rounded.placaGrande}"
    padding: "26px 32px"
  aviso-emergencia:
    backgroundColor: "{colors.linea}"
    textColor: "{colors.lineaTexto}"
    padding: "10px 40px"
---

# Design System: Auxilia · Sitio corporativo

## Overview

**Creative North Star: "Seguir la línea roja"**

El sitio se recorre como la señalética de una sala de emergencias. La pared es neutra y casi blanca. Encima van placas esmaltadas: blancas con texto negro para la información y oscuras con texto blanco para lo que manda, como el ícono del logo. Una sola línea roja corre por la izquierda de cada página, como la cinta del piso de un hospital, y lleva sin dudar hasta la acción: pedir una demostración. Ese rojo es el único color que guía.

La letra de los títulos es de señalética: condensada, en negrita y grande, para leerse de lejos y de un vistazo. El texto corrido va en una letra de alta legibilidad, a 17 o 18 px, con renglones cortos (680 px como máximo). Los pictogramas son de trazo uniforme y las flechas indican adónde se va. Es un sitio para quien decide en una empresa de ambulancias: serio, claro y sin adornos. Nada de sombras, gradientes ni animaciones de adorno. El único movimiento es el del plano «Usted está aquí» al cargar la portada.

**Key Characteristics:**
- Pared neutra cálida (`pared`) con placas blancas (`placa`) y oscuras (`placaOscura`); la profundidad la dan el contraste de placa contra pared y un borde de 1 px, nunca una sombra.
- Un solo rojo, `linea`: la cinta del piso, la acción principal, el aviso de emergencia, el foco con teclado y la alerta del plano.
- Barlow Semi Condensed en negrita para todo lo que es señal (títulos, acciones, navegación, rótulos); Atkinson Hyperlegible Next para leer; Barlow con cifras tabulares para horas y fechas.
- Esquinas casi rectas: de 2 a 8 px, como placas de chapa.
- Modo claro y oscuro según el sistema. En oscuro la placa oscura se invierte y pasa a ser la placa clara que contrasta con la pared.

## Colors

Una pared neutra, placas esmaltadas en dos tonos y una sola línea roja. Los colores de estado de la flota aparecen solo en el plano y en las pantallas de demostración.

### Primary
- **Rojo de la línea** (linea / lineaOscuro): la cinta del piso que recorre cada página (`Tramo` y `Empalme`), el relleno de la acción principal, la franja del aviso de emergencia, la alerta y la placa «Usted está aquí» del plano, el contorno del foco con teclado (3 px), la selección de texto y el borde de un campo con error. En oscuro sube a un rojo un poco más claro para seguir viéndose sobre la pared negra.
- **Blanco sobre rojo** (lineaTexto): texto e íconos encima de la línea.
- **Rojo presionado** (primarioPresionado): fondo de la acción principal al pasar el mouse o presionar. Solo como fondo, con texto blanco encima.
- **Texto de error** (primarioTinteTexto / primarioTinteTextoOscuro): el mensaje debajo de un campo con error.

### Secondary
- **Verde de unidad disponible** (disponibleFuerte) y **ámbar de unidad en atención** (enAtencionFuerte): las unidades y la ruta del plano «Usted está aquí». Es el vocabulario de estados del panel de la central y no se usa para otra cosa.

### Neutral
- **Pared** (pared / paredOscuro): el fondo de todo el sitio, del encabezado y de la página. Un gris apenas cálido, distinto del gris frío de los productos.
- **Placa clara** (placa / placaOscuro) y **borde de placa** (bordePlaca / bordePlacaOscuro): tarjetas, listas en placa, campos del formulario y el marco del plano. La placa también es el fondo de un ítem de navegación al pasar el mouse.
- **Placa oscura** (placaOscura y sus tonos de texto, secundario y borde): el titular de la portada, el directorio del sistema, los cuadros de los pictogramas, la sección activa del menú, la opción elegida y el pie. En oscuro se invierte: placa casi blanca con texto negro.
- **Texto y texto secundario** (texto, textoSecundario y sus versiones oscuras): el negro para leer; el secundario para entradas, descripciones y apoyos.
- **Borde fuerte** (bordeFuerte / bordeFuerteOscuro): el contorno de los campos y de las opciones sin elegir.
- **Plano** (plano, planoTrazo, planoCalle y sus versiones oscuras): solo dentro del plano de la ciudad: el fondo, las líneas punteadas de los anillos y las calles.

Las pantallas de demostración de Servicios (celulares y panel) se dibujan con la paleta compartida de los productos (`primario`, `fondo`, `superficie`, `borde`, tintes de estado), tal como la documenta el `DESIGN.md` del panel. Fuera de esas pantallas, el sitio usa solo los tokens de arriba.

### Named Rules
**The One Red Line Rule.** El rojo guía: va en la línea del piso, en la acción principal, en el aviso de emergencia y en la alerta del plano. Si un elemento rojo no lleva a ningún lado ni avisa de algo, va en otro color.

**The Enamel Plate Rule.** Toda información va montada en una placa, clara u oscura, sobre la pared. La placa oscura es para lo que manda en esa sección (el titular, el directorio, lo elegido); la clara es para todo lo demás.

## Typography

**Display Font:** Barlow Semi Condensed 600 y 700 (con Arial Narrow, system-ui)
**Body Font:** Atkinson Hyperlegible Next 400 a 700 (con system-ui, Segoe UI, Roboto, Arial)
**Label/Mono Font:** Barlow 500 y 600, con cifras tabulares (`numeros-fijos`)

**Character:** Letra de cartel de hospital para todo lo que se lee de lejos, y una letra pensada para baja visión para todo lo que se lee de cerca. Las dos son sobrias. La condensada da el tono de señalética sin necesidad de mayúsculas ni espaciado de adorno.

### Hierarchy
- **Título de página** (700, 88px, 84px, −1,6px): el nombre de cada página interna, como la placa grande de un área del hospital. Baja a 64/62 por debajo de 768 px y a 46/46 por debajo de 640.
- **Placa de portada** (700, 68px, 68px, −1,2px): el mensaje de la portada, en la placa oscura. 56/57 por debajo de 1024 px y 42/43 por debajo de 640.
- **Título de tramo** (700, 56px, 56px, −0,6px): el título de cada parada de la línea, en una o dos líneas, con `text-wrap: balance` y hasta 900 px de ancho. 42/44 y 34/36 al achicarse.
- **Rótulos** (700; 34/36, 28/30 y 26/28): títulos dentro de placas y filas: declaraciones y noticias, filas de listas, tarjetas del directorio, del equipo y de garantías.
- **Acción** (700, 21px, +0,2px): el texto de las acciones principal y secundaria.
- **Navegación** (700, 19px, +0,2px): las secciones del encabezado; 24 px en el menú del celular.
- **Entrada** (400, 20px, 31px): el párrafo debajo de un título; hasta 680 px. 18/28 en el celular.
- **Cuerpo** (400, 18px, 29px): la lectura corriente; hasta 680 px. 17/27 en el celular.
- **Cuerpo de placa** (400, 17px, 26px): las descripciones dentro de las filas y las placas.
- **Etiqueta de campo** (600, 16px): las etiquetas del formulario.
- **Apoyo** (400, 13 a 15px): quién hace cada paso, el aviso de emergencia (15/21), las notas de dato de ejemplo.
- **Dato** (600, 22px, cifras tabulares): las horas del recorrido de un servicio; las fechas de noticias van a 17 px.

### Named Rules
**The Signage Face Rule.** Lo que es señal (títulos, acciones, navegación, rótulos, opciones) va en Barlow Semi Condensed en negrita. Lo que se lee va en Atkinson Hyperlegible Next. No se mezclan dentro de un mismo bloque.

**The Tabular Clock Rule.** Las horas, los teléfonos y los números que se comparan llevan cifras tabulares, como un tablero.

## Layout

Una columna de lectura centrada de hasta 1240 px, con márgenes laterales de 40 px, 24 px por debajo de 768 y 16 px por debajo de 640. El encabezado mide 88 px de alto (76 en tablet y celular) y comparte esos márgenes.

- **La línea del piso:** cada sección de una página es un `Tramo`. A la izquierda corre un riel de 56 px con la línea roja de 6 px y la parada de cada tramo: un cuadrado de 22 px con borde rojo de 6 px, a 26 px del borde superior, alineado con el título. Por debajo de 768 px el riel mide 18 px, la línea 4 y la parada 16 con borde de 4. El último tramo corta la línea a 46 px (34 en el celular).
- **El empalme:** en la portada la línea nace debajo del plano, baja, dobla a la izquierda y llega a la primera parada. Mide 96 px de alto (64 en el celular).
- **Ritmo:** 112 px de aire al final de cada tramo (80 en tablet, 64 en el celular); 36 px entre el título y el contenido; 18 px entre un título y su entrada; 24 px de relleno dentro de una placa; 56 px entre dos columnas.
- **Portada:** el mensaje en placa oscura a la izquierda y el plano a la derecha (44 % del ancho, hasta 540 px), alineados abajo. Por debajo de 768 px se apilan y el plano queda centrado, hasta 560 px.
- **Filas de placa:** el pictograma en un cuadro fijo (48 a 72 px), el rótulo en una columna fija (220 a 320 px) y la descripción en el resto. Por debajo de 768 px la descripción baja debajo del rótulo.
- **Recorrido de un servicio:** cinco placas iguales sobre una línea horizontal; en el celular, la línea pasa a vertical a la izquierda.
- **Puntos de quiebre** (los de Tamagui): menos de 1024 px, menos de 768 y menos de 640.

### Named Rules
**The Floor Tape Rule.** Toda página interna arranca con su placa de título y sigue en tramos sobre la misma línea roja, sin cortarla, hasta la última parada. No hay secciones sueltas fuera de la línea.

## Elevation & Depth

Plano por completo: no hay ninguna sombra en el sitio. La profundidad sale del contraste de la placa contra la pared (blanca sobre gris cálido, oscura sobre gris cálido) y de un borde de 1 px (`bordePlaca`). Las listas se abren con un filete de 2 px en color de texto y se separan con líneas de 1 px, como un cartel de indicaciones.

### Named Rules
**The Flat Enamel Rule.** Las placas están pegadas a la pared: se distinguen por su color y su borde, nunca por una sombra ni por un gradiente.

## Shapes

Esquinas casi rectas, como chapas atornilladas. 2 px para las paradas de la línea, 3 px para los rótulos del plano y la etiqueta de noticia de ejemplo, 4 px para controles (acciones, navegación, campos, opciones y los cuadros de los pictogramas), 6 px para las placas y 8 px para las placas grandes (directorio, marco del plano). Los bordes son de 1 px; los de 2 px solo marcan una opción del formulario y el filete que abre una lista. Las esquinas grandes y las píldoras (10 a 30 px y 999 px) aparecen solo dentro de las pantallas de demostración, porque copian la forma de los productos.

Los pictogramas se dibujan en una grilla de 24 px con trazo uniforme de 2 px, puntas y uniones redondas, y toman el color del texto que los rodea.

## Components

### Buttons
- **Shape:** esquinas de control (4px), 56 px de alto como mínimo.
- **Primary (acción principal):** placa roja con el texto de la acción en letra de señalética y una flecha de 24 px a la derecha, como la señal que lleva a Emergencias. Una por pantalla. El envío del formulario usa la misma placa sin flecha.
- **Hover / Focus:** al pasar el mouse o presionar pasa a rojo presionado; con teclado, contorno rojo de 3 px separado 3 px.
- **Secondary (acción secundaria):** sin placa: el texto de la acción en color de texto, con una flecha de 22 px. Al pasar el mouse aparece una raya de 2 px debajo.

### Chips
- **Opción del formulario (WhatsApp o Correo):** placa clara de 48 px con borde fuerte de 2 px, pictograma y nombre en letra de señalética a 20 px. La elegida pasa a placa oscura con texto claro. Es un `radio` real y se elige con Enter o espacio.
- **Etiqueta de dato de ejemplo:** 26 px de alto, esquinas de 3 px, borde fuerte de 1 px y texto de apoyo a 13 px.

### Cards / Containers
- **Corner Style:** placa (6px); placa grande (8px) para el directorio y el plano.
- **Background:** placa clara sobre la pared; placa oscura para el titular de la portada, el directorio del sistema y una de las dos declaraciones (misión y visión).
- **Shadow Strategy:** ninguna; ver Elevation & Depth.
- **Border:** 1 px de `bordePlaca` en las placas claras; las oscuras no llevan borde visible. Las filas dentro de una placa se separan con 1 px del borde de su placa.
- **Internal Padding:** 24 px; las filas, de 22 a 28 px a los lados y de 22 a 26 px arriba y abajo; 32 px en las placas de declaración y en la del formulario.

### Inputs / Fields
- **Style:** placa clara de 52 px de alto, esquinas de 4 px, borde fuerte de 1 px, texto a 17 px. La etiqueta va arriba, a 16 px y semibold.
- **Focus:** el contorno rojo de 3 px del sitio.
- **Error / Disabled:** el borde pasa a rojo de la línea y el mensaje va debajo, a 15 px, en texto de error, con `role="alert"` y enlazado con `aria-describedby`.

### Navigation
- **Encabezado:** el logo a la izquierda y las secciones como placas de 44 px en letra de señalética a 19 px. Al pasar el mouse aparece la placa clara; la sección actual es la placa oscura de «usted está aquí», con `aria-current="page"`. Por debajo de 768 px las secciones se esconden detrás de un botón de 48 px y se abren en una lista de placas de 56 px a 24 px.
- **Pie:** la placa oscura del directorio, con el logo invertido, las secciones a 19 px (semibold) y los datos de contacto con pictogramas. Los enlaces se subrayan al pasar el mouse.

### Aviso de emergencia
La franja roja de ancho completo arriba de todo, en cada página: pictograma de alerta, «¿Es una emergencia?» en negrita y adónde pedir ayuda, con el número en cifras tabulares. Relleno de 10 px arriba y abajo, con los márgenes del contenedor.

### Tramo de la línea
La pieza que define el sistema: el riel a la izquierda con la línea roja y la parada cuadrada a la altura del título. Encadena las secciones de cada página y termina en la última parada.

### Plano «Usted está aquí»
El plano de Santa Cruz por anillos en una placa con marco: calles blancas, anillos punteados, nombres de anillo en rótulos de 3 px, unidades como placas de color de estado con su número y una leyenda abajo que dice «Demostración». Al cargar, la alerta cae (520 ms), suelta una onda (1400 ms), la unidad 03 traza su ruta (1600 ms) y aparece su rótulo (420 ms), todo con `cubic-bezier(0.16, 1, 0.3, 1)` y una sola vez. Con movimiento reducido, o si la pestaña no dibuja, el plano se muestra completo y quieto.

## Do's and Don'ts

### Do:
- **Do** llevar cada página por tramos sobre la línea roja, con su parada a la altura del título, y cortar la línea en el último tramo.
- **Do** montar la información en placas: clara (`placa`) con borde de 1 px, u oscura (`placaOscura`) para lo que manda.
- **Do** usar Barlow Semi Condensed en negrita para todo lo que es señal y Atkinson Hyperlegible Next para leer, con renglones de 680 px como máximo.
- **Do** dar a la acción principal la placa roja con flecha, una sola por pantalla, y a las demás la acción secundaria sin placa.
- **Do** usar los pictogramas de `shared/ui/iconos.tsx` (grilla de 24, trazo de 2) en vez de caracteres o emojis.
- **Do** rotular como demostración o como dato de ejemplo todo lo que no sea real: el plano, las pantallas, las horas y los contactos provisorios.
- **Do** probar cada página a 375, 768 y 1280 px, en claro y en oscuro.

### Don't:
- **Don't** usar los comandos `bolder`, `delight`, `overdrive`, `animate` ni `colorize` de Impeccable: es un sistema para emergencias.
- **Don't** usar el rojo de la línea para adornar, para enlaces de texto ni para títulos: solo guía, actúa o avisa.
- **Don't** agregar sombras, gradientes ni esquinas de más de 8 px fuera de las pantallas de demostración.
- **Don't** volver al gris del panel (#71717A) para el texto secundario del sitio: sobre la pared quedaba en 4,19:1. El del sitio (#5E5E66) llega a 5,58:1 sobre la pared y a 6,42:1 sobre la placa clara.
- **Don't** aclarar el rojo en modo oscuro: con un rojo más claro (#E5372A) el texto blanco quedaba en 4,28:1. El sitio usa el mismo #D92D20 en los dos modos (4,83:1).
- **Don't** animar nada más que el plano de la portada, ni animarlo cuando se pide movimiento reducido.
