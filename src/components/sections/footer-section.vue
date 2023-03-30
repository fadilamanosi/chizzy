<template>
    <footer class="lg:px-[7em] md:px-8 px-4 bg-white py-11 grid gap-8">
        <div class="lg:text-[140px] md:text-5xl max[280]:text-2xl text-4xl">
            <h1 class="">Need a Designer?</h1>
            <h1 class="text-end">Get in touch!</h1>
        </div>

        <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap  gap-8">
                <u>LINKEDIN</u>
                <u>DRIBBLE</u>
                <u>BEHANCE</u>
                <u>TWITTER</u>
            </div>

            <a href="mailto:ejiehchieze@gmail.com" class="text-[20px] cursor-pointer underline">ejiehchieze@gmail.com</a>
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