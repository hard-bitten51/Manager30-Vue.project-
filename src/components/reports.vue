<template>
  <div>
    <!-- 面包蟹 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbaoxie">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Product管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类数据</el-breadcrumb-item>
    </el-breadcrumb>
    <img src="../assets/player.gif" alt="">
  </div>
</template>

<script>
export default {
    name:"reports"
};
</script>

<style>
img {
    width: 100%;
    margin-top: 10px;
}
</style>
