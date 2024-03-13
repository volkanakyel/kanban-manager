<template>
  <div class="w-full flex border-b border-primary">
    <div class=" flex items-center justify-center border-primary border-r p-8">
      <img src="/logo.svg" alt="Kanban logo">
      <h1 class="  text-l font-bold">Kanban</h1>
    </div>
    <div class="w-full flex items-center justify-between gap-4 p-8">
      <h2 class="text-lg font-bold">Platform Launch</h2>
      <div class="flex items-center">
        <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full mr-4">
          + Add New Task
        </button>
        <!-- Replace "../assets/images/icons/more-icon.svg" with the actual path to your more options icon -->
        <img class="h-6 w-6" src="../assets/images/icons/more-icon.svg" alt="More options">
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped></style>