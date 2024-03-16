<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';
import Kanban from '@/components/Kanban.vue';
import type { Board, Columns } from './types/task';

import { ref, onMounted, computed } from 'vue';
import { getBoards } from '@/services/getBoards';

const isSidebarOpen = ref(true);
const openSideBar = (): void => {
  isSidebarOpen.value = true;
}

const closeSideBar = (): void => {
  isSidebarOpen.value = false;
}

const boards = ref<Board[]>([])

onMounted(async () => {
  boards.value = await getBoards();
  console.log(boards.value);
})

const getFirstBoardColumns = computed<Columns[] | null>(() => {
  if (boards.value && boards.value.length > 0) {
    return boards.value[0].columns; // Return the first board
  } else {
    return null;
  }
});

const getBoardList = computed<string[]>(() => {
  return boards.value.map(board => board.name);
})
</script>

<template>
  <div class="flex flex-col h-screen w-full relative">
    <TopBar />
    <div class="flex flex-1 relative">
      <transition name="slide">
        <SideBar :boardsList="getBoardList" v-if="isSidebarOpen" key="sidebar" @closeSideBar="closeSideBar" />
      </transition>
      <div class="flex-1 transition-all duration-300" :class="{ 'ml-0': !isSidebarOpen, 'ml-[18rem]': isSidebarOpen }">
        <Kanban :taskSection="getFirstBoardColumns" />
      </div>
    </div>
    <button @click="openSideBar" class="bg-primary p-3 text-background absolute bottom-8 rounded-r-full"><img
        src="./assets/images/icons/show-sidebar.svg" class=" w-5 h-5 filter brightness-200" alt=""></button>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
