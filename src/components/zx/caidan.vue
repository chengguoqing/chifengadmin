<template>
	<div class="pd pt10 pm10">
	<p class="z6 fz14">基础组件</p>
 
        <el-row :gutter="20" class="dsf_dert">
            <el-col :span="8">
                    <el-button size="small" class="w100">轮播图</el-button>
            </el-col>
         <el-col :span="8">
     <el-button size="small" class="w100">图片</el-button>
    </el-col>
                  <el-col :span="8">
     <el-button size="small" class="w100">商品</el-button>
    </el-col>
            <el-col :span="8">
     <el-button size="small" class="w100">菜单导航</el-button>
    </el-col>
        </el-row>
	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
    .dsf_dert button{
        border: 1px dashed #e0e0e0; 
        margin-top: 10px;
    }
</style>
<style scoped>


</style>
