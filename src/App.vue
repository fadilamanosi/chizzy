<script setup>
import { RouterView } from "vue-router";
import HeaderSection from "@/components/sections/header-section.vue";
import footerSection from "@/components/sections/footer-section.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

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
  first[0].classList.add("active");
});
</script>

<style>
.animate {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: all 2s ease;
}

.animate.active {
  transform: translateY(0px);
  opacity: 1;
}
</style>

<template>
  <section class="pt-8 !font-sans  bg-[#FFFFFF]" id="up">
    <header-section class="animate"></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </section>
</template>
