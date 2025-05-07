<template>
  <coach-filter @update-filters="setFilter" />
  <BaseCard>
    <div>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton mode="flat" to="/register" link>Register as Coach</BaseButton>
      </div>
      <p v-if="!coachStore.hasCoaches">No coaches found</p>
      <ul v-else>
        <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach">
          {{ coach.firstName }} {{ coach.lastName }}
        </CoachItem>
      </ul>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
import { useCoachStore } from '@/stores/coach'
import { computed, ref } from 'vue'
import CoachItem from '@/components/coaches/CoachItem.vue'
import CoachFilter from '@/components/coaches/CoachFilter.vue'
import BaseCard from '@/components/UI/BaseCard.vue'

const coachStore = useCoachStore()

type ActiveFilter = {
  frontend: boolean
  backend: boolean
  career: boolean
}

const activeFilters = ref<ActiveFilter>({
  frontend: true,
  backend: true,
  career: true,
})

const filteredCoaches = computed(() => {
  const coaches = coachStore.coaches
  return coaches.filter((coach) => {
    if (activeFilters.value.frontend && coach.areas.includes('frontend')) {
      return true
    }
    if (activeFilters.value.backend && coach.areas.includes('backend')) {
      return true
    }
    if (activeFilters.value.career && coach.areas.includes('career')) {
      return true
    }
    return false
  })
})
console.log(filteredCoaches.value)

coachStore.getCoaches()

const setFilter = (filters: ActiveFilter) => {
  activeFilters.value = filters
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
