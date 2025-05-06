<template>
  <p v-if="noCoachFound">No coach found!</p>
  <base-card v-else>
    <section>
      <div class="section">
        <h2>{{ fullName }}</h2>
        <h3 v-if="coach">{{ formatCurrency(coach.hourlyRate, 'USD') }}</h3>
      </div>
    </section>
    <section>
      <header class="section">
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="coachContactLink" mode="flat">Contact</base-button>
      </header>
      <router-view></router-view>
    </section>
    <section class="badges">
      <BaseBadge v-for="area in coach?.areas" :key="area" :text="area" :type="area"></BaseBadge>
      <p>{{ coach?.description }}</p>
    </section>
  </base-card>
</template>

<script lang="ts" setup>
import type { Coach } from '@/data/types'
import { useCoachStore } from '@/stores/coach'
import { formatCurrency } from '@/utils/utils'
import { computed, onMounted, ref } from 'vue'

const coachStore = useCoachStore()
const { coachId } = defineProps<{
  coachId: string
}>()
coachStore.getCoaches()
const coach = ref<Coach | undefined>(undefined)
const noCoachFound = ref(false)

onMounted(() => {
  coach.value = coachStore.getCoachesById(coachId)
  if (!coach.value) {
    noCoachFound.value = true
  }
})

const fullName = computed(() => {
  if (coach.value) {
    return `${coach.value.firstName} ${coach.value.lastName}`
  } else {
    return ''
  }
})
const coachContactLink = computed(() => {
  return `coaches/${coachId}/contact`
})
</script>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
}
</style>
