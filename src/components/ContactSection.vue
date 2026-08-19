<script setup lang="ts">
import { useContent } from '../composables/useContent'
const { t, data } = useContent()
const c = data.contacto
</script>

<template>
  <section id="contacto" class="section">
    <div class="wrap split reveal">
      <div class="info">
        <p class="eyebrow">{{ t(c.eyebrow) }}</p>
        <h2 class="display">{{ t(c.titulo) }}</h2>

        <dl class="info__list">
          <div class="info__row">
            <dt>{{ t({ es: 'Dirección', en: 'Address' }) }}</dt>
            <dd>{{ c.direccion }}</dd>
          </div>
          <div class="info__row">
            <dt>{{ t({ es: 'Teléfono', en: 'Phone' }) }}</dt>
            <dd><a :href="`tel:${c.telefono.replace(/\s/g, '')}`">{{ c.telefono }}</a></dd>
          </div>
          <div class="info__row" v-if="c.email">
            <dt>Email</dt>
            <dd><a :href="`mailto:${c.email}`">{{ c.email }}</a></dd>
          </div>
          <div class="info__row">
            <dt>{{ t({ es: 'Horario', en: 'Hours' }) }}</dt>
            <dd>
              <ul class="hours">
                <li v-for="(h, i) in t(c.horario)" :key="i">
                  <span>{{ h.dia }}</span><span>{{ h.horas }}</span>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <div class="map">
        <iframe
          :src="c.mapa"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          :title="t(c.titulo)"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.info .display { margin: 0.6rem 0 2rem; }
.info__list { display: grid; gap: 1.4rem; }
.info__row dt { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral); margin-bottom: 0.35rem; }
.info__row dd { margin: 0; font-size: 1.05rem; }
.hours { list-style: none; padding: 0; display: grid; gap: 0.4rem; }
.hours li { display: flex; justify-content: space-between; gap: 1.5rem; max-width: 360px; border-bottom: 1px dotted color-mix(in srgb, var(--ink) 20%, transparent); padding-bottom: 0.35rem; }
.map { border-radius: var(--radius); overflow: hidden; border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent); }
.map iframe { width: 100%; height: 100%; min-height: 380px; border: 0; display: block; }
@media (max-width: 800px) { .split { grid-template-columns: 1fr; } .map iframe { min-height: 300px; } }
</style>
