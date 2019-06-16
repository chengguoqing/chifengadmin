<!--装修的头部-->
<template>
<section>
<el-popover
  placement="right"
  width="450"
  trigger="click">
<section>
 
    <el-form ref="header" :model="header" label-width="80px">
        <el-form-item label="页面名称">
            <el-input placeholder="请输入页面名称" v-model="header.name" ></el-input>
        </el-form-item>
        <el-form-item label="页面描述">
            <el-input placeholder="用户通过微信分享给朋友时，会自动显示页面描述" v-model="header.miaosu" ></el-input>
        </el-form-item>
        <el-form-item label="分享图">
           <img :src="header.fxtp" class="wiy_deert" @click="$emit('show_img')">
        </el-form-item>
        
         <el-form-item label="背景颜色">
             <span @click="header.bgcolor='#f6f6f6'" class="mr20">
             <el-radio v-model="dsf_se"  label="默认背景色" ></el-radio>
                 </span>
              <el-radio  v-model="dsf_se"  label="自定义背景色"></el-radio>
             <section v-if="dsf_se=='自定义背景色'">
                <el-color-picker v-model="header.bgcolor" class="cz"></el-color-picker>
                     <el-button size="medium" class="cz ml10" @click="header.bgcolor='#f6f6f6'">重置</el-button>
                 
            </section>
             
    </el-form-item> 
             
    </el-form>
    
    
    </section>
    
    <div class="pr" slot="reference">
	   <img src="../../assets/img/header_e.jpg" class="w100 cz"> 
        <p class="jh_d_jder dian">
        {{header.name}}
        </p>
	</div>
    
    
</el-popover>




 
    
    </section>
</template>
<script>

    export default {
        props: {
            header: ""
        },
        data() {
            return {
                dsf_se: "默认背景色"
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
<style scoped>
    .jh_d_jder {
        position: absolute;
        left: 0px;
        right: 0;
        margin: auto;
        max-width: 180px;
        bottom: 16%;
        width: 100%;
        text-align: center;
        color: #333;

    }

    .wiy_deert {
           
        width: 100px;
        height: 100px;
    }

</style>
