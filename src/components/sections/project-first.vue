<template>
    <div class="grid gap-28">
        <div class="grid lg:grid-cols-2 gap-16 ">
            <div class=" grid gap-7">
                <img src="../../assets/images/project/BitBarter.png">
                <div class="lg:w-[80%] grid gap-4">
                    <span class="text-[12px] font-[500] capitalize text-[#747474]">
                        DESIGN SYSTEM . UI DESIGN . VISUAL DESIGN
                    </span>
                    <h1 class="text-[20px] font-[600]">
                        Web App and Landing page design for BitBarter
                    </h1>
                    <p class="text-[16px] font-[500] text-[#747474]">
                        DESIGN SYSTEM . UI DESIGN . VISUAL DESIGN
                        Web App and Landing page design for BitBarter
                        A digital wallet with a payment processor and remittance services.
                        Visit Website
                    </p>


                    <div class="relative w-fit h-fit cursor-pointer">
                        <img class="md:w-[337px] w-[200px] top-0 right-0" src="../../assets/images/Ellipse.png">
                        <div
                            class="font-[600] md:text-[20px] text-[16px] text-center absolute flex flex-col  justify-center h-full top-0 w-full ">
                            <div class="flex justify-center items-center gap-2">
                                Visit Website
                                <arrow-right></arrow-right>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="   grid gap-7">
                <div class="bg-[#F6F7F9] h-fit rounded-md flex justify-center">
                    <img class="lg:w-[40em]" src="../../assets/images/project/phonemockup.png">
                </div>
                <div class="w-[80%] grid gap-4">
                    <span class="text-[12px] font-[500] capitalize text-[#747474]">
                        INFORMATION ARCHITECTURE . UI DESIGN
                    </span>
                    <h1 class="text-[20px] font-[600]">
                        Krptrix Mobile App
                    </h1>
                    <p class="text-[16px] font-[500] text-[#747474]">
                        A digital wallet with a payment processor and remittance services.
                    </p>


                    <div @click="$emit('next', 1)" class="relative w-fit h-fit cursor-pointer">
                        <img class="md:w-[337px] w-[200px] top-0 right-0" src="../../assets/images/Ellipse.png">
                        <div
                            class="font-[600] md:text-[20px] text-[16px] text-center absolute flex flex-col  justify-center h-full top-0 w-full ">
                            <div class="flex justify-center items-center gap-2">
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
            <div class="w-[80%] grid gap-4">
                <span class="text-[12px] font-[500] capitalize text-[#747474]">
                    USER RESEARCH . WIREFRAMING . UI/UX
                </span>
                <h1 class="text-[20px] font-[600]">
                    Stakify Web App
                </h1>
                <p class="text-[16px] font-[500] text-[#747474]">
                    A liquid staking solution that solves the problem of locked liquidity by providing instant liquidity for
                    staked assets.
                </p>


                <div @click="$emit('next', 2)" class="relative w-fit h-fit cursor-pointer">
                    <img class="md:w-[337px] w-[200px] top-0 right-0" src="../../assets/images/Ellipse.png">
                    <div
                        class="font-[600] md:text-[20px] text-[16px] text-center absolute flex flex-col  justify-center h-full top-0 w-full ">
                        <div class="flex justify-center items-center gap-2">
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
</script>