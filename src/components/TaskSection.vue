<template>
  <div class="w-80 bg-gray-100 p-4 rounded">

    <div class="flex items-center mb-4">
      <span class="h-3 w-3 bg-info rounded-full mr-4"></span>
      <h3 class="font-bold text-s">{{ column?.name }}</h3>
    </div>
    <div class="space-y-4">
      <TaskCard v-for="(task, index) in column?.tasks" :key="index" :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue';
import type { Columns } from '@/types/task';
defineProps<{
  column: Columns | null,
}>()
</script>

<style scoped></style>