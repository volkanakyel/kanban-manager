<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <TaskSection v-for="column in getColumnBoard" :key="column.id" :column="column" @task-moved="handleTaskMoved" />
  </div>
</template>

<script setup lang="ts">
import TaskSection from '@/components/TaskSection.vue';
import { Board, Columns } from '@/types/task';
import { computed } from 'vue';

const props = defineProps<{
  activeBoard: Board | null | undefined;
}>();

const getColumnBoard = computed<Columns[] | null>(() => {
  if (props.activeBoard) {
    return props.activeBoard.columns;
  } else {
    return null;
  }
});

const handleTaskMoved = ({ newColumnId, movedTaskId, }: { newColumnId: number; movedTaskId: number; }): void => {
  const oldColumn = getColumnBoard.value?.find(column =>
    column.tasks.some(task => task.id === movedTaskId)
  );
  const newColumn = getColumnBoard.value?.find(
    column => column.id === newColumnId
  );

  if (oldColumn && newColumn) {
    const movedTask = oldColumn.tasks.find(task => task.id === movedTaskId);
    if (movedTask) {
      const taskIndex = oldColumn.tasks.findIndex(
        task => task.id === movedTaskId
      );
      oldColumn.tasks.splice(taskIndex, 1);
      movedTask.status = newColumn.name;
      newColumn.tasks.push(movedTask);
    }
  }
};
</script>

<style scoped></style>
