<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <div class="w-80 bg-gray-100 p-4 rounded">
      <h3 class="font-bold text-lg mb-4">TODO (4)</h3>
      <div class="space-y-4">
        <TaskCard />
      </div>
    </div>
    <div class="w-80 bg-gray-100 p-4 rounded">
      <h3 class="font-bold text-lg mb-4">TODO (4)</h3>
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