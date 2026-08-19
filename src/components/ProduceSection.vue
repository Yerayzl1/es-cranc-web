<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const p = data.producto
</script>

<template>
  <section id="producto" class="produce">
    <div class="wrap split reveal">
      <div class="produce__text">
        <p class="eyebrow">{{ t(p.eyebrow) }}</p>
        <h2 class="display">{{ t(p.titulo) }}</h2>
        <p class="produce__lead">{{ t(p.texto) }}</p>
        <ul class="produce__list">
          <li v-for="(pt, i) in t(p.puntos)" :key="i">{{ pt }}</li>
        </ul>
      </div>
      <div class="media produce__media" :style="{ backgroundImage: `url(${p.imagen})` }" role="img" :aria-label="t(p.titulo)"></div>
    </div>
  </section>
</template>

<style scoped>
.produce { background: var(--ink); color: var(--paper); padding-block: clamp(4rem, 10vw, 8rem); }
.split { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
.produce__media { min-height: 420px; }
.produce .display { margin: 0.8rem 0 1.4rem; }
.produce__lead { font-size: 1.2rem; color: color-mix(in srgb, var(--paper) 82%, transparent); max-width: 42ch; }
.produce__list { list-style: none; padding: 0; margin-top: 1.8rem; display: grid; gap: 0.9rem; }
.produce__list li { position: relative; padding-left: 1.6rem; font-weight: 500; }
.produce__list li::before {
  content: ''; position: absolute; left: 0; top: 0.55em;
  width: 8px; height: 8px; border-radius: 50%; background: var(--coral);
}
@media (max-width: 800px) {
  .split { grid-template-columns: 1fr; }
  .produce__media { min-height: 280px; }
}
</style>
