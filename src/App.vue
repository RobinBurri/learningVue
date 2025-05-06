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
  --color-accent: #73d2de;
  --color-accent-light: #ffdbb5;
  --color-accent-dark: #e56b70;
  --color-white: #ffffff;
  --color-black: #000000;
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
