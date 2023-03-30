<template>
    <div class="flex justify-between lg:px-[7em] md:px-8  px-4 relative">

        <div class="flex gap-28 items-center">
            <a href="/">
                <img class="lg:w-[121.12px] max-w-[8em] max-[280px]:max-w-[5em]" src="../../assets/images/ejiehchiezelogo.png">
            </a>



            <div
                :class="'lg:flex flex lg:justify-start justify-end  text-[16px] list-header lg:relative fixed top-0 bottom-0 right-0 left-0 w-full lg:bg-[inherit] bg-[#000000c1] z-50 ' + show">

                <div
                    class="lg:m-0 m-5 text-black  md:bg-inherit bg-white h-fit p-4 rounded-md lg:shadow-none shadow-md flex justify-between w-full">
                    <ul class="flex lg:flex-row flex-col lg:gap-10 gap-5">
                        <a href="/" class="font-[500]" :id="route.name == 'home' ? 'active' : ''">Home</a>
                        <a href="/about" class="font-medium" :id="route.name == 'about' ? 'active' : ''">About</a>
                        <a href="/project" class="font-medium" :id="route.name == 'project' ? 'active' : ''">Projects</a>
                        <a href="/thoughts" class="font-medium" :id="route.name == 'thoughts' ? 'active' : ''">Thoughts</a>
                    </ul>

                    <svg @click="toggle()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        :class="'bi bi-x lg:' + show" viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
        </div>

        <div class=" flex flex-row-reverse items-center gap-6  max-[280px]:gap-1">
            <svg @click="toggle()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                class="bi bi-columns-gap lg:hidden harmbugger" viewBox="0 0 16 16">
                <path
                    d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
            </svg>


            <div>
                <button class="bg-[#6204AC] text-white p-2 rounded-md">
                    Download Resume
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const show = ref('hidden');

function toggle() {
    if (show.value == 'hidden') {
        show.value = '';
    } else {
        show.value = 'hidden'
    }
}
</script>

<style>
#active {
    color: #6204AC;
}
</style>