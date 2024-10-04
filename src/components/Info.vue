<template>
  <section
    class="info-section rounded-[12px] py-6 px-4 h-full bg-white min-h-[220px]"
  >
    <div class="h-full info-top flex flex-row">
      <div
        class="h-full profile border-r border-[#DBDADE] flex items-center justify-start px-6 gap-4 flex-1 w-full"
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
          <h5 class="text-[#23272E] font-semibold text-heading3">Robert Fox</h5>
          <p class="text-[#8B909A] text-heading2 font-medium">
            robert@gmail.com
          </p>
        </div>
      </div>

      <div class="information border-r border-[#DBDADE] flex-1 w-full px-6">
        <h5 class="font-medium text-heading4 text-[#8B909A]">PERSONAL INFORMATION</h5>
        <div class="information-content mt-6">
            <div>
                <span class="text-[#23272E] font-medium mr-10">Contact Number</span>
                <span class="text-[#23272E] font-semibold ">(201) 555-0124</span>
            </div>
            <div class="mt-4">
                <span class="text-[#23272E] font-medium mr-10">Date of Birth</span>
                <span class="text-[#23272E] font-semibold ">1 Jan, 1985</span>
            </div>
            <div class="mt-4">
                <span class="text-[#23272E] font-medium mr-10">Member Since</span>
                <span class="text-[#23272E] font-semibold ">3 March, 2023</span>
            </div>
        </div>
      </div>

      <div class="address flex-1 w-full px-6">
        <h5 class="font-medium text-heading4 text-[#8B909A]">SHIPPING ADDRESS</h5>
        <p class="mt-6 text-[#23272E] font-medium text-heading4">3517 W. Gray St. Utica, Pennsylvania 57867</p>
        <div class="user-activity mt-6 flex gap-6">
            <div class="total-order">
                <h1 class="font-bold text-heading1 text-[#23272E]">150</h1>
                <p class="text-[#8B909A] font-bold text-heading mt-2">Total Order</p>
            </div>
            <div class="total-completed">
                <h1 class="font-bold text-heading1 text-[#23272E]">140</h1>
                <p class="text-[#8B909A] font-bold text-heading mt-2">Completed</p>
            </div>
            <div class="total-cancled">
                <h1 class="font-bold text-heading1 text-[#23272E]">10</h1>
                <p class="text-[#8B909A] font-bold text-heading mt-2">Canceled</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
