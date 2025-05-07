<template>
  <span class="badge" :class="classes">{{ textUpperCase }}</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const { text, type } = defineProps<{
  text: string
  type: string
}>()

const textUpperCase = computed(() => text.toUpperCase())

const classes = computed(() => {
  return {
    frontend: type === 'frontend',
    backend: type === 'backend',
    career: type === 'career',
  }
})
</script>

<style scoped>
.badge {
  color: var(--color-black);
  border-radius: 30px;
  padding: 0.3rem 1.2rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.frontend {
  background-color: var(--color-accent);
  color: var(--color-black);
}

.backend {
  background-color: var(--color-accent-light);
  color: var(--color-black);
}

.career {
  background-color: var(--color-accent-dark);
  color: var(--color-black);
}
</style>
