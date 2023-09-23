<template>
  <List v-model:loading="loading" :finished="finished" @load="onLoad">
    <Card v-for="(item, index) in list" :key="index" :num="item.num?.value" :price="item.price?.value"
      :title="item.title?.value" :thumb="item.thumb?.value" />
  </List>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Card, List } from 'vant'
import { KintoneApi } from '@/service/kintoneApi'
import type { GoodListAppRecord } from '@/types/restApiRecords'

const list: Ref<Partial<GoodListAppRecord>[]> = ref([])

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  const kintoneClient = new KintoneApi()
  const appId = import.meta.env.VITE_APP_ID
  const fields: (keyof kintone.types.Fields)[] = ['num', 'price', 'title', 'thumb']
  const query = 'order by $id desc'
  kintoneClient.getRecords(appId, fields, query).then((res) => {
    list.value = res
    loading.value = false;
    finished.value = true;
  })
};
</script>

