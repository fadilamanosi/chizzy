import { ref } from 'vue'
import { defineStore } from 'pinia'

export const appStore = defineStore('app', () => {
    const isLoaded = ref(false);

    return { isLoaded }
})
