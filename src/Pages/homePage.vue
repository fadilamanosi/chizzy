<template>
    <!-- Header section --->
    <section class="flex flex-col md:gap-20 gap-11 md:py-36 py-16 lg:px-[7em] md:px-8  px-4 relative animate w-full">
        <div class="hidden md:flex absolute h-full w-full  flex-col justify-center  top-[3em] right-0">
            <div class="flex justify-center">
                <div class="bg-header  w-[500px] h-[500px] rounded-full "> </div>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <h1 class="md:text-[58px] text-4xl leading-snug">
                I am a <b>Product designer (UI/UX)</b><br> passionate about <b>solving problems</b><br> and <b>delivering
                    awesomeness</b>.
            </h1>

            <p class="text-[18px]">
                Currently a Senior product designer at <b>BitBarter</b>, Previously worked at <b>EMF Studio</b> and
                <b>Imaginarium</b>.
            </p>
        </div>

        <div class="relative w-fit h-fit">
            <img class="md:w-[337px] w-[200px] top-0 right-0" src="../assets/images/Ellipse.png">
            <div class="text-[20px] text-center absolute flex flex-col  justify-center h-full top-0 w-full ">
                Contact Me
            </div>
        </div>
    </section>

    <section class="bg-[#FAFAFB] lg:px-[7em] md:px-8  px-4  py-11 animate grid gap-4">
        <h1 class="md:text-[32px] text-[28px] font-bold">Brands I’ve worked with</h1>

        <div class="flex flex-col gap-11">
            <div class="grid md:grid-cols-4 grid-cols-3 lg:gap-20 gap-8 items-center lg:w-[50%] w-full">
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/Layer3.png">
                </div>
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/g3.png">
                </div>
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/Vector.png">
                </div>
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/PLUGblack1.png">
                </div>

                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/ApprovedRealSearchIdentityDesign-031.png">
                </div>
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/Krptrix.png">
                </div>
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/Imaginarium1.png">
                </div>
                <div class="md:w-36 w-20 h-fit">
                    <img src="../assets/images/works/BoleFestival.png">
                </div>
            </div>
        </div>
    </section>


    <section class="lg:px-[7em] md:px-8 px-4 py-11">
        <h1 class="text-[32px] font-bold mb-8">Featured Works</h1>

        <div class="flex flex-col gap-36 ">
            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
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
                    <img class="rounded" src="../assets/images/featured/Frame26.png">
                </div>
            </div>


            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
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
                    <img class="rounded" src="../assets/images/featured/Frame427321090.png">
                </div>
            </div>


            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
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
                    <img class="rounded" src="../assets/images/featured/Frame427321140.png">
                </div>
            </div>
        </div>
    </section>
</template> 

<script setup>

import { onMounted } from "vue";
import arrowRight from "../components/icons/arrow-right.vue";

onMounted(() => {
    window.addEventListener('scroll', () => {
        var animate = document.querySelectorAll('.animate');
        for (var i = 0; i < animate.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = animate[i].getBoundingClientRect().top;
            var revealpoint = 150;
            if (revealtop < windowheight - revealpoint) {
                animate[i].classList.add('active');
            }
            else {
                animate[i].classList.remove('active');
            }
        }
    });

    var first = document.querySelectorAll('.animate');
    first[0].classList.add('active')
});
</script>

<style>
.bg-header {
    background: radial-gradient(104.11% 104.11% at -16.82% 19.21%, rgba(145, 238, 232, 0.28) 0%, rgba(204, 77, 225, 0.28) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    filter: blur(177px);
}

.animate {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 2s ease;
}

.animate.active {
    transform: translateY(0px);
    opacity: 1;
}
</style>