<template>
  <div class="w-full h-full bg-grey-100 p-6 flex gap-2 overflow-x-auto">
    <TaskSection />
    <TaskSection />

  </div>
</template>

<script setup lang="ts">
import TaskSection from '@/components/TaskSection.vue';
</script>

<style scoped></style>