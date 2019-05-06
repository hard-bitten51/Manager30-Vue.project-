<template>
  <div class="login">
    <div class="center-box">
        <h3 class="my-h3">用户登陆</h3>
      <el-form labal-position="top" label-width="80px">
        <el-form-item label="用户名*"   >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="密码*"   >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>



<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  .login {
    height: 100%;
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
    .center-box {
        width: 480px;
        height: 360px;
        background: white;
        padding: 50px 35px;
        box-sizing: border-box;
        .my-btn {
            width: 125%;
            margin-left: -80px;
        }
        .my-h3 {
            // margin: 0;
            // padding: 0;
            text-align: center;
        }
    }
</style>
