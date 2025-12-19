<script setup lang="ts">
import {IconUser} from "@arco-design/web-vue/es/icon";
import {reactive} from "vue";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const data = reactive([{
  key: '1',
  name: 'Jane Doe',
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com'
}, {
  key: '2',
  name: 'Alisa Ross',
  salary: 25000,
  address: '35 Park Road, London',
  email: 'alisa.ross@example.com'
}, {
  key: '3',
  name: 'Kevin Sandra',
  salary: 22000,
  address: '31 Park Road, London',
  email: 'kevin.sandra@example.com'
}, {
  key: '4',
  name: 'Ed Hellen',
  salary: 17000,
  address: '42 Park Road, London',
  email: 'ed.hellen@example.com'
}, {
  key: '5',
  name: 'William Smith',
  salary: 27000,
  address: '62 Park Road, London',
  email: 'william.smith@example.com'
}]);

</script>

<template>
  <div>
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Secondary</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="outline">Outline</a-button>
      <a-button type="text">Text</a-button>
    </div>
    <div>
      <a-avatar :style="{ backgroundColor: '#3370ff' }">
        <IconUser />
      </a-avatar>
    </div>
    <div>
      <a-collapse :default-active-key="['1', 2]">
        <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </a-collapse-item>
        <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." :key="2" disabled>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </a-collapse-item>
        <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </a-collapse-item>
      </a-collapse>
    </div>
    <div>
      <a-table :columns="columns" :data="data"></a-table>
    </div>
  </div>
</template>
