<template>
  <section>Filters</section>
  <div>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <p v-if="!coachStore.hasCoaches">No coaches found</p>
    <ul v-else>
      <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach">
        {{ coach.firstName }} {{ coach.lastName }}
      </CoachItem>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useCoachStore } from '@/stores/coach'
import { computed } from 'vue'
import CoachItem from '@/components/coaches/CoachItem.vue'

const coachStore = useCoachStore()

const filteredCoaches = computed(() => {
  return coachStore.coaches
})

coachStore.getCoaches()
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
