<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <TaskSection v-for="(column, index) in getColumnBoard" :key="index" :column="column" />
  </div>
</template>

<script setup lang="ts">
import TaskSection from '@/components/TaskSection.vue';
import { Board } from '@/types/task';
import { computed } from 'vue';

const props = defineProps<{
  activeBoard: Board | null | undefined,
}>()

const getColumnBoard = computed(() => {
  if (props.activeBoard) {
    console.log(props.activeBoard);
    return props.activeBoard.columns;
  }
})

</script>

<style scoped></style>