<template>
  <div class="login">
    <div class="center-box">
        <h3 class="my-h3">用户登陆</h3>
      <el-form labal-position="top" label-width="80px">
        <el-form-item label="用户名*"   >
          <el-input name="username" v-model="username" class="username"></el-input>
        </el-form-item>
        <el-form-item label="密码*"   >
          <el-input name="password" v-model="password" class="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      let username=this.username
      let password=this.password
      // console.log(username);
      // console.log(password);
      //发请求
      this.$axios({
        methods:"post",
        url:'login',
        data:{
          username,
          password
        }
      }).then(res=>{
        console.log(res);
        //将登陆信息写入localStorage
        
            let storage = window.localStorage
            //写入用户名和密码
            storage.username= this.username
            storage.password= this.password
            // console.log(typeof storage["username"])
            // console.log(typeof storage["password"])
        
        this.$router.push("/")
      })
      
    }
  }

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
          margin-bottom: 30px;
          // padding: 0;
          text-align: center;
        }
    }
</style>
