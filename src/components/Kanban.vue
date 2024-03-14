<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <div class="w-80 bg-gray-100 p-4 rounded">

      <div class="flex items-center mb-4">
        <span class="h-3 w-3 bg-info rounded-full mr-4"></span>
        <h3 class="font-bold text-s">TODO (4)</h3>
      </div>
      <div class="space-y-4">
        <TaskCard />
      </div>
    </div>
    <div class="w-80 bg-gray-100 p-4 rounded">
      <div class="flex items-center mb-4">
        <span class="h-3 w-3 bg-success rounded-full mr-4"></span>
        <h3 class="font-bold text-s">DOING (4)</h3>
      </div>
      <div class="space-y-4">
        <TaskCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue';
</script>

<style scoped></style>