<template>
    <div class="py-36   grid gap-36 ">
        <div class="grid gap-8 lg:px-[7em] ">
            <h1 class="font-[700] text-[36px] text-center text-black">Thoughts</h1>

            <div class="grid md:grid-cols-2  gap-8 justify-center  px-4">
                <a href="https://medium.com/@ejiehchiezechizzy/web3-decentralization-101-what-it-is-and-how-it-will-change-your-life-d9bcc85e0ab6"
                    class="p-6 rounded-md border border-gray-300 grid gap-4 hover:bg-gray-100">
                    <span class=" border border-[#B0B0B0] px-4 py-2 rounded-full w-fit">
                        Article
                    </span>
                    <div class="font-[600] text-[36px] text-[#161616]">
                        Web3 Decentralization 101:<br> What it is and How it will change your life
                    </div>
                    <span class="font-[400] text-[22px] text-[#747474]">
                        November, 2022
                    </span>

                    <hinge-arrow></hinge-arrow>
                </a>

                <a href="https://medium.com/@ejiehchiezechizzy/krptramp-designing-an-easy-to-use-solution-for-crypto-ramps-7a6ae2eae8ef"
                    class="p-6 rounded-md border border-gray-300 grid gap-4 hover:bg-gray-100">
                    <span class=" border border-[#B0B0B0] px-4 py-2 rounded-full w-fit">
                        Article
                    </span>
                    <div class="font-[600] text-[36px] text-[#161616]">
                        Web3 Decentralization 101:<br> What it is and How it will change your life
                    </div>
                    <span class="font-[400] text-[22px] text-[#747474]">
                        November, 2022
                    </span>

                    <hinge-arrow></hinge-arrow>
                </a>

            </div>
        </div>


        <div class="font-[500] lg:text-[52px] text-[32px] text-[#2C2C2C] text-center bg-[#FAFAFB] py-[85px]">
            I’m open to writing and speaking gigs, <br>you can reach out to me via
            <a href="mailto:ejiehchieze@gmail.com" class="text-[#6204AC] font-[500] underline">
                email.
            </a>
        </div>
    </div>
</template>

<script setup>
import hingeArrow from '../components/icons/hinge-arrow.vue';
import { onMounted } from 'vue';
// import { appStore } from "@/stores/appStore.js";
// const appRef = appStore();

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