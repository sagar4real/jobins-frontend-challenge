<script lang="ts" setup>
import SaleStat from "@/components/SaleStat.vue";
import ProfitStat from "@/components/ProfitStat.vue"
</script>
<template>
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2">
      <div class="sm:col-span-2">
        <Sale-Stat></Sale-Stat>
      </div>
      <div class="sm:col-span-1">
        <Profit-Stat></Profit-Stat>
      </div>
      <div class="sm:col-span-3 bg-red-200">
        Third Child (largest, spans 3 columns)
      </div>
    </div>
  </section>
</template>
