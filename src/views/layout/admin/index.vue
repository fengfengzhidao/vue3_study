<script setup lang="ts">

import router from "@/router";

interface MenuType {
  title: string
  name: string
  children?: MenuType[]
}

const menuList: MenuType[] = [
  {title: "首页", name: "home"},
  {
    title: "用户管理", name: "user", children: [
      {title: "用户列表", name: "userList"},
    ]
  },
  {
    title: "文章管理", name: "article", children: [
      {title: "文章列表", name: "articleList"},
    ]
  },
]

function menuItemClick(key: string) {
  router.push({name: key})
}


</script>

<template>
  <div class="admin_view">
    <div class="left">
      <div class="logo">
        logo
      </div>
      <div class="menu">
        <a-menu @menu-item-click="menuItemClick">
          <template v-for="item in menuList">
            <a-sub-menu v-if="item.children" :key="item.name">
              <template #title>{{ item.title }}</template>
              <a-menu-item v-for="sub in item.children" :key="sub.name">{{ sub.title }}</a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="item.name">{{ item.title }}</a-menu-item>
          </template>
        </a-menu>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <div class="mbx">
          面包屑
        </div>
        <div class="actions">
          <div class="user">
            用户名称
          </div>
        </div>
      </div>
      <div class="tabs">
        <div class="tab">选项卡</div>
        <div class="tab active">选中的选项卡</div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

.admin_view {
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  .left {
    width: 240px;
    height: 100%;
    border-right: 1px solid var(--color-border-1);

    .logo {
      height: 90px;
      width: 100%;
      border-bottom: 1px solid var(--color-border-1);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu {
      padding: 10px;
    }
  }

  .right {
    width: calc(100% - 240px);
    height: 100%;

    .top {
      height: 60px;
      border-bottom: 1px solid var(--color-border-1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }

    .tabs {
      height: 30px;
      border-bottom: 1px solid var(--color-border-1);
      display: flex;
      align-items: center;
      padding: 0 20px;

      .tab {
        border: 1px solid var(--color-border-1);
        padding: 3px 8px;
        cursor: pointer;
        margin-right: 10px;
        border-radius: 5px;

        &.active {
          background-color: dodgerblue;
          color: white;
        }
      }
    }

    .main {
      padding: 20px;
      background-color: var(--color-fill-2);
      height: calc(100vh - 90px);

      .base_view {
        background-color: white;
        border-radius: 5px;
        padding: 20px;
        height: 100%;
      }
    }
  }
}
</style>