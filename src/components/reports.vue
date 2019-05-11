<template>
  <div class="user-container">
    <!-- 面包屑 -->
    <el-breadcrumb class='my-breadcrumb' separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 数据统计 -->
    <!-- <img src="../assets/player.gif" alt=""> -->
    <!-- echarts的容器 -->
    <div id="main" style="height:600px"></div>
  </div>
</template>

<script>
//导入echats
import echarts from 'echarts'

export default {
  name: "users",
  // 数据
  data() {
    return {
      // 表格依赖于数据没有数据  会一行都没有
      option : {
        title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}

    };
  },
  //无法获取组件中的dom元素的
  created(){
    
  },
  //如果要操作dom元素  最起码得等到mounted钩子执行完毕
  //mounted执行时模板已经被渲染到页面上了可以获取dom元素  执行的时机比created更早
  mounted() {
    this.$request.getReports().then(res=>{
      // console.log(res);
      const backData = res.data.data
      for (const key in backData) {
        this.option[key] = backData[key]
      }
      //设置X轴顶格  默认是category 不写也可以
      this.option.xAxis[0].type = "category" 
      //X轴留白策略
      this.option.xAxis[0].boundaryGap = false
    })
    // console.log(document.getElementById("main"));
    //基于准备好的dom ， 初始化echarts实例  要放在mounted中
    var myChart = echarts.init(document.getElementById("main"))
    //使用刚指定的配置项和数据显示图表
    myChart.setOption(this.option)
    this.$request.getReports().then(res=>{

    })
  },
};
</script>

<style  lang='scss'>
.my-breadcrumb{
  height: 45px;
  line-height: 45px;
  background-color: #d3dce6;
  padding-left: 10px;
}


</style>
