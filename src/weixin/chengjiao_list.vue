<!--成交列表-->
<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>成交列表</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="btm mt10 pt20">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input placeholder="请输入用户名称" class="input-with-select" v-model="name_dx">
                        <el-button slot="append" icon="el-icon-search" @click="sousuode"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="6" class="pt10" v-if="tableData.length>0">
                    <span class="red fz14">商城总成交额：{{tableData[0].zonger}}</span>
                </el-col>
            </el-row>
            <section>
                <el-table class="mt20 cen juzhong" v-loading="loading" :data="tableData" style="width: 100%" highlight-current-row border>
                    <el-table-column type="index" label="序号" width="100"></el-table-column>
                    <el-table-column prop="name" label="头像">
                        <template slot-scope="scope">
                            <img :src="scope.row.headimgurl" class="yj useerttx">
                        </template>
                    </el-table-column>
                    <el-table-column prop="nickname" label="昵称"></el-table-column>
                    <el-table-column prop="jydh" label="交易订单号"></el-table-column>
                    <el-table-column prop="zongjia" label="订单金额"></el-table-column>

<!--
                    <el-table-column label="下单时间">
                        <template slot-scope="scope">
                            <span v-html="time_d(scope.row.addtime)"></span>
                        </template>
                    </el-table-column>
-->
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="del_list('scht/delchengjiaolist',scope.row.jydh)">删除</el-button>
                        </template>
                    </el-table-column>

                </el-table>
                <div class="block cen mt20">
                    <el-pagination @current-change="handleCurrentChangeeer" layout="total, prev, pager, next" :total="total">
                    </el-pagination>
                </div>
            </section>
        </section>

    </div>
</template>
<script>
    import {
        playlistMixin
    } from "@/biaoge.js"
    export default {
        data() {
            return {
                name_dx: ""
            }
        },
        components: {

        },
        mixins: [playlistMixin], //注册mixins
        methods: {
            handleCurrentChangeeer(val) { //分页点击
                this.page = val
                this.loading = true
                this.getuser(this.url_et, {
                    userid: this.$route.query.userid
                })
            },
            sousuode() {
                this.page = 1
                this.getuser("scht/chengjiaolist", {
                    jydh: this.name_dx,
                    userid: this.$route.query.userid
                })
            },
            async del_list(url, id) { //删除方法触发
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.post(url, {
                        jydh: id
                    })
                    this.getuser(this.url_et, {
                        userid: this.$route.query.userid
                    })
                })
            }
        },
        mounted() {
            this.getuser("scht/chengjiaolist", {
                userid: this.$route.query.userid
            })
        },
    }

</script>
<style scoped>
    .sd_jh_dert ul li:hover {
        cursor: pointer;
        background: #f8f8f8
    }

    .useerttx {
        width: 40px;
        height: 40px;
    }

</style>
