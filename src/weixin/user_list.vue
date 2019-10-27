<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="btm mt10 pt20">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入用户名称" class="input-with-select" v-model="name_dx">
                        <el-button slot="append" icon="el-icon-search" @click="sousuode"></el-button>
                    </el-input>
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
                    <el-table-column label="地区">
                        <template slot-scope="scope">
                            <span>{{scope.row.province + scope.row.city}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="性别">
                        <template slot-scope="scope">
                            <span>{{scope.row.sex==1?'男':'女'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="第一次登录时间">
                        <template slot-scope="scope">
                            <span v-html="time_d(scope.row.addtimes)"></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <a class="ls sz" @click="hf('weixin/dingdan_list?userid='+scope.row.id)">他的订单</a>
  <a class="ls sz ml10" @click="hf('weixin/chengjiao_list?userid='+scope.row.id)">他购买的商品</a>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block cen mt20">
                    <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :total="total">
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
            sousuode() {
                this.page = 1
                this.getuser("scht/userlist", {
                    nickname: this.name_dx
                })
            }
        },
        mounted() {
            this.getuser("scht/userlist", {
                nickname: ''
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
