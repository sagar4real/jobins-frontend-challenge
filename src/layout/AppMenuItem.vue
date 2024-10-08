<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
  root: {
    type: Boolean,
    default: true,
  },
  parentItemKey: {
    type: String,
    default: null,
  },
});

const isActiveMenu = ref(false);
const itemKey = ref(null);

const itemClick = (event, item) => {
  if (item.disabled) {
    event.preventDefault();
    return;
  }

  const { overlayMenuActive, staticMenuMobileActive } = layoutState;

  if (
    (item.to || item.url) &&
    (staticMenuMobileActive.value || overlayMenuActive.value)
  ) {
    onMenuToggle();
  }

  if (item.command) {
    item.command({ originalEvent: event, item: item });
  }

  const foundItemKey = item.items
    ? isActiveMenu.value
      ? props.parentItemKey
      : itemKey
    : itemKey.value;

  setActiveMenuItem(foundItemKey);
};

const checkActiveRoute = (item) => {
  return route.path === item.to;
};
</script>

<template>
  <li
    :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }"
  >
    <a
      v-if="(!item.to || item.items) && item.visible !== false"
      :href="item.url"
      @click="itemClick($event, item, index)"
      :class="item.class"
      :target="item.target"
      tabindex="0"
    >
      <i :class="item.icon" class="layout-menuitem-icon"></i>
      <span class="text-[#8B909A] text-paragraph1 font-medium">{{
        item.label
      }}</span>
      <i
        class="pi pi-fw pi-angle-down layout-submenu-toggler"
        v-if="item.items"
      ></i>
    </a>
    <router-link
      v-if="item.to && !item.items && item.visible !== false"
      @click="itemClick($event, item, index)"
      :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
    >
      <div class="py-[9px] flex gap-2 px-2" :class="item.label == 'Dashboard' ? 'active' : '' ">
        <img :src="item.icon" alt="" />
        <span class="font-medium text-[#8B909A] text-heading2">{{
          item.label
        }}</span>
      </div>
    </router-link>
    <Transition
      v-if="item.items && item.visible !== false"
      name="layout-submenu"
    >
      <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
        <app-menu-item
          v-for="(child, i) in item.items"
          :key="child"
          :index="i"
          :item="child"
          :parentItemKey="itemKey"
          :root="false"
        ></app-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style lang="postcss" scoped>
.active { 
  @apply bg-[#F3F4F8] rounded-[6px] ;
  span{
    @apply text-black;
  }
}
</style>
