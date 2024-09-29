<script lang="ts" setup>
import AppMenu from './AppMenu.vue';
</script>
<template>
  <section class="sidebar py-6 px-4 bg-white h-[100vh] w-[260px]">
    <!-- app logo -->
    <div class="logo-wrapper">
      <div class="logo flex items-center justify-between">
        <div class="flex">
          <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="24" rx="8" fill="#0F60FF" />
            <path
              d="M15.4242 4H22V8.44379H20.7678C18.6272 8.44379 17.1659 8.1107 16.3839 7.44453C15.7441 6.89591 15.4242 6.01029 15.4242 4.78766V4ZM7 10.3744C7 6.85391 9.85392 4 13.3744 4V10.4423H15.1256C16.7824 10.4423 18.1256 11.7855 18.1256 13.4423V13.5107H13.3744V13.6021C13.3744 17.1226 10.5205 19.9765 7 19.9765V10.3744ZM15.4123 18.8597C15.4123 17.2373 16.3602 16.1362 18.2559 15.5562C18.9826 15.3368 19.9186 15.227 21.064 15.227H22V20H15.4123V18.8597Z"
              fill="white"
            />
          </svg>
          <p class="font-bold text-heading1 text-[#23272E] ml-2">JoBins</p>
        </div>
        <div class="toggle-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6H13"
              stroke="#8B909A"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 12H11"
              stroke="#8B909A"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 18H13"
              stroke="#8B909A"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8L4 12L8 16"
              stroke="#8B909A"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- app menu -->
    <div class="menu-wrapper">
      <app-menu></app-menu>
    </div>
  </section>
</template>
