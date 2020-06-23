<template>
  <div id="app">
    <router-view />
    lhf
  </div>
</template>

<style lang="less">
@import '@/assets/style/reset.less';
.pve-container {
  height: 100%;
  > .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #eee;
    > span {
      color: #666;
    }
  }
  > .el-main {
    padding: 0;
  }
}
</style>
