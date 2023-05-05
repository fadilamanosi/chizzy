import {  onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from "vue3-cookies";

export const projectStore = defineStore('project', () => {
  const next = ref(0);
  const projectPage = ref(0);
  const { cookies } = useCookies();

  function slide(e) {
    projectPage.value = e
    cookies.set('cpp', projectPage.value)
  }



  function reset() {
    projectPage.value = 0
    cookies.set('cpp', projectPage.value)
  }


  function nextSlide() {
    if (projectPage.value < 3) {
      projectPage.value++
      cookies.set('cpp', projectPage.value)
    }
  }

  function prevSlide() {
    if (projectPage.value > 0) {
      projectPage.value--
      cookies.set('cpp', projectPage.value)
    }
  }


  onMounted(() => {
    if (cookies.isKey('cpp')) {
      projectPage.value = cookies.get('cpp')
    }
  })

  return { next, nextSlide, prevSlide, projectPage, slide, reset }
})
