<template>
  <section>Filters</section>
  <div>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <p v-if="!coachStore.hasCoaches">No coaches found</p>
    <ul v-else>
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }} {{ coach.lastName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useCoachStore } from '@/stores/coach'
import { computed } from 'vue'

const coachStore = useCoachStore()

const filteredCoaches = computed(() => {
  return coachStore.coaches
})

coachStore.getCoaches()
</script>

<style scoped></style>
