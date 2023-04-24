<template>
    <div v-if="nextSlide == 0" class="md:py-36 py-11 lg:px-[7em] md:px-[5em] px-4 ">
        <project-first @next="slide($event)"></project-first>
    </div>

    <div v-if="nextSlide == 1" class="">
        <project-second></project-second>
    </div>
    <div v-if="nextSlide == 2" class="md:py-36 py-11">
        <project-third></project-third>
    </div>
    <div v-if="nextSlide == 3" class="md:py-36 py-11 lg:px-[7em] md:px-[5em] px-4">
        <project-fourth></project-fourth>
    </div>

    <div v-if="nextSlide != 0" class="md:py-36 py-11 lg:px-[7em] md:px-[5em] px-4 !text-black">
        <navigate-footer :slide="nextSlide" @prev="slide($event)" @next="slide($event)"></navigate-footer>
    </div>
</template>

<script setup>
import projectFirst from '@/components/sections/project-first.vue';
import projectSecond from '@/components/sections/project-second.vue';
import projectThird from '@/components/sections/project-third.vue';
import projectFourth from '../components/sections/project-fourth.vue';
import navigateFooter from '@/components/sections/navigate-footer.vue';
import { ref } from 'vue'

const nextSlide = ref(0);

function slide(e) {
    nextSlide.value = e
}
</script>
