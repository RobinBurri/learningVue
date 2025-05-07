<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" name="frontend" id="frontend" checked @change="setFilters" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" name="backend" id="backend" checked @change="setFilters" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" name="career" id="career" checked @change="setFilters" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const emit = defineEmits(['update-filters'])

type FilterKey = 'frontend' | 'backend' | 'career'

const filters = ref({
  frontend: true,
  backend: true,
  career: true,
})

const setFilters = (event: Event) => {
  const target = event.target as HTMLInputElement
  const filterId = target.id as FilterKey
  filters.value[filterId] = target.checked
  emit('update-filters', filters.value)
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
