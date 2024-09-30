<script lang="ts" setup>
import AppSidebar from "./AppSidebar.vue";
import AppTopbar from "./AppTopbar.vue";
</script>
<template>
  <div class="layout-wrapper">
    <div class="layout-sidebar" style="position: fixed; z-index: 500">
      <app-sidebar></app-sidebar>
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <app-topbar></app-topbar>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
