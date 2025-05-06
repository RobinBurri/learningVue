<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ props.coach.hourlyRate }} / hour</h4>
    <div>
      <span v-for="area in props.coach.areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import type { Coach } from '@/data/types'
import { computed } from 'vue'

const route = useRoute()

const props = defineProps<{
  coach: Coach
}>()

const fullName = computed(() => {
  return `${props.coach.firstName} ${props.coach.lastName}`
})

const coachContactLink = computed(() => {
  return `${route.path}/${props.coach.id}/contact`
})
const coachDetailsLink = computed(() => {
  return `${route.path}/${props.coach.id}`
})
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid var(--color-primary-dark);
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
