import { ref, computed, type ComputedRef } from 'vue'
import data, { idiomas, idiomaPorDefecto } from '../data/restaurant'
import type { Lang, I18nText, I18nTextList, HorarioI18n, HorarioItem, Restaurant } from '../types'

// Estado de idioma compartido por toda la app.
const lang = ref<Lang>(
  ((typeof localStorage !== 'undefined' && (localStorage.getItem('lang') as Lang)) || idiomaPorDefecto)
)

function setLang(nuevo: Lang): void {
  if (!idiomas.includes(nuevo)) return
  lang.value = nuevo
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', nuevo)
  if (typeof document !== 'undefined') document.documentElement.lang = nuevo
}

/**
 * Devuelve el valor del nodo en el idioma indicado.
 *  - { es, en }         → string
 *  - { es:[], en:[] }   → string[]  (párrafos, puntos, horario)
 *  - string             → el mismo string
 */
function pick(nodo: unknown, l: Lang): unknown {
  if (nodo == null) return ''
  if (typeof nodo === 'string' || typeof nodo === 'number') return nodo
  if (Array.isArray(nodo)) return nodo.map((n) => pick(n, l))
  if (typeof nodo === 'object' && l in (nodo as Record<string, unknown>)) {
    return (nodo as Record<Lang, unknown>)[l]
  }
  return nodo
}

/** Firma sobrecargada de t(): cada tipo de nodo devuelve el tipo correcto. */
interface TranslateFn {
  (nodo: I18nText): string
  (nodo: I18nTextList): string[]
  (nodo: HorarioI18n): HorarioItem[]
  (nodo: string): string
}

interface UseContent {
  data: Restaurant
  idiomas: Lang[]
  lang: ComputedRef<Lang>
  setLang: (nuevo: Lang) => void
  t: TranslateFn
}

export function useContent(): UseContent {
  const t = ((nodo: unknown) => pick(nodo, lang.value)) as TranslateFn
  return {
    data,
    idiomas,
    lang: computed(() => lang.value),
    setLang,
    t
  }
}
