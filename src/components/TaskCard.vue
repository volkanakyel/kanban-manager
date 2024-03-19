<template>
  <div class="p-6 shadow-custom bg-background rounded-lg cursor-grab task-card" :class="{ 'dragging-card': isDragging }"
    draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">
    <p class="font-bold">{{ task.title }}</p>
    <p class="text-text-primary mt-2">{{ getSubtasksNum }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Task, Subtask } from '@/types/task';

const props = defineProps<{
  task: Task;
}>();

const isDragging = ref(false);
const handleDragStart = () => {
  isDragging.value = true;
};

const handleDragEnd = () => {
  isDragging.value = false;
};

const getSubtasksNum = computed(() => {
  const numOfSubtasks = props.task.subtasks?.length || 0;
  const numOfSubtaskCompleted =
    props.task.subtasks?.filter((subtask: Subtask) => subtask.isCompleted)
      .length || 0;
  return `${numOfSubtaskCompleted} of ${numOfSubtasks} subtasks`;
});
</script>

<style scoped>
.task-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
}

.dragging-card {
  transform: scale(1.05);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  opacity: 0.7;
}
</style>
