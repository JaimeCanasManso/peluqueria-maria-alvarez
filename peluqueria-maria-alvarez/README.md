# Peluquería y Estética María Álvarez — Boceto de landing page

Proyecto estático en **HTML + CSS + JavaScript** (sin frameworks), pensado para
ser fácil de leer, editar y presentar como primer boceto a la propietaria.

## Estructura de archivos

```
peluqueria-maria-alvarez/
├── index.html          → Todo el contenido y estructura de la página
├── css/
│   └── style.css       → Sistema de diseño completo (variables, componentes)
├── js/
│   └── script.js       → Menú móvil, scroll reveals, lightbox de galería
├── images/             → Carpeta preparada para las fotografías reales
└── README.md
```

Para verlo, basta con abrir `index.html` en el navegador (no requiere
servidor ni instalación).

## Cómo sustituir contenido de ejemplo

Busca en el código los comentarios `<!-- EDITAR: ... -->` (HTML) y las notas
en este README. Los puntos principales a completar con la propietaria son:

1. **Fotografías**: cada bloque con clase `.img-placeholder` es un marcador de
   posición con una etiqueta describiendo qué foto debería ir ahí. Sustituir
   por `<img src="images/nombre-real.jpg" alt="descripción" loading="lazy">`
   manteniendo las proporciones indicadas en cada sección.
2. **Años de experiencia y cifras** (`XX años`, `XXX+ clientas`): sección
   "Sobre nosotros" y hero.
3. **Texto "Sobre nosotros"**: redactado en tono elegante y genérico a
   propósito; reemplazar por la historia real (año de apertura, anécdotas).
4. **Horario**: el indicado es un ejemplo razonable para el sector, confirmar
   con la propietaria.
5. **WhatsApp**: se ha enlazado el mismo teléfono fijo del salón. Confirmar
   si existe un número de móvil dedicado a WhatsApp Business.
6. **Redes sociales y páginas legales**: enlaces `#` de marcador de posición,
   sustituir por Instagram/Facebook reales y por Aviso legal, Privacidad y
   Cookies definitivos antes de publicar.
7. **Reseñas**: la sección está lista para incrustar el widget de reseñas de
   Google (o enlazarlas manualmente); mientras tanto se muestran 3 reseñas de
   ejemplo, claramente marcadas como contenido provisional.
8. **Dominio y Open Graph**: actualizar `canonical` y `og:url`/`og:image` con
   el dominio real una vez publicada la web.

## Decisiones de diseño (para la presentación)

**Paleta** — Blanco cálido, negro casi puro, gris piedra y un dorado apagado
como único acento de color. Se ha evitado cualquier tono estridente para que
la web se perciba atemporal y no "de moda pasajera": el objetivo es que en
cinco años siga viéndose actual.

**Tipografía** — Se combina una serif elegante con carácter (*Cormorant
Garamond*) para los titulares, con una sans-serif ligera y muy legible
(*Jost*) para el texto y la navegación. Este contraste —titulares con
personalidad, cuerpo de texto discreto— es el mismo recurso que usan las
marcas de belleza premium para transmitir sofisticación sin perder
legibilidad en móvil.

**El "trazo dorado" como firma visual** — En vez de usar iconos o adornos
genéricos, se ha diseñado un trazo dorado dibujado a mano (SVG) que aparece
como separador entre secciones. Representa visualmente un mechón de pelo o
una pincelada de balayage —el servicio más buscado y visual del salón— y se
"dibuja" con una pequeña animación al aparecer en pantalla. Es el elemento
que hace que el diseño no parezca una plantilla genérica: cualquier otra
peluquería con esta misma estructura no tendría este detalle.

**Fotografía como protagonista** — El hero ocupa toda la pantalla y la
mayoría de secciones intercalan imagen y texto a partes iguales. Esto es
intencional: en un negocio de imagen personal, la prueba del trabajo bien
hecho son las fotos reales, no el texto. Los marcadores de posición están
diseñados para que, en cuanto se sustituyan por fotos reales, la página gane
muchísimo impacto visual de forma inmediata.

**Fricción mínima hacia la conversión** — Botones de "Reservar cita" y
"Llamar" ya visibles en el primer segundo (hero), un teléfono siempre
accesible en el menú, y dos botones flotantes (llamar / WhatsApp) que
acompañan al usuario durante todo el scroll, especialmente pensados para
quien llega desde una búsqueda en el móvil ("peluquería cerca de mí").

**Estructura y jerarquía** — Cada sección tiene un único objetivo: el hero
capta la atención, "Sobre nosotros" genera confianza y cercanía, "Servicios"
aclara la oferta completa (peluquería + estética), la galería demuestra
calidad con trabajos reales, las opiniones aportan prueba social, y el
bloque de CTA + contacto elimina cualquier duda final antes de actuar.

**Accesibilidad y rendimiento** — Contraste de color revisado (texto oscuro
sobre fondos claros y viceversa), foco de teclado visible en todos los
elementos interactivos, textos alternativos previstos para las imágenes
reales, animaciones desactivables (`prefers-reduced-motion`), imágenes con
`loading="lazy"` una vez incorporadas, y un único archivo CSS/JS sin
dependencias pesadas para una carga rápida.

**SEO local** — Título y meta descripción orientados a "peluquería +
localidad", etiquetas Open Graph para que el enlace se vea bien al
compartirlo en redes, y marcado `schema.org` de tipo `HairSalon` con
dirección, teléfono y horario para ayudar a Google a mostrar la ficha
correctamente en búsquedas locales y Maps.
