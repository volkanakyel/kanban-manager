<template>
  <div class=" p-6 shadow-custom bg-background rounded-lg">
    <p>{{ task.title }}</p>
    <p>0 of 3 substasks</p>
  </div>
</template>

<script setup lang="ts">
import { Task } from '@/types/task';

defineProps<{
  task: Task,
}>()
</script>

<style scoped></style>