<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { useContent } from './composables/useContent'

import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import StorySection from './components/StorySection.vue'
import ProduceSection from './components/ProduceSection.vue'
import SpecialtiesSection from './components/SpecialtiesSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import MenuSection from './components/MenuSection.vue'
import ReservationSection from './components/ReservationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { data, lang, t } = useContent()

onMounted(() => {
  const tema = data.marca.tema
  const root = document.documentElement.style
  root.setProperty('--ink', tema.ink)
  root.setProperty('--paper', tema.paper)
  root.setProperty('--sea', tema.sea)
  root.setProperty('--coral', tema.coral)
  root.setProperty('--sand', tema.sand)
  root.setProperty('--stone', tema.stone)
  root.setProperty('--display', tema.display)
  root.setProperty('--body', tema.body)
  document.documentElement.lang = lang.value

  const io = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) =>
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})

watchEffect(() => {
  document.title = t(data.seo.titulo)
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', t(data.seo.descripcion))
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <StorySection />
    <ProduceSection />
    <SpecialtiesSection />
    <ReviewsSection />
    <MenuSection />
    <ReservationSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
