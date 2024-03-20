<template>
  <div class="w-80 bg-gray-100 p-4 rounded transition-colors duration-200 h-full">
    <div class="flex items-center mb-4">
      <span class="h-3 w-3 bg-info rounded-full mr-4"></span>
      <h3 class="font-bold text-s">{{ column?.name }}</h3>
    </div>
    <draggable class="space-y-4 h-full" :data-column-id="column?.id" v-model="tasks" itemKey="id" group="tasks"
      @end="handleDragEnd">
      <template #item="{ element }">
        <div :key="element.id" :data-task-id="element.id">
          <TaskCard :task="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue';
import draggable from 'vuedraggable';
import { ref, watch } from 'vue';
import type { Columns, Task } from '@/types/task';

const props = defineProps<{ column: Columns | null }>();
const tasks = ref<Task[]>([]);
const isDraggingWithin = ref(false);

watch(
  () => props.column?.tasks,
  newTasks => {
    tasks.value = newTasks || [];
  },
  { immediate: true }
);

const emit = defineEmits(['task-moved']);

const handleDragEnd = (event: any) => {

  isDraggingWithin.value = false;
  if (event) {
    const newColumnId = parseInt(event.to.getAttribute('data-column-id'));
    const movedTaskId = parseInt(event.item.getAttribute('data-task-id'));
    const newTasks = tasks.value.map(task => ({ ...task }));
    emit('task-moved', {
      newColumnId: newColumnId,
      movedTaskId: movedTaskId,
      newTasks: newTasks
    });
  }
};
</script>
