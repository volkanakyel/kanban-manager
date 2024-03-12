<template>
  <div class="flex">
    <div class="flex flex-col justify-between w-80 pl-6 py-8 fixed h-screen bg-background">
      <!-- Logo -->
      <div>
        <img class="mb-8" src="../assets/images/logo.svg" alt="Logo">

        <!-- Navigation -->
        <nav class="text-text-primary">
          <p class="mb-4 uppercase text-text-primary">All Boards (3)</p>
          <ul class="space-y-4">
            <li class="rounded-lg bg-primary p-4 text-white">Platform Launch</li>
            <li class="rounded-lg p-4 hover:bg-secondary hover:text-white cursor-pointer">Marketing Plan</li>
            <li class="rounded-lg p-4 hover:bg-secondary hover:text-white cursor-pointer">Roadmap</li>
            <li class="rounded-lg p-4 hover:bg-secondary hover:text-white cursor-pointer">+ Create New Board</li>
          </ul>
        </nav>
      </div>

      <!-- Bottom Section -->
      <div>
        <div class="mt-8 w-full bg-grey-100 rounded-md flex justify-center gap-6 items-center p-4">
          <img src="../assets/images/icons/light-mode.svg" alt="">
          <label for="toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="toggle" class="sr-only peer">
            <div
              class="w-14 h-7 bg-primary rounded-full peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:border-secondary after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-full">
            </div>
          </label>
          <img src="../assets/images/icons/dark-mode.svg" alt="">
        </div>
        <p class="mt-6 text-text-primary cursor-pointer">Hide Sidebar</p>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">

</script>

<style scoped></style>