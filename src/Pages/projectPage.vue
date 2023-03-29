<template>
    <div v-if="nextSlide == 0" class="py-36 lg:px-[7em] md:px-[5em] ">
        <project-second></project-second>
    </div>
    <div v-if="nextSlide == 1">
        <project-third></project-third>
    </div>
    <div v-if="nextSlide == 2">
        <div>
            Fourth
        </div>
    </div>

    <div v-if="nextSlide == 3">
        <div>
            Fifth
        </div>
    </div>

    <div class="py-36 lg:px-[7em] md:px-[5em] ">
        <navigate-footer @prev="slide($event)" @next="slide($event)"></navigate-footer>
    </div>
</template>

<script setup>
import projectSecond from '@/components/sections/project-second.vue';
import projectThird from '@/components/sections/project-third.vue';
import navigateFooter from '@/components/sections/navigate-footer.vue';
import { ref } from 'vue'

const nextSlide = ref(1);

function slide(e) {
    nextSlide.value = e

    console.log(e)
}
</script>