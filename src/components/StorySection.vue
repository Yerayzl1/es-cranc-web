<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const s = data.historia
</script>

<template>
  <section id="historia" class="section">
    <div class="wrap split reveal">
      <div class="media split__media" :style="{ backgroundImage: `url(${s.imagen})` }" role="img" aria-label="Es Cranc"></div>
      <div class="split__text">
        <p class="eyebrow">{{ t(s.eyebrow) }}</p>
        <h2 class="display">{{ t(s.titulo) }}</h2>
        <p v-for="(p, i) in t(s.parrafos)" :key="i" class="lead split__p">{{ p }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
.split__media { min-height: 440px; }
.split__text .display { margin: 0.8rem 0 1.4rem; }
.split__p { margin-bottom: 1rem; }
@media (max-width: 800px) {
  .split { grid-template-columns: 1fr; }
  .split__media { min-height: 300px; order: -1; }
}
</style>
