<template>
    <footer class="lg:px-[7em] md:px-8 px-4 bg-white py-11 grid gap-8 ">
        <div class="lg:text-[140px] md:text-5xl max[280]:text-2xl text-4xl ">
            <h1 class="text-black font-[500]">Need a Designer?</h1>
            <h1 class="text-end text-black font-[500]">Get in touch!</h1>
        </div>

        <div  class="flex flex-wrap justify-between ">
            <div class="flex flex-wrap  gap-8 text-black">
                <a class="hover:underline" href="https://www.linkedin.com/in/ejieh-chieze-086856204">LINKEDIN</a>
                <a class="hover:underline" href="https://dribbble.com/Ejieh_Chieze">DRIBBLE</a>
                <a class="hover:underline" href="https://medium.com/@ejiehchiezechizzy">MEDIUM</a>
                <a class="hover:underline" href="https://twitter.com/EjiehChieze" >TWITTER</a>
            </div>

            <a href="mailto:ejiehchieze@gmail.com" class="text-[20px] cursor-pointer underline text-black">ejiehchieze@gmail.com</a>
        </div>


        <a href="#up" class="fixed bottom-2 right-2 w-[50px] h-[50px] bg-black rounded-full flex flex-col justify-center">
            <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-caret-up-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
            </div>
        </a>
    </footer>
</template>

<script>
import { onMounted } from 'vue';


onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
</script>