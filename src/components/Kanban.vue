<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <TaskSection v-for="(column, index) in taskSection" :key="index" :column="column" />

  </div>
</template>

<script setup lang="ts">
import TaskSection from '@/components/TaskSection.vue';
import { Columns } from '@/types/task';

defineProps<{
  taskSection: Columns[] | null,
}>()

</script>

<style scoped></style>