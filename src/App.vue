<script setup lang="ts">

const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
}

</script>

<template>
  <div class="bg-background text-text-primary">Hello
    <button @click="toggleDarkMode" class=" mt-8 p-8">Dark mode</button>
  </div>

</template>

<style scoped></style>
