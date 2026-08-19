<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const rv = data.reservas
</script>

<template>
  <section id="reservas" class="resv">
    <div class="wrap resv__inner reveal">
      <p class="eyebrow resv__eyebrow">{{ t(rv.eyebrow) }}</p>
      <h2 class="display">{{ t(rv.titulo) }}</h2>
      <p class="resv__text">{{ t(rv.texto) }}</p>
      <a class="btn btn--solid" :href="rv.url" target="_blank" rel="noopener">{{ t(rv.cta) }}</a>
    </div>
  </section>
</template>

<style scoped>
.resv { background: var(--sea); color: #fff; padding-block: clamp(3.5rem, 8vw, 6rem); }
.resv__inner { text-align: center; max-width: 600px; margin-inline: auto; }
.resv__eyebrow { color: var(--sand); }
.resv .display { margin: 0.6rem 0 1rem; }
.resv__text { color: rgba(255, 255, 255, 0.88); margin-bottom: 1.8rem; font-size: 1.1rem; }
</style>
