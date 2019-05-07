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
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
      ]
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    }
  },
  created() {
    let storage = window.localStorage;
    if (!typeof storage.username) {
      console.log(typeof storage.username)
      console.log(111);
      this.$router.push("/login");
    }
    //请求用户数据
    this.$axios({
      url:"users",
      data:{
        query:"",
        pagenum:1,
        pagesize:10
      }
    }).then(res=>{
      console.log(res);
      
    })
  },
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
</style>
