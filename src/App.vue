<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';
import TaskCard from '@/components/TaskCard.vue';
import { ref } from 'vue';

const isSidebarOpen = ref(true);
const openSideBar = (): void => {
  isSidebarOpen.value = true;
}

const closeSideBar = (): void => {
  isSidebarOpen.value = false;
}
</script>

<template>
  <div class="flex flex-col h-screen w-full">
    <TopBar />
    <div class="flex flex-1 overflow-hidden relative">
      <transition name="slide">
        <SideBar v-if="isSidebarOpen" key="sidebar" />
      </transition>
      <div class="flex-1 transition-all duration-300" :class="{ 'ml-0': !isSidebarOpen, 'ml-[20rem]': isSidebarOpen }">
        <TaskCard />
      </div>
    </div>
    <button @click="openSideBar" class="bg-primary p-6 text-background">Open Sidebar</button>
    <button @click="closeSideBar" class="bg-primary p-6 text-background">Close Sidebar</button>
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
