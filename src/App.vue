<template>
    <div id="app">

        <el-container>
            <el-header class="sd_df_der">
				<span class="fz30 cf">驰峰</span>
               <!-- <img class="sd_jhj_d" src="http://duxinggj.com/www/static//img/logo_er.png"> -->
            </el-header>
            <el-container class="sd_deet">
                <el-aside width="200px">
                    <div class="sd_jh_der">
                        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#47484B" text-color="#fff" :router="true" active-text-color="#2464C8">
                            <el-menu-item index="/Outletrrates">
                                <i class="el-icon-menu"></i>
                                <span slot="title">网点及运价</span>
                            </el-menu-item>
                               <el-menu-item index="/MyWaybill">
                                <i class="el-icon-menu"></i>
                                <span slot="title">我的运单</span>
                            </el-menu-item>
                            
                                <el-menu-item index="/warningWaybills">
                                <i class="el-icon-menu"></i>
                                <span slot="title">预警运单</span>
                            </el-menu-item>
                            
                            <el-submenu index="/weixin">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">微信商城</span>
                                </template>

                                <el-menu-item-group>
                                    <el-menu-item index="/weixin/user_list">用户列表</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="/weixin/dingdan_list">订单列表</el-menu-item>
                                </el-menu-item-group>
                                 <el-menu-item-group>
                                    <el-menu-item index="/weixin/chengjiao_list">成交列表</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>


                            <el-menu-item index="/wenzhang">
                                <i class="el-icon-menu"></i>
                                <span slot="title">文章列表</span>
                            </el-menu-item>
                            <el-menu-item index="/dianpu">
                                <i class="el-icon-menu"></i>
                                <span slot="title">店铺信息</span>
                            </el-menu-item>
                            <el-menu-item index="/user_msg">
                                <i class="el-icon-menu"></i>
                                <span slot="title">管理员列表</span>
                            </el-menu-item>
                        </el-menu>
                        <ul class="sd_deeett">
                            <li @click="out_back">
                                退出登录

                            </li>
                        </ul>
                    </div>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
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
        padding-top: 20px;
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
