<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from 'vue'

const active: Ref<number> = ref(0)
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <van-tabbar route v-model="active" active-color="#febf00" inactive-color="#b8b8b5">
    <van-tabbar-item replace to="/">
      <span>Home</span>
      <template #icon="props">
        <i-mdi-home class="tabbar-icon" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/contacts">
      <span>Contacts</span>
      <template #icon="props">
        <i-mdi-contacts class="tabbar-icon" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/space">
      <span>Space</span>
      <template #icon="props">
        <i-mdi-shape-circle-plus class="tabbar-icon" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/star">
      <span>Star</span>
      <template #icon="props">
        <i-mdi-star class="tabbar-icon" />
      </template></van-tabbar-item>
    <van-tabbar-item replace to="/todo">
      <span>Todo</span>
      <template #icon="props">
        <i-mdi-tooltip-edit class="tabbar-icon" />
      </template></van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.tabbar-icon {
  font-size: 1em;
}
</style>
