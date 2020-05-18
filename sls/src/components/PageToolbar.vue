<template>
  <cv-toolbar>
    <cv-toolbar-search />
    <cv-overflow-menu class="bx--toolbar-action" flip-menu>
      <cv-overflow-menu-item primary-focus>Action 1</cv-overflow-menu-item>
      <cv-overflow-menu-item primary-focus>Action 2</cv-overflow-menu-item>
      <cv-overflow-menu-item primary-focus>Action 3</cv-overflow-menu-item>
    </cv-overflow-menu>
  </cv-toolbar>
</template>

<script>
export default {
  name: 'PageToolbar'
}
</script>

<style scoped>
.bx--toolbar {
  position: fixed;
  top: 48px;
  right: 0;
  background-color: #eee;
  z-index: 6000;
}
</style>
