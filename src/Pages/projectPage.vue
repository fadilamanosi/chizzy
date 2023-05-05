<template>
    <div v-if="projectRef.projectPage == 0" class="md:py-36 py-11 lg:px-[7em] md:px-[5em] px-4 ">
        <project-first></project-first>
    </div>

    <div v-if="projectRef.projectPage == 1" class="">
        <project-second></project-second>
    </div>
    <div v-if="projectRef.projectPage == 2">
        <project-third></project-third>
    </div>
    <div v-if="projectRef.projectPage == 3">
        <project-fourth></project-fourth>
    </div>

    <div v-if="projectRef.projectPage != 0" class="bg-[#FAFAFA]  !text-black">
        <navigate-footer :slide="projectRef.projectPage"></navigate-footer>
    </div>
</template>

<script setup>
import projectFirst from '@/components/sections/project-first.vue';
import projectSecond from '@/components/sections/project-second.vue';
import projectThird from '@/components/sections/project-third.vue';
import projectFourth from '../components/sections/project-fourth.vue';
import navigateFooter from '@/components/sections/navigate-footer.vue';
import { projectStore } from "@/stores/projectStore.js";
// import { appStore } from "@/stores/appStore.js";
import { onBeforeMount, onMounted, } from 'vue';

// const appRef = appStore();
const projectRef = projectStore();

function query() {
    let queryString = window.location.href;

    if (queryString.indexOf("?") === -1) {
        return {};
    }

    return new Proxy(new URLSearchParams(queryString.slice(queryString.indexOf("?"))), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
}
onBeforeMount(() => {
    if (query().page != undefined && parseInt(query().page) > 0) {
        projectRef.slide(parseInt(query().page));
    }
});

onMounted(() => {

    // document.onreadystatechange = () => {
    //     if (document.readyState == "complete") {
    //         setTimeout(function () {
    //             appRef.isLoaded = true;
    //         }, 5000);
    //     }
    // }

    // if (document.readyState == "complete") {
    //     setTimeout(function () {
    //         appRef.isLoaded = true;
    //     }, 5000);
    // };
});



</script>
