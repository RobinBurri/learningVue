import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { dummyCoaches } from '../data/dummy-data'
import type { Coach } from '@/data/types'

export const useCoachStore = defineStore('coach', () => {
  const coaches = ref<Coach[]>([])

  function getCoaches() {
    return (coaches.value = dummyCoaches)
  }

  function getCoachesById(id: string) {
    return coaches.value.find((coach) => coach.id === id)
  }

  function addCoach(coach: Coach) {
    const newCoach = {
      id: Math.random().toString(),
      firstName: coach.firstName,
      lastName: coach.lastName,
      areas: coach.areas,
      description: coach.description,
      hourlyRate: coach.hourlyRate,
    }
    coaches.value.push(newCoach)
  }

  const hasCoaches = computed(() => {
    return coaches.value && coaches.value.length > 0
  })

  return { getCoaches, coaches, hasCoaches, getCoachesById, addCoach }
})
