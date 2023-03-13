<template>
    <!-- Header section --->
    <section class="flex flex-col gap-20 py-36 px-[7em] relative ">
        <div class="absolute h-full w-full flex flex-col justify-center  top-[3em] right-0">
            <div class="flex justify-center">
                <div class="bg-header  w-[500px] h-[500px] rounded-full "> </div>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <h1 class="text-[58px]">
                I am a <b>Product designer (UI/UX)</b><br> passionate about <b>solving problems</b><br> and <b>delivering
                    awesomeness</b>.
            </h1>

            <p class="text-[18px]">
                Currently a Senior product designer at <b>BitBarter</b>, Previously worked at <b>EMF Studio</b> and
                <b>Imaginarium</b>.
            </p>
        </div>

        <div class="relative min-w-fit">
            <img class="w-[337px] top-0 right-0" src="../assets/images/Ellipse.png">
            <div class="text-[20px] text-center absolute flex flex-col  justify-center h-full top-0 w-[337px]">
                Contact Me
            </div>
        </div>
    </section>

    <section class="bg-[#FAFAFB] px-[7em] py-11">
        <h1 class="text-[32px] font-bold">Brands I’ve worked with</h1>

        <div class="flex flex-col gap-11">
            <div class="flex gap-36 items-center ">
                <img class="w-36 h-fit" src="../assets/images/works/Layer 3.png">
                <img class="w-36 h-fit" src="../assets/images/works/g3.png">
                <img class="w-36 h-fit" src="../assets/images/works/Vector.png">
                <img class="w-36 h-fit" src="../assets/images/works/PLUGblack 1.png">
            </div>
            <div class="flex gap-32 items-center">
                <img class="w-36 h-fit" src="../assets/images/works/Approved RealSearch Identity Design-03 1.png">
                <img class="w-36 h-fit" src="../assets/images/works/Krptrix.png">
                <img class="w-36 h-fit" src="../assets/images/works/Imaginarium 1.png">
                <img class="w-36 h-fit" src="../assets/images/works/BoleFestival.png">
            </div>
        </div>
    </section>


    <section class="px-[7em] py-11">
        <h1 class="text-[32px] font-bold mb-8">Featured Works</h1>

        <div class="flex flex-col gap-36">
            <div>
                <div class="flex justify-between mb-8">
                    <span class="text-[20px]">
                        <b>Web App and Landing Page for <u class="font-bold text-[#E59330]">BitBarter</u> </b>- A digital
                        wallet <br>
                        with a
                        payment processor and remittance
                        services.
                    </span>

                    <a class=" text-[18px] flex items-center gap-2 font-medium">
                        Visit Website
                        <arrow-right :heigt="10" :width="10"></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame 26.png">
                </div>
            </div>


            <div>
                <div class="flex justify-between mb-8">
                    <span class="text-[20px]">
                        <b>Web App and Landing Page for <u class="font-bold text-[#E59330]">BitBarter</u> </b>- A digital
                        wallet <br>
                        with a
                        payment processor and remittance
                        services.
                    </span>

                    <a class=" text-[18px] flex items-center gap-2 font-medium">
                        Visit Website
                        <arrow-right :heigt="10" :width="10"></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame 427321090.png">
                </div>
            </div>


            <div>
                <div class="flex justify-between mb-8">
                    <span class="text-[20px]">
                        <b>Stakify Web App </b>-A liquid staking solution that solves the problem <br> of locked liquidity
                        by providing instant liquidity for staked assets.
                    </span>

                    <a class=" text-[18px] flex items-center gap-2 font-medium">
                        Visit Website
                        <arrow-right :heigt="10" :width="10"></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame 427321140.png">
                </div>
            </div>


        </div>



    </section>
</template> 

<script setup>

import arrowRight from "../components/icons/arrow-right.vue";

</script>

<style>
.bg-header {
    background: radial-gradient(104.11% 104.11% at -16.82% 19.21%, rgba(145, 238, 232, 0.28) 0%, rgba(204, 77, 225, 0.28) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    filter: blur(177px);
}
</style>