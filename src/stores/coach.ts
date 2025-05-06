import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { dummyCoaches } from '../data/dummy-data'
import type { Coach } from '@/data/types'

export const useCoachStore = defineStore('coach', () => {
  const coaches = ref<Coach[]>([])

  function getCoaches() {
    return (coaches.value = dummyCoaches)
  }

  const hasCoaches = computed(() => {
    return coaches.value && coaches.value.length > 0
  })
  return { getCoaches, coaches, hasCoaches }
})
