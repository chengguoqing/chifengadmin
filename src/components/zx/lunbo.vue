<template>

    <el-popover placement="right" width="450" trigger="click">

        <section>
            <el-form ref="header" :model="from" label-width="80px">
                <el-form-item label="高度">
                    <el-slider v-model="from.height" show-input :max="1000"> </el-slider>
                </el-form-item>

                <el-form-item label="上下边距">
                    <el-slider v-model="from.marginTop" show-input :max="200"> </el-slider>

                </el-form-item>
                <el-form-item label="链接地址">
                    <el-input placeholder="请输入链接地址" v-model="from.url_et"></el-input>
                </el-form-item>
            </el-form>
        </section>
        <section class="pr" slot="reference">
            <section class="pr dfg_rrert" :style="{height:from.height+'px','margin-top':from.marginTop+'px'}">
                <van-swipe class="h100" :initial-swipe="2">
                    <van-swipe-item v-for="sd in 5" class="h100">
                        <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" class="w100 h100">
                    </van-swipe-item>
                </van-swipe>
            </section>
        </section>
    </el-popover>
</template>
<script>
    export default {
        data() {
            return {
                from: {
                    height: 200,
                    url_et: "",
                    marginTop: "",
                }
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
    .dfg_rrert {
        overflow: hidden
    }

</style>
