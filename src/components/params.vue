<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Product管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类数据</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 提示框 -->
    <el-alert
    class="tishikuang"
    title="注意：只允许为三级分类设置参数"
    type="warning"
    show-icon>
  </el-alert>
    <!--栅格 输入框 -->
    <el-row>
      <el-col :span="8">
          <p class="flwz">请选择商品分类：</p>
        <el-select v-model="value" placeholder="请选择商品分类">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </el-col>
      <el-col :span="3">
      </el-col>
    </el-row>
    <!-- tab栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="添加动态参数" name="first"><el-button type="success">添加动态参数</el-button></el-tab-pane>
    <el-tab-pane label="添加静态参数" name="second"><el-button type="info">添加静态参数</el-button></el-tab-pane>
  </el-tabs>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    }

  }
};
</script>

<style>
.el-main {
  line-height: 50px;
}
.is-leaf  {
  padding: 0;
}
.el-pagination {
  display: flex;
  justify-content: left;
  /* align-items: center; */
}
.el-breadcrumb {
  height: 22px;
}

.tishikuang {
    height: 30px;
    padding: 4px 4px;
    line-height: 26px;
}
p {
    display: inline;
    text-decoration: none;
    font-size: 14px;
}
.el-button--info,
.el-button--success {
    float: left;
    margin-bottom: 10px;
}
</style>
