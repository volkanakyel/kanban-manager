<template>
  <div class=" p-6 shadow-custom bg-background rounded-lg">
    <p class=" font-bold">{{ task.title }}</p>
    <p class=" text-text-primary mt-2">{{ getSubtasksNum }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Task, Subtask } from '@/types/task';
import { computed } from 'vue';

const props = defineProps<{
  task: Task,
}>()

const getSubtasksNum = computed((): string => {
  const numOfSubtasks = props.task.subtasks.length;
  const numOfSubtaskCompleted = props.task.subtasks.filter((subtask: Subtask) => subtask.isCompleted).length;
  return `${numOfSubtaskCompleted} of ${numOfSubtasks} subtasks`;
})
</script>

<style scoped></style>