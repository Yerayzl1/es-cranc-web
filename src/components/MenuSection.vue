<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const c = data.carta
</script>

<template>
  <section id="carta" class="section">
    <div class="wrap band reveal">
      <p class="eyebrow">{{ t(c.eyebrow) }}</p>
      <h2 class="display">{{ t(c.titulo) }}</h2>
      <p class="lead band__text">{{ t(c.texto) }}</p>
      <a class="btn btn--ghost" :href="c.pdf" target="_blank" rel="noopener">{{ t(c.cta) }}</a>
    </div>
  </section>
</template>

<style scoped>
.band {
  text-align: center; max-width: 640px; margin-inline: auto;
  padding: clamp(2.5rem, 6vw, 4rem); border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
  border-radius: var(--radius);
}
.band .display { margin: 0.6rem 0 1rem; }
.band__text { margin-bottom: 1.8rem; }
</style>
