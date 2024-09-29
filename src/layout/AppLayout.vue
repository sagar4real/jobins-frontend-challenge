<script lang="ts" setup>
import AppSidebar from "./AppSidebar.vue";
</script>
<template>
  <div class="layout-wrapper">
    <!-- <app-topbar></app-topbar> -->
    <div class="layout-sidebar" style="position: fixed; z-index: 500">
      <app-sidebar></app-sidebar>
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view></router-view>
      </div>
      <!-- <app-footer></app-footer> -->
    </div>
  </div>
</template>
