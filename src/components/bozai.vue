<template>
  <div>
    <h2>hahaha</h2>
    <el-form-item label="注册日期">
    <el-date-picker
            v-model="filters.column.create_start_date"
            type="date"
            :picker-options="pickerBeginDateBefore"
            format="yyyy-MM-dd"
            placeholder="">
    </el-date-picker>
</el-form-item>
<el-form-item label="至" label-width="25px">
    <el-date-picker
            v-model="filters.column.create_end_date"
            type="date"
            format="yyyy-MM-dd"
            :picker-options="pickerBeginDateAfter"
            placeholder="">
    </el-date-picker>
</el-form-item>
  </div>
</template>

<script>
export default {
  name: "bozai",
  data () {
    return {
        filters: {
            column: {
                create_start_date: '',
                create_end_date: ''
            },
        },
        pickerBeginDateBefore:{
            disabledDate: (time) => {
                let beginDateVal = this.filters.column.create_end_date;
                if (beginDateVal) {
                    return time.getTime() > beginDateVal;
                }
            }
        },
        pickerBeginDateAfter:{
            disabledDate: (time) => {
                let beginDateVal = this.filters.column.create_start_date;
                if (beginDateVal) {
                    return time.getTime() < beginDateVal;
                }
            }
        }
    }
  }
};
</script>


<style>
</style>
