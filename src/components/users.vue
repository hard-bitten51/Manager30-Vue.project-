<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--栅格 输入框 -->
    <el-row>
      <el-col :span="6">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary">主要按钮</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="name" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="userstatus" label="用户状态">
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
      <el-table-column prop="set" label="操作">
        <el-button type="primary" icon="el-icon-edit" plain></el-button>
        <el-button class="green" type="success" icon="el-icon-check" plain></el-button>
        <el-button type="danger" icon="el-icon-delete" plain></el-button>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      value1: true,
      value2: true,
      tableData: []
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    }
  },
  created() {
    let storage = window.localStorage;
    if (!storage.token) {
      console.log(typeof storage.username);
      console.log(111);
      this.$router.push("/login");
    }
    //请求用户数据
    this.$axios({
      url: "users?query=" + "" + "&pagenum=" + 1 + "&pagesize=" + 10
    }).then(res => {
      console.log(res);
      this.tableData = res.data.data.users;
    });       
  }
};
</script>

<style>
.el-main {
  line-height: 50px;
}
.is-leaf {
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
.el-button--primary:nth-child(1) {
  margin-left: 10px;
}
</style>
