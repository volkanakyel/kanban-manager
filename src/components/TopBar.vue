<template>
  <div class="w-full flex border-b border-light">
    <div class=" px-16 gap-4 flex items-center justify-center border-light border-r">
      <img src="/logo.svg" alt="Kanban logo">
      <h1 class="text-l font-bold">Kanban</h1>
    </div>
    <div class="w-full flex items-center justify-between gap-4 p-8">
      <h2 class="text-m ml-4 font-semibold">Platform Launch</h2>
      <div class="flex items-center">
        <button class="bg-primary text-background font-semibold py-2 px-5 rounded-full mr-4">
          + Add New Task
        </button>
        <img class="h-6 w-6" src="../assets/images/icons/more-icon.svg" alt="More options">
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped></style>