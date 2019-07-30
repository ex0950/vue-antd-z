<template functional>
  <a-sub-menu
    :key="data.attrs.menuInfo.name"
    v-on="listeners"
  >
    <span slot="title">
      <i :class="['icon', 'icon-' + data.attrs.menuInfo.meta.icon]" />
      <span>{{ data.attrs.menuInfo.meta.name }}</span></span>
    <template v-for="item in data.attrs.menuInfo.children">
      <a-menu-item
        v-if="!item.meta.unfold"
        :key="item.name"
      >
        <i :class="['icon', 'icon-' + item.meta.icon]" />
        <span>{{ item.meta.name }}</span>
      </a-menu-item>
      <aside-item
        v-else
        :key="item.name"
        :menu-info="item"
      />
    </template>
  </a-sub-menu>
</template>

<script type="text/javascript">
    export default {
        name: "AsideItem",
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
