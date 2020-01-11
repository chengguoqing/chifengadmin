<!--图标组件-->
<template>
     <div class="sdfdsf_eer" ref="dsfdf_er" ></div>
</template>
<script>
    import echarts from "echarts"
    export default {
        props: ['shuju'],
        data() {
            return {
                myChart:""
            }
        },
        components: {

        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let ssder = this.$refs.dsfdf_er
                this.myChart = echarts.init(ssder)
                // 绘制图表
                this.myChart.setOption(this.shuju);
            },
            setdsds(shuju){
               this.myChart.setOption(shuju)
            }
        },
        mounted() {
            this.drawLine()
        },
    }

</script>
<style scoped>
    .sdfdsf_eer{
       width:550px;
        height: 400px
    }
</style>
