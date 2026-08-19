<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { data, t } = useContent()
const h = data.hero

function scrollTo(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    class="hero media"
    :style="{ backgroundImage: `linear-gradient(180deg, rgba(18,48,58,0.25) 0%, rgba(18,48,58,0.75) 100%), url(${h.imagen})` }"
  >
    <div class="wrap hero__inner">
      <p class="eyebrow hero__eyebrow">{{ t(h.eyebrow) }}</p>
      <h1 class="display hero__title">{{ t(h.titulo) }}</h1>
      <p class="hero__sub">{{ t(h.subtitulo) }}</p>
      <div class="hero__cta">
        <a class="btn btn--solid" :href="data.reservas.url" target="_blank" rel="noopener">{{ t(data.reservas.cta) }}</a>
        <button class="btn btn--ondark" @click="scrollTo('carta')">{{ t(data.carta.cta) }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: min(88vh, 760px);
  display: flex;
  align-items: flex-end;
  color: #fff;
  padding-bottom: clamp(2.5rem, 6vw, 5rem);
}
.hero__inner { max-width: var(--maxw); }
.hero__eyebrow { color: var(--sand); margin-bottom: 1.1rem; }
.hero__title { white-space: pre-line; max-width: 14ch; margin-bottom: 1.3rem; }
.hero__sub { font-size: clamp(1.05rem, 1.7vw, 1.35rem); max-width: 46ch; color: rgba(255, 255, 255, 0.9); }
.hero__cta { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2rem; }
</style>
