<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>微页面</el-breadcrumb-item>
        </el-breadcrumb>


        <section class="btm mt10 pt20">

            <div class="bianji_srt">

                <div class="phone_er">
                    <section class="dsf_dertxc" :style="{'background-color':header.bgcolor}">
                        <zx_header :header="header" @show_img="dialogVisible_er_san=true"></zx_header>
                        <lunbo></lunbo>
                    </section>
                    <caidan></caidan>
                   


                </div>

            </div>

        </section>




        <el-dialog class="sddf_drrtimg" :visible.sync="dialogVisible_er_san" width="890px">
            <up_img @close_s="dialogVisible_er_san=false" @queding="queding_er" v-if="dialogVisible_er_san"></up_img>
        </el-dialog>
    </div>
</template>
<script>
    import zx_header from "@/components/zx/header"
    import caidan from "@/components/zx/caidan"
    import up_img from "@/components/up_img"
    import lunbo from "@/components/zx/lunbo"
    export default {
        data() {
            return {
                dialogVisible_er_san: false,
                header: {
                    name: "独行工匠2",
                    miaosu: "",
                    fxtp: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/e8af3a9c-a3d2-4683-b970-252df761cc21.png",
                    bgcolor: "#f6f6f6"
                }
            }
        },
        components: {
            zx_header,
            up_img,
            caidan,
            lunbo
        },
        methods: {
            queding_er(data) {
                this.dialogVisible_er_san = false
                this.header.fxtp = data
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .bianji_srt {
        width: 800px;
        margin: auto;
    }

    .phone_er {
        width: 375px;
        border: 1px solid #e0e0e0;

    }

    .dsf_dertxc {
        min-height: 460px;
    }

</style>
