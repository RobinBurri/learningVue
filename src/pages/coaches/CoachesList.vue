<template>
  <section>Filters</section>
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
import { computed } from 'vue'
import CoachItem from '@/components/coaches/CoachItem.vue'
import BaseCard from '@/components/UI/BaseCard.vue'

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
