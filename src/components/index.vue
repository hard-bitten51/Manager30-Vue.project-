<template>
  <el-container>
    <el-header>
      <!-- 头部 -->
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <img src="../../imgs/heimalogo.png" alt>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            <h2>黑马程序员后台管理系统</h2>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-message-solid"></i>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="index-aside">
        <!-- 添加router属性 使其容器内的元素能执行 -->
        <el-menu router default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="users">
                <i class="el-icon-menu"></i>用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-set-up"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="roles">
                <i class="el-icon-menu"></i>角色列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="rights">
                <i class="el-icon-menu"></i>权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="goods">
                <i class="el-icon-menu"></i>商品列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="params">
                <i class="el-icon-menu"></i>分类数据</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="categories">
                <i class="el-icon-menu"></i>商品分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="orders">
                <i class="el-icon-menu"></i>订单列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item style="margin-left:20px" index="reports">
                <i class="el-icon-menu"></i>数据列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="index-main">
          <!-- 嵌套路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  methods: {}
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
section {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
el-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.el-menu-item-group__title {
  display: none;
}
div,
.el-submenu__title {
  padding-left: 0;
}
.mianbaoxie {
  background-color: rgb(151, 207, 229);
  height: 30px;
  /* line-height: 30px; */
  display: flex;
  justify-content: left;
  align-items: center;
}
.el-icon-arrow-right {
  color: black;
}
</style>
