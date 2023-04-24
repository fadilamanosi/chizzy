<template>
    <!-- Header section --->
    <section class="flex flex-col md:gap-20 gap-11 md:py-36 py-16 lg:px-[7em] md:px-8  px-4 relative w-full">
        <div class="flex absolute h-full w-full  flex-col justify-center  top-[3em] right-0">
            <div class="flex justify-center">
                <div class="bg-header  w-[500px] h-[500px] rounded-full "> </div>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <h1 class="md:text-[58px] text-4xl leading-snug text-black">
                I’m a  <b class="font-semibold"> Senior Product designer, </b> fostering <br> <b
                    class="font-semibold">growth for Web3 companies</b> through <br> intuitive and <b
                    class="font-semibold">user-friendly interfaces.
                </b>
            </h1>
        </div>

        <div class="relative w-fit h-fit">
            <img class="md:w-[337px] w-[200px] top-0 right-0" src="../assets/images/Ellipse.png">
            <div
                class="text-[20px] text-center absolute flex flex-col  justify-center h-full top-0 w-full text-black font-semibold">
                Contact Me
            </div>
        </div>
    </section>

    <section class="bg-[#FAFAFB] lg:px-[7em] md:px-8  px-4  py-20 animate grid gap-6">
        <h1 class=" text-[20px] font-medium text-black">Brands I’ve worked with</h1>

        <div class="flex flex-col gap-11">
            <div class=" flex lg:justify-start justify-start flex-wrap items-end xl:w-[70%] w-full h-fit gap-16">
                <img class="w-[20%]" src="../assets/images/works/Layer3.png">
                <img class="w-[18%]" src="../assets/images/works/g3.png">
                <img class="w-[15%]" src="../assets/images/works/Vector.png">
                <img class="w-[12%]" src="../assets/images/works/PLUGblack1.png">
                <img class="w-[22%]" src="../assets/images/works/ApprovedRealSearchIdentityDesign-031.png">
                <img class="w-[18%] pb-4" src="../assets/images/works/Krptrix.png">
                <img class="w-[15%]" src="../assets/images/works/Imaginarium1.png">
                <img class="w-[12%] " src="../assets/images/works/BoleFestival.png">
            </div>
        </div>
    </section>


    <section class="lg:px-[7em] md:px-8 px-4 py-11">
        <h1 class="text-[32px] mb-8  font-semibold text-black animate">Featured Works</h1>

        <div class="flex flex-col gap-36 ">
            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
                    <span class="text-[20px]">
                        <b class="font-semibold text-black">Web App and Landing Page for <u
                                class="font-semibold text-[#E59330]">BitBarter</u> </b><span class="text-black"> - A digital
                            wallet <br>
                            with a
                            payment processor and remittance
                            services.</span>
                    </span>

                    <a class=" text-[18px] flex items-center gap-2 font-medium text-black">
                        Visit Website
                        <arrow-right :height="12" :widthh="12"></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame26.png">
                </div>
            </div>


            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
                    <span class="text-[20px]">
                        <b class="font-semibold text-black">Mobile App for Krptrix </b>
                        <span class="text-black">
                            - A Decentralized Exchange Wallet that <br> allows users send, receive and trade
                            cryptocurrencies.
                        </span>
                    </span>

                    <a class=" text-[18px] flex items-center gap-2 font-medium  text-black">
                        Read Casestudy
                        <arrow-right :height="12" :widthh="12"></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame427321090.png">
                </div>
            </div>


            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
                    <span class="text-[20px] text-black">
                        <b>Stakify Web App </b><span class="text-black"> - A liquid staking solution that solves the problem
                            <br> of locked liquidity
                            by providing instant liquidity for staked assets.</span>
                    </span>

                    <a class=" text-[18px] flex items-center gap-2 font-medium  text-black">
                        Visit Website
                        <arrow-right :height="12" :widthh="12"></arrow-right>
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