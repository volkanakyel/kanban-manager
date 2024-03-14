<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <KanbanBoard />
    <KanbanBoard />

  </div>
</template>

<script setup lang="ts">
import KanbanBoard from '@/components/KanbanBoard.vue';
</script>

<style scoped></style>