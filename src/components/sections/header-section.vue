<template>
    <div id="up" class="flex justify-between lg:px-[7em] md:px-8  px-4 relative z-50 pt-[23px]">

        <div class="flex gap-28 items-center">
            <a href="/">
                <img class="lg:w-[121.12px] max-w-[8em] max-[280px]:max-w-[5em]"
                    src="../../assets/images/ejiehchiezelogo.png">
            </a>
            <div
                :class="'lg:flex flex lg:justify-start justify-end  text-[16px] list-header lg:relative fixed lg:top-0 top-20 bottom-0 right-0 left-0 w-full lg:bg-[inherit] z-[1000] ' + show">

                <div
                    class="text-black  lg:bg-inherit bg-white h-fit p-4  lg:shadow-none shadow-md grid  w-full ">
                    <ul class="flex lg:flex-row flex-col lg:gap-10 gap-5">
                        <a href="/" class="font-[500]" :id="route.name == 'home' ? 'active' : ''">Home</a>
                        <a href="/about" class="font-medium" :id="route.name == 'about' ? 'active' : ''">About</a>
                        <a @click="projectRef.reset()" href="/project" class="font-medium"
                            :id="route.name == 'project' ? 'active' : ''">Projects</a>
                        <a href="/thoughts" class="font-medium" :id="route.name == 'thoughts' ? 'active' : ''">Thoughts</a>

                        <a href="resume.pdf" download="resume" class="lg:hidden w-full">
                            <button class="bg-[#6204AC] hover:bg-[#4c0582] text-white py-2 px-5 rounded-md w-full">
                                Download Resume
                            </button>
                        </a>
                    </ul>

                    <!-- <svg @click="toggle()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black"
                        :class="'lg:hidden bi bi-x cursor-pointer'" viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg> -->


                </div>
            </div>
        </div>

        <div class=" flex flex-row-reverse items-center gap-6  max-[280px]:gap-1">
            <svg v-if="show == 'hidden'"  @click="toggle()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black"
                class="bi bi-list lg:hidden harmbugger cursor-pointer" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>

            <svg v-if="show == ''"  @click="toggle()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black"
                :class="'lg:hidden bi bi-x harmbugger cursor-pointer'" viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>


            <a href="resume.pdf" download="resume">
                <button class="bg-[#6204AC] hover:bg-[#4c0582] text-white py-2 px-5 rounded-md hidden lg:block">
                    Download Resume
                </button>
            </a>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { projectStore } from "@/stores/projectStore.js";
const projectRef = projectStore();


const route = useRoute();
const show = ref('hidden');

function toggle() {
    if (show.value == 'hidden') {
        show.value = '';
    } else {
        show.value = 'hidden'
    }
    console.log(show.value)
}
</script>

<style scoped>
#active {
    color: #6204AC;
    font-weight: 800;
}

a:hover {
    color: #6204AC;
}
</style>