<template>
  <div class="fixed w-72 top-0 left-0 h-full bg-background z-10 border border-light">
    <div class="flex h-full flex-col justify-between py-8">
      <div class="">
        <div class="flex mb-10 gap-4 px-8">
          <img src="/logo.svg" alt="Kanban logo">
          <h1 class="text-l font-bold">Kanban</h1>
        </div>

        <nav class="text-text-primary pr-6">
          <p class="mb-6 uppercase text-text-primary pl-8">All Boards (3)</p>
          <div v-for="(board, index) in boardsList" :key="index"
            class="py-3 cursor-pointer flex items-center gap-4 pl-8 hover:text-background hover:bg-primary hover:rounded-r-full">
            <img src="../assets/images/icons/board.svg" alt="">
            <p>{{ board }}</p>
          </div>
          <div class="py-3 cursor-pointer flex justify-start items-center gap-4 pl-8">
            <img src="../assets/images/icons/board.svg" alt="">
            <p>+Create New Board</p>
          </div>
        </nav>
      </div>

      <div class="px-6">
        <div class="mt-8 bg-grey-100 rounded-md flex justify-center gap-6 items-center p-4">
          <img src="../assets/images/icons/light-mode.svg" alt="">
          <label for="toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="toggle" class="sr-only peer">
            <div
              class="w-14 h-7 bg-primary rounded-full peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:border-secondary after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-full">
            </div>
          </label>
          <img src="../assets/images/icons/dark-mode.svg" alt="">
        </div>
        <div @click="closeSideBar" class=" flex items-center mt-6 cursor-pointer">
          <img src="../assets/images/icons/hide-sidebar.svg" class="mr-4" alt="">
          <p class=" text-text-primary">Hide Sidebar</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'closeSideBar'): void
}>()

interface Props {
  isSidebarOpen?: boolean;
  boardsList: string[];
}
withDefaults(defineProps<Props>(), {
  isSidebarOpen: true,
})
const closeSideBar = (): void => {
  emit('closeSideBar');
}
</script>

<style scoped></style>