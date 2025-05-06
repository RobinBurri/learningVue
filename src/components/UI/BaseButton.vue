<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
const {
  link,
  to = '/',
  mode = '',
} = defineProps<{
  link?: boolean
  to?: string
  mode?: 'flat' | 'outline' | ''
}>()
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  border: 1px solid var(--color-primary-dark);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.flat {
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
}

.outline {
  border-color: var(--color-primary-dark);
  background-color: var(--color-white);

  color: var(--color-primary);
}

.flat:hover,
.flat:active {
  background-color: var(--color-primary-light);
}

.outline:hover,
.outline:active {
  background-color: var(--color-primary);
  color: var(--color-white);
}
</style>
