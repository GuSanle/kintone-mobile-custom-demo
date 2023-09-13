<template>
  <div>
    <Card v-for="(item, index) in result.records" :key="index" :num="item.num.value" :price="item.price.value"
      :desc="item.desc.value" :title="item.title.value" :thumb="item.thumb.value" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Card } from 'vant'
import { KintoneApi } from '@/service/kintoneApi'

const kintoneClient = new KintoneApi()
const result: {
  records: kintone.types.Fields[]
} = reactive({
  records: [],
})
kintoneClient.getAllRecords().then((res) => {
  result.records = res
})

</script>

