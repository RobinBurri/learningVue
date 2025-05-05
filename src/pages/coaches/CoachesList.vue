<template>
  <section>Filters</section>
  <div>
    <h1>Coaches List</h1>
    <ul>
      <li v-for="coach in coaches" :key="coach.id">
        {{ coach.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
