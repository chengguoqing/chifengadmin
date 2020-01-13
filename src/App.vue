<template>
    <div id="app">
        <div class="sd_df_der pd">
            <span class="fz30 cf">驰峰</span>
        </div>
        <div class="row">
            <div class="sd_jh_der">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#47484B" text-color="#fff" :router="true" active-text-color="#2464C8">
                    <el-menu-item index="/">
                        <i class="el-icon-s-goods"></i>
                        <span slot="title">网点运价</span>
                    </el-menu-item>
                    <el-menu-item index="/MyWaybill">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">我的运单</span>
                    </el-menu-item>

                    <el-menu-item index="/warningWaybills">
                        <i class="el-icon-info"></i>
                        <span slot="title">预警运单</span>
                    </el-menu-item>
                       <el-menu-item index="/operationAnalysis">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">运营分析</span>
                    </el-menu-item>

                    
                    <el-menu-item index="/claimlist">
                        <i class="el-icon-s-platform"></i>
                        <span slot="title">我的理赔</span>
                    </el-menu-item>

                    <el-menu-item index="/clientEvaluation">
                        <i class="el-icon-chat-dot-round"></i>
                        <span slot="title">客户评价</span>
                    </el-menu-item>
                    <el-menu-item index="/onlineOrder">
                        <i class="el-icon-set-up"></i>
                        <span slot="title">在线下单</span>
                    </el-menu-item>


                </el-menu>
                <ul class="sd_deeett">
                    <li @click="out_back">
                        退出登录

                    </li>
                </ul>
            </div>
            <div class="col">
                <router-view />
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                left_mu: [{
                    name: "首页",
                    path: "",
                    bz: "1"
                }, {
                    name: "用户管理",
                    path: "user_msg",
                    bz: "2"
                }],
                moren_ds: " ",
                user_fo: ""
            }
        },

        components: {

        },
        methods: {
            out_back() { //退出登录
                this.$cookies.remove("user_id");
                this.hf('admin?redirect=' + this.$route.name)
                this.$message({
                    message: '退出登录成功',
                    type: 'success'
                });
            },
            handleOpen(e) {
                console.log(2);
            },
            handleClose(e) {

            }
        },
        mounted() {
            //            this.$store.dispatch('init')
        },
    }

</script>


<style>
    .sd_deet {
        height: 100vh;
    }

    .sd_jh_der {
        width: 200px;
        min-height: 100vh;
        padding-top: 20px;
        background: #47484B
    }

    .sd_deeett li {
        line-height: 45px;
        font-size: 14px;
        color: #fff;
        padding-left: 25px;
    }

    .sd_jh_der li:hover,
    .sd_jh_der li.act {
        background: #2D2E30;
        color: #2464C8
    }

    .usd_deert {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

</style>
