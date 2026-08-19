// ─────────────────────────────────────────────────────────────
//  Modelo de tipos del contenido del restaurante
// ─────────────────────────────────────────────────────────────

export type Lang = 'es' | 'en'

/** Texto traducible: { es, en } */
export interface I18nText {
  es: string
  en: string
}

/** Lista de textos traducible: { es: string[], en: string[] } */
export interface I18nTextList {
  es: string[]
  en: string[]
}

export interface Theme {
  ink: string
  paper: string
  sea: string
  coral: string
  sand: string
  stone: string
  display: string
  body: string
}

export interface Brand {
  nombre: string
  tema: Theme
}

export interface Seo {
  titulo: I18nText
  descripcion: I18nText
}

export interface NavItem {
  id: string
  label: I18nText
}

export interface Hero {
  imagen: string
  eyebrow: I18nText
  titulo: I18nText
  subtitulo: I18nText
}

export interface Historia {
  imagen: string
  eyebrow: I18nText
  titulo: I18nText
  parrafos: I18nTextList
}

export interface Producto {
  imagen: string
  eyebrow: I18nText
  titulo: I18nText
  texto: I18nText
  puntos: I18nTextList
}

export interface EspecialidadItem {
  icono: string
  nombre: I18nText
}

export interface Especialidades {
  eyebrow: I18nText
  titulo: I18nText
  items: EspecialidadItem[]
}

export interface ResenaItem {
  texto: I18nText
  autor: string
}

export interface Resenas {
  eyebrow: I18nText
  titulo: I18nText
  items: ResenaItem[]
}

export interface Carta {
  eyebrow: I18nText
  titulo: I18nText
  texto: I18nText
  pdf: string
  cta: I18nText
}

export interface Reservas {
  url: string
  eyebrow: I18nText
  titulo: I18nText
  texto: I18nText
  cta: I18nText
}

export interface HorarioItem {
  dia: string
  horas: string
}

/** El horario tiene una lista de tramos por idioma. */
export interface HorarioI18n {
  es: HorarioItem[]
  en: HorarioItem[]
}

export interface Contacto {
  eyebrow: I18nText
  titulo: I18nText
  direccion: string
  telefono: string
  email: string
  mapa: string
  horario: HorarioI18n
}

export interface Social {
  instagram: string
  facebook: string
}

export interface Legal {
  aviso: I18nText
  privacidad: I18nText
}

/** Estructura completa del contenido de un restaurante. */
export interface Restaurant {
  marca: Brand
  seo: Seo
  nav: NavItem[]
  hero: Hero
  historia: Historia
  producto: Producto
  especialidades: Especialidades
  resenas: Resenas
  carta: Carta
  reservas: Reservas
  contacto: Contacto
  social: Social
  legal: Legal
}
