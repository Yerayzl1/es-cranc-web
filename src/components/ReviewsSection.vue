<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const r = data.resenas
</script>

<template>
  <section class="reviews section--tight">
    <div class="wrap">
      <header class="head reveal">
        <p class="eyebrow">{{ t(r.eyebrow) }}</p>
        <h2 class="display">{{ t(r.titulo) }}</h2>
      </header>
      <ul class="grid reveal">
        <li v-for="(item, i) in r.items" :key="i" class="quote">
          <p class="quote__text">“{{ t(item.texto) }}”</p>
          <p class="quote__author">{{ item.autor }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.reviews { background: color-mix(in srgb, var(--sea) 8%, var(--paper)); padding-block: clamp(3rem, 7vw, 5.5rem); }
.head { text-align: center; margin-bottom: 2.5rem; }
.head .display { margin-top: 0.6rem; }
.grid { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.quote {
  background: var(--paper); padding: 2rem 1.8rem; border-radius: var(--radius);
  border-top: 3px solid var(--coral);
}
.quote__text { font-family: var(--display); font-size: 1.15rem; line-height: 1.4; }
.quote__author { margin-top: 1.2rem; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.05em; color: var(--stone); text-transform: uppercase; }
@media (max-width: 800px) { .grid { grid-template-columns: 1fr; } }
</style>
