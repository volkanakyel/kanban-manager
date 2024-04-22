<template>
  <div class="w-80 bg-gray-100 p-4 rounded transition-colors duration-200 h-full">
    <div class="flex items-center mb-4">
      <span class="h-3 w-3 bg-info rounded-full mr-4"></span>
      <h3 class="font-bold text-s">{{ column?.name }}</h3>
    </div>
    <draggable class="space-y-4 h-full" :list="tasks" item-key="id" :group="{ name: 'tasks', pull: true, put: true }"
      @change="handleDragChange">
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

watch(
  () => props.column?.tasks,
  newTasks => {
    tasks.value = newTasks || [];
  },
  { immediate: true }
);

const emit = defineEmits(['taskMoved']);

const handleDragChange = (event: any) => {
  if (event.added || event.removed) {
    const task = event.added ? event.added.element : event.removed.element;
    const columnIndex = event.added ? event.added.newIndex : event.removed.oldIndex;
    if (task && columnIndex !== undefined) {
      emit('taskMoved', {
        newColumnId: props.column?.id,
        task: task,
        newIndex: columnIndex
      });
    } else {
      console.error('Draggable event data is incomplete:', event);
    }
  }
}
</script>
