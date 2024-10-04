<script lang="ts" setup>
import { ref } from "vue";
const activeTab = ref("all");
</script>

<template>
  <section class="info-section rounded-[12px] h-full pt-6 px-4 bg-white">
    <div class="h-full info-top flex flex-col">
      <div class="h-full flex flex-col lg:flex-row">
        <div
          class="h-full profile border-r border-[#DBDADE] flex items-center justify-start px-6 gap-4 flex-1 w-full mb-6 lg:mb-0"
        >
          <div class="profile-picture">
            <svg
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_2331)">
                <rect x="0.716309" width="71.4894" height="72" fill="#7367F0" />
                <rect
                  x="0.716309"
                  width="71.4894"
                  height="72"
                  fill="white"
                  fill-opacity="0.2"
                />
                <rect
                  x="7.66669"
                  y="7"
                  width="57.5887"
                  height="58"
                  rx="28.7943"
                  fill="white"
                  fill-opacity="0.3"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_2331">
                  <rect
                    x="0.716309"
                    width="71.4894"
                    height="72"
                    rx="35.7447"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="profile-info">
            <h5 class="text-[#23272E] font-semibold text-heading3">
              Robert Fox
            </h5>
            <p class="text-[#8B909A] text-heading2 font-medium">
              robert@gmail.com
            </p>
          </div>
        </div>

        <div class="information border-r border-[#DBDADE] flex-1 w-full px-6">
          <h5 class="font-medium text-heading4 text-[#8B909A]">
            PERSONAL INFORMATION
          </h5>
          <div class="information-content mt-6 space-y-4">
            <div class="flex justify-between">
              <span class="text-[#23272E] font-medium min-w-[115px]"
                >Contact Number</span
              >
              <span class="text-[#23272E] font-semibold text-right"
                >(201) 555-0124</span
              >
            </div>
            <div class="flex justify-between">
              <span class="text-[#23272E] font-medium min-w-[115px]"
                >Date of Birth</span
              >
              <span class="text-[#23272E] font-semibold text-right"
                >1 Jan, 1985</span
              >
            </div>
            <div class="flex justify-between">
              <span class="text-[#23272E] font-medium min-w-[115px]"
                >Member Since</span
              >
              <span class="text-[#23272E] font-semibold text-right"
                >3 March, 2023</span
              >
            </div>
          </div>
        </div>

        <div class="address flex-1 w-full px-6 mt-6 lg:mt-0">
          <h5 class="font-medium text-heading4 text-[#8B909A]">
            SHIPPING ADDRESS
          </h5>
          <p class="mt-6 text-[#23272E] font-medium text-heading4">
            3517 W. Gray St. Utica, Pennsylvania 57867
          </p>
          <div class="user-activity mt-6 flex flex-col md:flex-row gap-6">
            <div class="total-order">
              <h1 class="font-bold text-heading1 text-[#23272E]">150</h1>
              <p class="text-[#8B909A] font-bold text-heading mt-2">
                Total Order
              </p>
            </div>
            <div class="total-completed">
              <h1 class="font-bold text-heading1 text-[#23272E]">140</h1>
              <p class="text-[#8B909A] font-bold text-heading mt-2">
                Completed
              </p>
            </div>
            <div class="total-cancled">
              <h1 class="font-bold text-heading1 text-[#23272E]">10</h1>
              <p class="text-[#8B909A] font-bold text-heading mt-2">Canceled</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-bottom px-10 mt-6">
        <ul class="flex gap-4 flex-wrap justify-center lg:justify-start">
          <li
            class="text-[#8B909A] font-medium text-heading2 cursor-pointer pb-4"
            @click="activeTab = 'all'"
            :class="activeTab == 'all' ? 'active' : ''"
          >
            All orders
          </li>
          <li
            class="text-[#8B909A] font-medium text-heading2 cursor-pointer pb-4"
            @click="activeTab = 'completed'"
            :class="activeTab == 'completed' ? 'active' : ''"
          >
            Completed
          </li>
          <li
            class="text-[#8B909A] font-medium text-heading2 cursor-pointer pb-4"
            @click="activeTab = 'canceled'"
            :class="activeTab == 'canceled' ? 'active' : ''"
          >
            Canceled
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.active {
  @apply text-[#0F60FF] border-b-2 border-[#0F60FF];
}

@media (max-width: 1024px) {
  .information {
    @apply mb-6;
  }

  .info-top {
    @apply space-y-6;
  }

  .user-activity {
    @apply flex-col space-y-6;
  }

  .info-bottom ul {
    @apply flex-wrap;
  }
}

@media (max-width: 768px) {
  .information-content div {
    @apply flex-col items-start;
  }

  .info-section {
    @apply px-2;
  }

  .info-bottom {
    @apply px-4;
  }
}

@media (max-width: 640px) {
  .profile-picture svg {
    @apply w-[50px] h-[50px];
  }

  .info-bottom ul li {
    @apply text-heading3;
  }


  .user-activity h1 {
    @apply text-heading2;
  }
}
</style>
