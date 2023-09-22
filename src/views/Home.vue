<template>
  <List v-model:loading="loading" :finished="finished" @load="onLoad">
    <Card v-for="(item, index) in list" :key="index" :num="item.num.value" :price="item.price.value"
      :desc="item.desc.value" :title="item.title.value" :thumb="item.thumb.value" />
  </List>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Card, List } from 'vant'
import { KintoneApi } from '@/service/kintoneApi'

const list: Ref<kintoneRestApi.GoodListAppRecord[]> = ref([])

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  const kintoneClient = new KintoneApi()
  kintoneClient.getAllRecords().then((res) => {
    list.value = res
    loading.value = false;
    finished.value = true;
  })
};
</script>

