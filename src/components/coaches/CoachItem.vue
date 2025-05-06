<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ props.coach.hourlyRate }} / hour</h4>
    <div>
      <BaseBadge
        v-for="area in props.coach.areas"
        :key="area"
        :text="area"
        :type="area"
      ></BaseBadge>
    </div>
    <div class="actions">
      <BaseButton :to="coachContactLink" mode="flat">Contact</BaseButton>
      <BaseButton :to="coachDetailsLink" mode="outline">View Details</BaseButton>
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
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}
</style>
