<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';
import Kanban from '@/components/Kanban.vue';
import type { Board, BoardList } from './types/task';

import { ref, onMounted, computed } from 'vue';
import { getBoards } from '@/services/getBoards';

const isSidebarOpen = ref(true);
const openSideBar = (): void => {
  isSidebarOpen.value = true;
};

const closeSideBar = (): void => {
  isSidebarOpen.value = false;
};

const boards = ref<Board[]>([]);
const activeBoard = ref<Board | null>();

onMounted(async () => {
  boards.value = await getBoards();
  activeBoard.value = boards.value[0];
});

const switchBoard = (boardName: string): void => {
  activeBoard.value = boards.value.find(board => board.name === boardName);
};

const getBoardList = computed<BoardList[]>(() => {
  return boards.value.map((board: Board) => ({
    boardName: board.name,
    isBoardActive: activeBoard.value?.name === board.name
  }));
});

const updateBoard = (updatedBoard: Board) => {
  activeBoard.value = updatedBoard;
}
</script>

<template>
  <div class="flex flex-col h-screen w-full relative">
    <TopBar :activeBoardName="activeBoard?.name" />
    <div class="flex flex-1 relative">
      <transition name="slide">
        <SideBar @getSelectedBoard="switchBoard" :boardsList="getBoardList" v-if="isSidebarOpen" key="sidebar"
          @closeSideBar="closeSideBar" />
      </transition>
      <div class="flex-1 transition-all duration-300" :class="{ 'ml-0': !isSidebarOpen, 'ml-[18rem]': isSidebarOpen }">
        <Kanban :activeBoard="activeBoard" @updateBoard="updateBoard" />
      </div>
    </div>
    <button @click="openSideBar" class="bg-primary p-3 text-background absolute bottom-8 rounded-r-full">
      <img src="./assets/images/icons/show-sidebar.svg" class="w-5 h-5 filter brightness-200" alt="" />
    </button>
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
