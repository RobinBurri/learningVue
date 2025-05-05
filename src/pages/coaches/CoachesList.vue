<template>
  <section>Filters</section>
  <div>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul>
      <li v-for="coach in coaches" :key="coach.id">
        {{ coach.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
