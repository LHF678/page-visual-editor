<template>
  <el-container class="pve-container">
    <el-header>
      <span>template-visual-editor</span>
      <el-button-group>
        <el-button size="small" plain>预览</el-button>
        <el-button size="small" plain>保存</el-button>
      </el-button-group>
    </el-header>
    <el-main>
      content
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.el-main {
  background: #eff2f7;
}
</style>
