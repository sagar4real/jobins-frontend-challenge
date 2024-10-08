<script setup>
import { ref } from "vue";
import AppMenuItem from "./AppMenuItem.vue";

const model = ref([
  {
    label: "MAIN MENU",
    items: [
    { label: "Dashboard", icon: "/svg/home.svg", to: "/" },
      { label: "Order Management", icon: "/svg/cart.svg", to: "/" },
      { label: "Brand", icon: "/svg/star.svg", to: "/" },
    ],
  },
  {
    label: "PRODUCTS",
    items: [
    { label: "Add Product", icon: "/svg/circle-plus.svg", to: "/" },
      { label: "Product List", icon: "/svg/box.svg", to: "/" },
    ],
  },
]);
</script>

<template>
  <ul class="py-10">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item  :class="i > 0 ? 'mt-4' : null" :item="item" :index="i" ></app-menu-item>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
