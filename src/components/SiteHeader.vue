<script setup lang="ts">
import { ref } from 'vue'
import { useContent } from '../composables/useContent'

const { data, lang, idiomas, setLang, t } = useContent()
const open = ref(false)

function go(id: string): void {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="hdr">
    <div class="wrap hdr__row">
      <a class="hdr__brand display" href="#" @click.prevent="go('top')">{{ data.marca.nombre }}</a>

      <nav class="hdr__nav" :class="{ 'is-open': open }" aria-label="Principal">
        <a v-for="item in data.nav" :key="item.id" href="#" @click.prevent="go(item.id)">
          {{ t(item.label) }}
        </a>
      </nav>

      <div class="hdr__side">
        <div class="lang" role="group" aria-label="Idioma">
          <button
            v-for="l in idiomas"
            :key="l"
            class="lang__btn"
            :class="{ 'is-active': lang === l }"
            :aria-pressed="lang === l"
            @click="setLang(l)"
          >{{ l.toUpperCase() }}</button>
        </div>
        <a class="btn btn--solid hdr__cta" :href="data.reservas.url" target="_blank" rel="noopener">
          {{ t(data.reservas.cta) }}
        </a>
        <button class="hdr__burger" :aria-expanded="open" aria-label="Menú" @click="open = !open">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <span id="top"></span>
</template>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
}
.hdr__row { display: flex; align-items: center; gap: 1.5rem; height: 68px; }
.hdr__brand { font-size: 1.5rem; font-weight: 600; letter-spacing: 0.01em; }
.hdr__nav { display: flex; gap: 1.6rem; margin-left: auto; }
.hdr__nav a { font-size: 0.95rem; font-weight: 500; color: var(--stone); transition: color 0.2s; }
.hdr__nav a:hover { color: var(--ink); }
.hdr__side { display: flex; align-items: center; gap: 1rem; }
.lang { display: flex; gap: 0.2rem; }
.lang__btn {
  background: none; border: none; padding: 0.3rem 0.4rem;
  font-size: 0.8rem; font-weight: 600; color: var(--stone); letter-spacing: 0.05em;
}
.lang__btn.is-active { color: var(--coral); }
.hdr__burger { display: none; background: none; border: none; padding: 0.5rem; }
.hdr__burger span { display: block; width: 22px; height: 2px; background: var(--ink); margin: 4px 0; }

@media (max-width: 860px) {
  .hdr__nav {
    position: absolute; top: 68px; left: 0; right: 0;
    flex-direction: column; gap: 0; margin: 0;
    background: var(--paper); border-bottom: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
    max-height: 0; overflow: hidden; transition: max-height 0.3s ease;
  }
  .hdr__nav.is-open { max-height: 320px; }
  .hdr__nav a { padding: 1rem var(--pad); border-top: 1px solid color-mix(in srgb, var(--ink) 8%, transparent); }
  .hdr__cta { display: none; }
  .hdr__burger { display: block; }
}
</style>
