<template>
    <div class="flex justify-between bg-inherit border-t pt-16 border-gray-200">
        <div class="grid cursor-pointer" @click="prevSlide()">
            <span class="text-[16px]">
                PREVIOUS
            </span>
            <span class="font-[500] md:w-full w-[60%]">
                Web App and Landing Page for BitBarter
            </span>
        </div>

        <div class="grid cursor-pointer" @click="nextSlide()">
            <span class="text-[16px]">
                NEXT
            </span>
            <div class="font-[500]">
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