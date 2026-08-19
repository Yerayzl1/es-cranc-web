<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <div class="wrap ftr__row">
      <span class="ftr__brand display">{{ data.marca.nombre }}</span>
      <nav class="ftr__social" aria-label="Redes">
        <a v-if="data.social.instagram" :href="data.social.instagram" target="_blank" rel="noopener">Instagram</a>
        <a v-if="data.social.facebook" :href="data.social.facebook" target="_blank" rel="noopener">Facebook</a>
      </nav>
      <nav class="ftr__legal" aria-label="Legal">
        <a href="#">{{ t(data.legal.aviso) }}</a>
        <a href="#">{{ t(data.legal.privacidad) }}</a>
      </nav>
    </div>
    <div class="wrap ftr__copy">© {{ year }} {{ data.marca.nombre }} · Fornells, Menorca</div>
  </footer>
</template>

<style scoped>
.ftr { background: var(--ink); color: color-mix(in srgb, var(--paper) 80%, transparent); padding-block: 2.6rem 1.6rem; }
.ftr__row { display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem; }
.ftr__brand { font-size: 1.4rem; color: #fff; }
.ftr__social { display: flex; gap: 1.2rem; margin-left: auto; }
.ftr__social a, .ftr__legal a { font-size: 0.9rem; transition: color 0.2s; }
.ftr__legal { display: flex; gap: 1.2rem; }
.ftr__social a:hover, .ftr__legal a:hover { color: #fff; }
.ftr__copy { margin-top: 1.6rem; padding-top: 1.4rem; border-top: 1px solid rgba(255,255,255,0.12); font-size: 0.82rem; }
@media (max-width: 640px) { .ftr__social { margin-left: 0; width: 100%; } }
</style>
