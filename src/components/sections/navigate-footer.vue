<template>
    <div class="flex justify-between bg-inherit pt-16 ">
        <div class="grid cursor-pointer" @click="prevSlide()">
            <span class="text-[16px] text-[#747474]">
                PREVIOUS
            </span>
            <span class="font-[500] md:w-full w-[60%] text-[22px]">
                Web App and Landing Page for BitBarter
            </span>
        </div>

        <div class="grid cursor-pointer" @click="nextSlide()">
            <span class="text-[16px] text-[#747474]">
                NEXT
            </span>
            <div class="font-[500] text-[22px]" >
                Stakify Web App
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';

const emits = defineEmits(['next', 'prev']);
const props = defineProps(['slide'])
const next = ref(0);

function nextSlide() {
    if (next.value < 3) {
        emits('next', ++next.value);
    }
}

function prevSlide() {
    if (next.value > 0) {
        emits('prev', --next.value);
    }
}

onBeforeMount(() => {
    next.value = props.slide;
})

</script>