<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from './components/sections/header-section.vue';
import footerSection from './components/sections/footer-section.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
</script>

<template>
  <section class="pt-8 !font-clash home-scope bg-[#FFFFFF]" id="up">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </section>
</template>
