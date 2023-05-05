

<style>
.animate {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: all 1s ease;
}

.animate.active {
  transform: translateY(5px);
  opacity: 1;
}
</style>

<template>
  <section class="!font-sans  bg-[#FFFFFF]">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </section>

<!-- 
  <section v-if="appRef.isLoaded == false"
    class="bg-[#000000] h-screen flex flex-col justify-center fixed top-0 bottom-0 w-full z-[1000] overflow-hidden">
    <div class="flex justify-center text-center">
      <svg width="100" height="100" version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
        enable-background="new 0 0 100 100" xml:space="preserve">
        <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
        c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
            to="360 50 50" repeatCount="indefinite"></animateTransform>
        </path>
        <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
        c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
            to="-360 50 50" repeatCount="indefinite"></animateTransform>
        </path>
        <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
        L82,35.7z">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
            to="360 50 50" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
    </div>
  </section> -->
</template>


<script setup>
import { RouterView } from "vue-router";
import HeaderSection from "@/components/sections/header-section.vue";
import footerSection from "@/components/sections/footer-section.vue";
import { onMounted } from "vue";
// import { appStore } from "@/stores/appStore.js";
// const appRef = appStore();

onMounted(() => {

  window.addEventListener("scroll", () => {
    var animate = document.querySelectorAll(".animate");
    for (var i = 0; i < animate.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = animate[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if (revealtop < windowheight - revealpoint) {
        animate[i].classList.add("active");
      } else {
        animate[i].classList.remove("active");
      }
    }
  });

  var first = document.querySelectorAll(".animate");

  if (first[0] !== undefined) {
    first[0].classList.add("active");
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector('#up').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

});



</script>