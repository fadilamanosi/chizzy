<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from './components/sections/header-section.vue';
import footerSection from './components/sections/footer-section.vue';
</script>

<template>
  <section class="pt-8 !font-clash bg-[#F5F6F8]">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </section>
</template>
