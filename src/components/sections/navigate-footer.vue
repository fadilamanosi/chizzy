<template>
    <div class="grid grid-cols-2 bg-inherit pt-16 md:py-36 py-11 lg:px-[7em] md:px-[5em] px-4 ">
        <a href="#up" class="h-fit grid cursor-pointer hover:text-[#6204AC]" @click="projectRef.prevSlide()">
            <span class="text-[16px] text-[#747474] hover:text-[#6204AC]">
                PREVIOUS
            </span>
            <span class="font-[500] md:w-full w-[60%] md:text-[22px] text-[16px] hover:text-[#6204AC]">
                <span v-if="projectRef.projectPage == 1">
                    Projects
                </span>
                <span v-if="projectRef.projectPage == 2">
                    Web App and Landing Page for BitBarter
                </span>
                <span v-if="projectRef.projectPage == 3">
                    Krptverse
                </span>
            </span>
        </a>

        <a href="#up" class="h-fit grid cursor-pointer hover:text-[#6204AC] text-end" @click="projectRef.nextSlide()">
            <span v-if="projectRef.projectPage != 3" class="text-[16px] text-[#747474] hover:text-[#6204AC] text-end">
                NEXT
            </span>
            <div class="font-[500] md:text-[22px] text-[16px] hover:text-[#6204AC]">
                <span v-if="projectRef.projectPage == 1">
                    Krptverse
                </span>
                <span v-if="projectRef.projectPage == 2">
                    Stakify Web App
                </span>
            </div>
        </a>
    </div>
</template>

<script setup>
import { projectStore } from "@/stores/projectStore.js";
import { onMounted } from "vue";
const projectRef = projectStore();

onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector('#up').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})

</script>