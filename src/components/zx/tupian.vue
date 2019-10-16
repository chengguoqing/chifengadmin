<template>
    <el-popover placement="right" width="450" trigger="click">

        <section>
            <el-form ref="header" :model="from" label-width="80px">
                <el-form-item label="图片宽度">

                    <dx_row :span="2" :gutter="20">
                        <section>
                            <p class="sd_jj_der">
                                <el-input placeholder="请输入图片宽度px" v-model="from.width"></el-input>
                            </p>
                        </section>
                        <section>
                            <el-radio v-model="from.is_dw" label="1">%</el-radio>
                            <el-radio v-model="from.is_dw" label="2">px</el-radio>

                        </section>
                    </dx_row>
                </el-form-item>
                <el-form-item label="链接地址">
                    <el-input placeholder="请输入链接地址" v-model="from.url_et"></el-input>
                </el-form-item>
                <el-form-item label="上下边距">
                    <el-slider v-model="from.marginTop" show-input :max="200"> </el-slider>
                </el-form-item>

            </el-form>
        </section>
        <section class="pr" slot="reference">
            <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" :style="{width:from.width+(from.is_dw==1?'%':'px'),'margin-top':from.marginTop+'px'}">

        </section>
    </el-popover>

</template>
<script>
    export default {
        data() {
            return {
                from: {
                    width: "100",
                    marginTop: "",
                    is_dw: "1",
                    url_et: ""
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
    .sd_jj_der {
        width: auto;
        margin-right: 20px;
    }

    img {
        max-width: 100% !imporant
    }

</style>
