# Plantilla web para restaurantes · Vue 3 + Vite

Web one-page bilingüe (ES/EN) pensada como plantilla reutilizable. Empieza configurada para **Es Cranc** (Fornells, Menorca) tomando como referencia de nivel la web de La Guapa.

## Arrancar

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera /dist para producción
npm run preview  # previsualiza el build
```

## Cómo adaptarla a otro restaurante

Todo el contenido vive en **un solo archivo**:

```
src/data/restaurant.js
```

Ahí cambias textos (objetos `{ es, en }`), colores, tipografías, teléfono, dirección, horario, URL de reservas y rutas de las fotos. **No necesitas tocar los componentes.**

### Tema (colores y fuentes)
En `restaurant.js` → `marca.tema`. Se inyectan como variables CSS al cargar (`--ink`, `--paper`, `--sea`, `--coral`, `--sand`, `--stone`, `--display`, `--body`). Cambiar la paleta = re-skin completo.

Las fuentes se cargan en `index.html` (Google Fonts). Si cambias `display`/`body` en el tema, actualiza también el `<link>` de fuentes.

## Qué tienes que rellenar (marcado con `[PLACEHOLDER]`)
- **Fotos**: deja los `.jpg` en `public/img/` con estos nombres: `hero.jpg`, `historia.jpg`, `producto.jpg`. Si falta una, se ve un degradado en vez de imagen rota.
- **Carta**: deja el PDF en `public/` (por defecto `carta-escranc.pdf`).
- **Reservas**: pon la URL real de CoverManager/TheFork en `reservas.url`.
- **Reseñas**: sustituye por reseñas reales de Google (con nombre).
- **Historia**: año de fundación e historia real de la familia.
- **Email** y **redes sociales**.

## Datos ya verificados de Es Cranc
Nombre, ubicación (Fornells), caldereta de langosta, mención en la Guía Michelin, dirección, teléfono, horario y coordenadas del mapa. Todo lo demás está marcado como placeholder.

## Estructura
```
src/
  data/restaurant.js        ← ÚNICO archivo a editar por restaurante
  composables/useContent.js ← idioma + helper t()
  assets/styles.css         ← sistema de diseño (variables CSS)
  App.vue                   ← inyecta tema + SEO + compone secciones
  components/               ← Header, Hero, Story, Produce, Specialities,
                              Reviews, Menu, Reservation, Contact, Footer
```

## Notas
- i18n propio y ligero (sin dependencias): el idioma se guarda en `localStorage`.
- Accesibilidad: foco visible, `prefers-reduced-motion` respetado, etiquetas ARIA.
- SEO: `<title>` y `meta description` se actualizan según el idioma.