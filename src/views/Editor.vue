<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff"> left </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <a-card title="画布区域">
            <div style="position: relative">
              <LText
                v-for="item in editorComponents"
                :key="item.id"
                v-bind="item.props"
                :is="item.name"
              ></LText>
            </div>
          </a-card>
        </a-layout-content>
        <a-layout-sider width="200" style="background: #fff"> right </a-layout-sider>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
import LText from '@/components/LText.vue'
import { computed, ref } from 'vue'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
const store = useStore<GlobalDataProps>()
const editorComponents = computed(() => store.state.editor.components)
const selectedKeys1 = ref<string[]>(['2'])
</script>
<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  text-align: center;
  float: right;
  margin: 16px 0 16px 24px;
}
</style>
