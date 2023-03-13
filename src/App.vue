<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from './components/sections/header-section.vue';
import footerSection from './components/sections/footer-section.vue';
</script>

<template>
  <section class="py-8 !font-clash">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </section>
</template>
