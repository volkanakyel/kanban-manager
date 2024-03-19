<template>
  <div class="w-full flex border-b border-light relative">
    <div
      class="px-16 gap-4 flex items-center justify-center border-light border-r"
    >
      <img src="/logo.svg" alt="Kanban logo" />
      <h1 class="text-l font-bold">Kanban</h1>
    </div>
    <div class="w-full flex items-center justify-between gap-4 p-8">
      <h2 class="text-m ml-4 font-semibold">{{ activeBoardName }}</h2>
      <div class="flex items-center">
        <button
          class="bg-primary text-background font-semibold py-2 px-5 rounded-full mr-4"
        >
          + Add New Task
        </button>
        <img
          @click="toggleEditMode"
          class="h-6 w-6 cursor-pointer"
          src="../assets/images/icons/more-icon.svg"
          alt="More options"
        />
      </div>
      <ul
        v-show="openEditMode"
        ref="editModeRef"
        class="w-48 absolute -bottom-20 right-8 z-30 bg-background p-4 rounded-xl"
      >
        <li class="text-text-primary mb-4">Edit Board</li>
        <li class="text-warning">Delete Board</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const openEditMode = ref(false);
const toggleEditMode = () => {
  openEditMode.value = true;
};

const editModeRef = ref(null);
onClickOutside(editModeRef.value, () => (openEditMode.value = false));

defineProps<{
  activeBoardName: string | undefined;
}>();
</script>

<style scoped></style>
