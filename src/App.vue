<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --color-primary: #008e4f;
  --color-primary-light: #00b36d;
  --color-primary-dark: #006a3d;
  --color-accent: #ff2058;
  --color-accent-light: #ff4c7f;
  --color-accent-dark: #c7003a;
  --color-white: #ffffff;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
