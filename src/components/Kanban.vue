<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <TaskSection v-for="column in getColumnBoard" :key="column.id" :column="column" @taskMoved="handleTaskMovedTe" />
  </div>
</template>

<script setup lang="ts">
import TaskSection from '@/components/TaskSection.vue';
import { Board, Columns } from '@/types/task';
import { computed } from 'vue';

const props = defineProps<{
  activeBoard: Board | null | undefined;
}>();

const emit = defineEmits(['updateBoard'])

const getColumnBoard = computed<Columns[] | null>(() => {
  if (props.activeBoard) {
    return props.activeBoard.columns;
  } else {
    return null;
  }
});

const handleTaskMovedTe = ({ newColumnId, movedTaskId }: { newColumnId: number; movedTaskId: number }): void => {
  if (props.activeBoard && getColumnBoard.value) {
    const updatedBoard: Board = JSON.parse(JSON.stringify(props.activeBoard));
    const oldColumn = updatedBoard.columns.find(column =>
      column.tasks.some(task => task.id === movedTaskId)
    );
    const newColumn = updatedBoard.columns.find(column => column.id === newColumnId);
    if (oldColumn && newColumn) {
      const movedTaskIndex = oldColumn.tasks.findIndex(task => task.id === movedTaskId);
      const [movedTask] = oldColumn.tasks.splice(movedTaskIndex, 1);
      movedTask.status = newColumn.name;
      newColumn.tasks.push(movedTask);
      emit('updateBoard', updatedBoard);
    }
  }
};

</script>

<style scoped></style>
