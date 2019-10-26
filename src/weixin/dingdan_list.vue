<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="btm mt10 pt20">
            <el-row :gutter="20">
                <el-col :span="5">
                    <el-input placeholder="请输入订单号" class="input-with-select" v-model="name_dx">
                        <el-button slot="append" icon="el-icon-search" @click="sousuode"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="5">
                    <el-select v-model="dder_er" placeholder="订单状态" @change="ddfdeertx">
                        <el-option :label="sd.name" :value="sd.code" v-for="sd in zhangse"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <section>
                <el-table class="mt20 cen juzhong" v-loading="loading" :data="tableData" style="width: 100%" highlight-current-row border>
                    <el-table-column type="index" label="序号" width="100"></el-table-column>
                    <el-table-column prop="name" label="商品标题"></el-table-column>
                    <el-table-column prop="name" label="商品封面">
                        <template slot-scope="scope">
                            <img :src="scope.row.urlfm" class="yj useerttx">
                        </template>
                    </el-table-column>
                    <el-table-column prop="yixuan" label="规格"></el-table-column>
                    <el-table-column prop="jiagegm" label="商品价格"></el-table-column>
                    <el-table-column prop="zftypetext" label="订单状态"></el-table-column>
                    <el-table-column prop="oderid" label="订单号"></el-table-column>
                    <el-table-column label="操作时间">
                        <template slot-scope="scope">
                            <span v-html="time_d(scope.row.addtime)"></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" v-if="scope.row.zftypecode==2" @click="zhuangrt(scope.row.id,3)">发货</el-button>
                            <el-button type="text" size="small" v-if="scope.row.zftypecode==3">确认收货</el-button>
                            <el-button type="text" size="small" @click="del_user('scht/deldingdanlist',scope.row.id)">删除</el-button>
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
                name_dx: "",
                dder_er: '',
                zhangse: [{
                        name: "全部",
                        code: ''
                    }, {
                        name: "代付款",
                        code: 1
                    }, {
                        name: "待收货",
                        code: 2
                    },
                    {
                        name: "待收货",
                        code: 3
                    },
                    {
                        name: "退货",
                        code: 4
                    }
                ]
            }
        },
        components: {

        },
        mixins: [playlistMixin], //注册mixins
        methods: {
            async ddfdeertx(e) {
                this.loading = true
                this.page = 1
                await this.getuser("scht/dingdanlist", {
                    zftypecode: e,
                    userid: this.$route.query.userid
                })
                this.loading = false
            },
            handleCurrentChangeeer(val) { //分页点击
                this.page = val
                this.loading = true
                this.getuser(this.url_et, {
                    userid: this.$route.query.userid
                })
            },
            sousuode() {
                this.page = 1
                this.getuser("scht/dingdanlist", {
                    oderid: this.name_dx,
                    userid: this.$route.query.userid
                })
            },
            async zhuangrt(id, code) {
                this.loading = true
                await this.post("scht/xiugaidanlist", {
                    id: id,
                    zftypecode: code
                })
                await this.getuser("scht/dingdanlist", {
                    userid: this.$route.query.userid
                })
                this.loading = false
            }
        },
        mounted() {

            this.getuser("scht/dingdanlist", {
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
