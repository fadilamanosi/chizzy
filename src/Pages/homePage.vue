<template>
    <!-- Header section --->
    <section class="flex flex-col md:gap-20 gap-11 md:py-36 py-16 lg:px-[7em] md:px-8  px-4 relative w-full">
        <div class="flex absolute h-full w-full  flex-col justify-center  top-[3em] right-0">
            <div class="flex justify-center">
                <div class="bg-header  w-[500px] h-[500px] rounded-full "> </div>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <h1 class="md:text-[58px] text-[32px] leading-snug text-black">
                I’m a <b class="font-semibold"> Senior Product designer, </b> fostering <br> <b class="font-semibold">growth
                    for Web3 companies</b> through <br> intuitive and <b class="font-semibold">user-friendly interfaces.
                </b>
            </h1>
        </div>

        <a href="mailto:ejiehchieze@gmail.com"
            class="cursor-pointer text-black relative lg:w-[337px] lg:h-[99px] w-[237px] h-[79px] border-[2px] rounded-[50%] border-black hover:border-[#6204AC] hover:text-[#6204AC]">
            <div
                class="lg:text-[20px] text-[16px] text-center  flex flex-col  justify-center h-full top-0 w-full  font-semibold ">
                Contact Me
            </div>
        </a>
    </section>

    <section class="bg-[#FAFAFB] lg:px-[7em] md:px-8  px-4  py-20 animate grid gap-6">
        <h1 class=" lg:text-[20px] text-[16px] font-medium text-black">Brands I’ve worked with</h1>

        <div class="flex flex-col gap-11">
            <div class=" flex lg:justify-start justify-start flex-wrap items-end xl:w-[70%] w-full h-fit lg:gap-16 gap-8">
                <img class="md:w-[20%] w-[40%]" src="../assets/images/works/Layer3.png">
                <img class="md:w-[18%] w-[40%]" src="../assets/images/works/g3.png">
                <img class="md:w-[15%] w-[40%]" src="../assets/images/works/Vector.png">
                <img class="md:w-[12%] w-[30%]" src="../assets/images/works/PLUGblack1.png">
                <img class="md:w-[22%] w-[40%]" src="../assets/images/works/ApprovedRealSearchIdentityDesign-031.png">
                <img class="md:w-[18%] pb-4 w-[40%]" src="../assets/images/works/Krptrix.png">
                <img class="md:w-[15%] w-[30%]" src="../assets/images/works/Imaginarium1.png">
                <img class="md:w-[12%] w-[30%] " src="../assets/images/works/BoleFestival.png">
            </div>
        </div>
    </section>


    <section class="lg:px-[7em] md:px-8 px-4 py-11">
        <h1 class="lg:text-[32px] text-[24px] mb-8  font-semibold text-black animate">Featured Works</h1>
        <div class="flex flex-col gap-36 ">
            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
                    <span class="text-[20px]  lg:w-[40%] ">
                        <a href="https://bitbarter.io">
                            <b class="font-semibold text-black">Web App and Landing Page for <u
                                    class="font-semibold text-[#E59330]">BitBarter</u> </b>
                        </a>
                        <span class="text-black"> - A digital
                            wallet
                            with a
                            payment processor and remittance
                            services.</span>
                    </span>

                    <a href="https://bitbarter.io"
                        class="hover:text-[#6204AC] text-[18px] flex items-center gap-2 font-medium text-black">
                        Visit Website
                        <arrow-right></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame26.png">
                </div>
            </div>


            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
                    <span class=" lg:w-[40%]  text-[20px] ">
                        <b class="font-semibold text-black">Mobile App for Krptrix </b>
                        <span class="text-black">
                            - A Decentralized Exchange Wallet that <br> allows users send, receive and trade
                            cryptocurrencies.
                        </span>
                    </span>

                    <a href="/project?page=2"
                        class=" text-[18px] flex items-center gap-2 font-medium  text-black hover:text-[#6204AC] cursor-pointer">
                        Read Casestudy
                        <arrow-right></arrow-right>
                    </a>
                </div>

                <div>
                    <img class="rounded" src="../assets/images/featured/Frame427321090.png">
                </div>
            </div>


            <div class="animate">
                <div class="flex flex-wrap gap-8 justify-between mb-8">
                    <span class=" lg:w-[40%]  text-[20px]  text-black">
                        <b>Stakify Web App </b><span class="text-black"> - A liquid staking solution that solves the problem
                            <br> of locked liquidity
                            by providing instant liquidity for staked assets.</span>
                    </span>

                    <a href="/project?page=3"
                        class=" text-[18px] flex items-center gap-2 font-medium  text-black hover:text-[#6204AC] cursor-pointer">
                        Read Casestudy
                        <arrow-right></arrow-right>
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

<style>
.bg-header {
    background: radial-gradient(104.11% 104.11% at -16.82% 19.21%, rgba(145, 238, 232, 0.28) 0%, rgba(204, 77, 225, 0.28) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    filter: blur(177px);
}
</style>