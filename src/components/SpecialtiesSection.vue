<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const e = data.especialidades
</script>

<template>
  <section id="especialidades" class="section">
    <div class="wrap">
      <header class="head reveal">
        <p class="eyebrow">{{ t(e.eyebrow) }}</p>
        <h2 class="display">{{ t(e.titulo) }}</h2>
      </header>
      <ul class="grid reveal">
        <li v-for="(item, i) in e.items" :key="i" class="card">
          <span class="card__icon" aria-hidden="true">{{ item.icono }}</span>
          <span class="card__name">{{ t(item.nombre) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.head { text-align: center; margin-bottom: clamp(2.5rem, 5vw, 4rem); }
.head .display { margin-top: 0.6rem; }
.grid { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.card {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: 0.9rem; padding: 2.4rem 1.2rem;
  background: color-mix(in srgb, var(--sand) 35%, var(--paper));
  border: 1px solid color-mix(in srgb, var(--ink) 8%, transparent);
  border-radius: var(--radius);
}
.card__icon { font-size: 2rem; }
.card__name { font-family: var(--display); font-size: 1.15rem; font-weight: 500; }
@media (max-width: 720px) { .grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 440px) { .grid { grid-template-columns: 1fr; } }
</style>
