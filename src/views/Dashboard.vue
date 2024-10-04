<script lang="ts" setup>
import SaleStat from "@/components/SaleStat.vue";
import ProfitStat from "@/components/ProfitStat.vue";
import ProgressStat from "@/components/ProgressStat.vue";
import Info from "@/components/info.vue";
import List from "@/components/List.vue";
</script>

<template>
  <section>
    <div class="stat-grid grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <!-- Sale Stat -->
      <div class="sm:col-span-1 md:col-span-2">
        <SaleStat />
      </div>

      <!-- Profit Stat -->
      <div class="sm:col-span-1 md:col-span-1">
        <ProfitStat />
      </div>

      <!-- Progress Stat -->
      <div class="sm:col-span-1 md:col-span-3">
        <ProgressStat />
      </div>

      <!-- info -->
      <div class="sm:col-span-1 md:col-span-6">
        <Info />
      </div>

      <!-- table -->
      <div class="sm:col-span-1 md:col-span-6">
        <List />
      </div>
    </div>
  </section>
</template>
<!-- 
<style lang="postcss" scoped>
@media (min-width: 1000px) {
  .stat-grid {
    @apply grid-cols-3; /* Ensures 3 columns in a single row for screens 1676px and above */
  }
}
</style> -->
