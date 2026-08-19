/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL RESTAURANTE  ·  Es Cranc (Fornells, Menorca)
 * ─────────────────────────────────────────────────────────────
 *  Único archivo que necesitas tocar para adaptar la web a otro
 *  restaurante. Al estar tipado con `Restaurant`, si te dejas un
 *  campo o pones un idioma mal, TypeScript te avisa al instante.
 *
 *  [PLACEHOLDER] = dato que NO tengo verificado. Rellénalo o bórralo.
 * ─────────────────────────────────────────────────────────────
 */
import type { Lang, Restaurant } from '../types'

export const idiomas: Lang[] = ['es', 'en']
export const idiomaPorDefecto: Lang = 'es'

const data: Restaurant = {
  // ── Marca y tema ──────────────────────────────────────────
  marca: {
    nombre: 'Es Cranc',
    tema: {
      ink: '#12303A',
      paper: '#FAF7F1',
      sea: '#0E5C63',
      coral: '#D64C3A',
      sand: '#E4D9C4',
      stone: '#5A6B6E',
      display: "'Fraunces', Georgia, serif",
      body: "'Inter', system-ui, sans-serif"
    }
  },

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    titulo: {
      es: 'Es Cranc · Restaurante en Fornells, Menorca',
      en: 'Es Cranc · Restaurant in Fornells, Menorca'
    },
    descripcion: {
      es: 'Restaurante en el puerto de Fornells. Caldereta de langosta y producto del mar de Menorca.',
      en: 'Restaurant on Fornells harbour. Menorcan lobster stew and fresh local seafood.'
    }
  },

  // ── Navegación ────────────────────────────────────────────
  nav: [
    { id: 'historia', label: { es: 'Historia', en: 'Story' } },
    { id: 'producto', label: { es: 'Producto', en: 'Produce' } },
    { id: 'especialidades', label: { es: 'Especialidades', en: 'Specialities' } },
    { id: 'carta', label: { es: 'Carta', en: 'Menu' } },
    { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } }
  ],

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    imagen: '/img/hero.jpg',
    eyebrow: {
      es: 'Fornells · Menorca · Guía Michelin',
      en: 'Fornells · Menorca · Michelin Guide'
    },
    titulo: { es: 'La cocina del mar\nde Fornells', en: 'The sea kitchen\nof Fornells' },
    subtitulo: {
      es: 'Caldereta de langosta, arroces y pescado de la bahía. Producto de aquí, tratado con respeto.',
      en: 'Lobster stew, rice dishes and fish from the bay. Local produce, treated with respect.'
    }
  },

  // ── Historia ──────────────────────────────────────────────
  historia: {
    imagen: '/img/historia.jpg',
    eyebrow: { es: 'Quiénes somos', en: 'Who we are' },
    titulo: { es: 'Un clásico del puerto', en: 'A harbour classic' },
    parrafos: {
      es: [
        'Es Cranc está en el corazón de Fornells, el pueblo pesquero donde nació la caldereta de langosta. Aquí el mar no es paisaje: es la despensa.',
        'Desde [año de fundación] servimos la cocina marinera de la isla con el producto que llega cada día del puerto. [Añade aquí la historia real de la familia / los propietarios.]'
      ],
      en: [
        'Es Cranc sits in the heart of Fornells, the fishing village where the lobster stew was born. Here the sea is not scenery — it is the pantry.',
        'Since [founding year] we have served the island’s coastal cuisine with produce that arrives daily from the harbour. [Add the real family / owners story here.]'
      ]
    }
  },

  // ── Producto ──────────────────────────────────────────────
  producto: {
    imagen: '/img/producto.jpg',
    eyebrow: { es: 'Del mar a la mesa', en: 'From sea to table' },
    titulo: { es: 'Langosta roja de Fornells', en: 'Fornells red lobster' },
    texto: {
      es: 'La langosta de la bahía es escasa y estacional. Trabajamos con las barcas de siempre y con pescado fresco según la captura del día.',
      en: 'The bay lobster is scarce and seasonal. We work with the local boats and with fish that changes with the daily catch.'
    },
    puntos: {
      es: ['Producto local y de temporada', 'Pescado fresco del día', 'Recetas tradicionales menorquinas'],
      en: ['Local, seasonal produce', 'Fresh fish of the day', 'Traditional Menorcan recipes']
    }
  },

  // ── Especialidades ────────────────────────────────────────
  especialidades: {
    eyebrow: { es: 'La casa', en: 'The house' },
    titulo: { es: 'Nuestras especialidades', en: 'Our specialities' },
    items: [
      { icono: '🦞', nombre: { es: 'Caldereta de langosta', en: 'Lobster stew' } },
      { icono: '🍚', nombre: { es: 'Arroces y paellas', en: 'Rice & paellas' } },
      { icono: '🐟', nombre: { es: 'Pescado fresco', en: 'Fresh fish' } },
      { icono: '🦐', nombre: { es: 'Marisco de la isla', en: 'Island shellfish' } },
      { icono: '🥩', nombre: { es: 'Carnes a la brasa', en: 'Grilled meats' } },
      { icono: '🍮', nombre: { es: 'Postres caseros', en: 'Homemade desserts' } }
    ]
  },

  // ── Reseñas ───────────────────────────────────────────────
  resenas: {
    eyebrow: { es: 'Opiniones', en: 'Reviews' },
    titulo: { es: 'Lo que dicen', en: 'What people say' },
    items: [
      { texto: { es: '[Pega aquí una reseña real de Google.]', en: '[Paste a real Google review here.]' }, autor: '[Nombre]' },
      { texto: { es: '[Pega aquí una reseña real de Google.]', en: '[Paste a real Google review here.]' }, autor: '[Nombre]' },
      { texto: { es: '[Pega aquí una reseña real de Google.]', en: '[Paste a real Google review here.]' }, autor: '[Nombre]' }
    ]
  },

  // ── Carta ─────────────────────────────────────────────────
  carta: {
    eyebrow: { es: 'Carta', en: 'Menu' },
    titulo: { es: 'Consulta la carta', en: 'See the menu' },
    texto: {
      es: 'Descarga la carta actualizada en PDF.',
      en: 'Download the current menu as a PDF.'
    },
    pdf: '/carta-escranc.pdf',
    cta: { es: 'Ver carta (PDF)', en: 'View menu (PDF)' }
  },

  // ── Reservas ──────────────────────────────────────────────
  reservas: {
    url: 'https://www.covermanager.com/reservation/es-cranc',
    eyebrow: { es: 'Reservas', en: 'Reservations' },
    titulo: { es: 'Reserva tu mesa', en: 'Book your table' },
    texto: {
      es: 'Recomendamos reservar, sobre todo en temporada.',
      en: 'Booking is recommended, especially in season.'
    },
    cta: { es: 'Reservar mesa', en: 'Book a table' }
  },

  // ── Contacto ──────────────────────────────────────────────
  contacto: {
    eyebrow: { es: 'Dónde estamos', en: 'Find us' },
    titulo: { es: 'Contacto', en: 'Contact' },
    direccion: 'Carrer de ses Escoles, 31, 07748 Fornells, Menorca',
    telefono: '+34 971 37 64 42',
    email: '[email protected]',
    mapa: 'https://www.google.com/maps?q=40.0571193,4.1321183&hl=es&z=17&output=embed',
    horario: {
      es: [
        { dia: 'Lun–Mar', horas: '13:00–16:00 · 19:30–00:00' },
        { dia: 'Miércoles', horas: 'Cerrado' },
        { dia: 'Jue–Dom', horas: '13:00–16:00 · 19:30–00:00' }
      ],
      en: [
        { dia: 'Mon–Tue', horas: '1–4pm · 7:30pm–12am' },
        { dia: 'Wednesday', horas: 'Closed' },
        { dia: 'Thu–Sun', horas: '1–4pm · 7:30pm–12am' }
      ]
    }
  },

  // ── Redes y legal ─────────────────────────────────────────
  social: {
    instagram: '',
    facebook: ''
  },
  legal: {
    aviso: { es: 'Aviso legal', en: 'Legal notice' },
    privacidad: { es: 'Privacidad', en: 'Privacy' }
  }
}

export default data
