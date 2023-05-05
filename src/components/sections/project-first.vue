<template>
    <div class="grid gap-28">
        <div class="grid lg:grid-cols-2 gap-16 ">
            <div class=" grid gap-7">
                <img class="lg:w-[70em]" src="../../assets/images/project/BitBarter.png">
                <div class="md:w-[80%] grid gap-1">
                    <span class="text-[12px] font-[500] capitalize text-[#747474] tracking-widest">
                        DESIGN SYSTEM . UI DESIGN . VISUAL DESIGN
                    </span>
                    <h1 class="lg:text-[20px] text-[16px] font-[600] text-black">
                        Web App and Landing page design for BitBarter
                    </h1>
                    <p class="text-[16px] font-[500] text-[#747474]">
                        A digital wallet with a payment processor and remittance services.
                    </p>


                    <div @click="projectRef.slide(1)"
                        class="mt-[36px] cursor-pointer text-black relative lg:w-[337px] lg:h-[99px] w-[237px] h-[79px] border-[2px] rounded-[50%] border-black hover:border-[#6204AC] hover:text-[#6204AC]">
                        <div class="flex flex-col  justify-center  h-full w-full">
                            <div class="lg:text-[20px] text-[16px] text-center  flex   justify-center   font-semibold items-center">
                                Read Casestudy
                                <arrow-right></arrow-right>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="grid gap-7 pt-4">
                <div class="bg-[#F6F7F9]   rounded-md flex justify-center  py-8  ">
                    <img class=" w-[28em] " src="../../assets/images/project/phonemockup.png">
                </div>
                <div class="md:w-[80%] grid gap-2 h-fit">
                    <span class="text-[12px] font-[500] capitalize text-[#747474]  tracking-widest">
                        INFORMATION ARCHITECTURE . UI DESIGN
                    </span>
                    <h1 class="lg:text-[20px] text-[16px] font-[600] text-black">
                        Krptrix Mobile App
                    </h1>
                    <p class="text-[16px] font-[500] text-[#747474]">
                        A Decentralized Exchange Wallet that allows users send, receive and trade cryptocurrencies.
                    </p>


                    <div @click="projectRef.slide(2)"
                        class="mt-[36px] cursor-pointer text-black relative lg:w-[337px] lg:h-[99px] w-[237px] h-[79px] border-[2px] rounded-[50%] border-black hover:border-[#6204AC] hover:text-[#6204AC]">
                        <div class="flex flex-col  justify-center  h-full w-full">
                            <div class="lg:text-[20px] text-[16px] text-center  flex justify-center font-semibold items-center">
                                Read Casestudy
                                <arrow-right></arrow-right>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="rounded-md  grid gap-7">
            <div class="bg-[#F6F7F9] h-fit">
                <img src="../../assets/images/project/Frame10.png">
            </div>
            <div class="md:w-[80%] grid gap-3 h-fit">
                <span class="text-[12px] font-[500] capitalize text-[#747474]">
                    USER RESEARCH . WIREFRAMING . UI/UX
                </span>
                <h1 class="lg:text-[20px] text-[16px] font-[600] text-black">
                    Stakify Web App
                </h1>
                <p class="text-[16px] font-[500] text-[#747474]">
                    A liquid staking solution that solves the problem of locked liquidity by providing instant liquidity for
                    staked assets.
                </p>


                <div @click="projectRef.slide(3)"
                    class="mt-[36px] cursor-pointer text-black relative lg:w-[337px] lg:h-[99px] w-[237px] h-[79px] border-[2px] rounded-[50%] border-black hover:border-[#6204AC] hover:text-[#6204AC]">
                    <div class="flex flex-col  justify-center  h-full w-full">
                        <div class="lg:text-[20px] text-[16px] text-center flex justify-center font-semibold items-center ">
                            Read Casestudy
                            <arrow-right></arrow-right>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import arrowRight from '@/components/icons/arrow-right.vue';
import {projectStore} from "@/stores/projectStore.js";
const projectRef = projectStore();

</script>