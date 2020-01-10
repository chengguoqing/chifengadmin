<!--我的运单-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            我的运单
        </p>
        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <el-form label-width="120px" :inline="true">
                    <el-form-item label="起截日期：">
                        <el-date-picker :default-time="['00:00:00', '23:59:59']" v-model="form.jhhssdfa" type="datetimerange" range-separator="-" start-placeholder="起始日期" end-placeholder="截至日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="运单状态：">
                        <el-select v-model="form.jhhssdfb" class="ml10" filterable>
                            <el-option :label="sd.name" :value="sd.id" v-for="(sd,idx) in xialas" :key="idx"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="收货人/收货人电话/到达站/单号" class="eeertxwe"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>

                </el-form>
                <el-table :data="liste" class="mt20">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column prop="dfsdfddfa" label="状态" width="80">
                        <template>
                            <span class="ls sz">待发货</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dfsdfddff" label="制单日期" width="100"></el-table-column>
                    <el-table-column prop="dfsdfddfg" label="单号"></el-table-column>
                    <el-table-column prop="dfsdfddfh" label="到达站" width="250"></el-table-column>
                    <el-table-column prop="dfsdfddfi" label="货物名称" width="120"></el-table-column>
                    <el-table-column prop="dfsdfddfj" label="件数"></el-table-column>
                    <el-table-column prop="dfsdfddfk" label="重量"></el-table-column>
                    <el-table-column prop="dfsdfddfl" label="体积"></el-table-column>
                    <el-table-column prop="dfsdfddfq" label="收货人"></el-table-column>
                    <el-table-column prop="dfsdfddfw" label="收货电话"></el-table-column>
                    <el-table-column prop="dfsdfddfr" label="收货地址" width="300"></el-table-column>
                    <el-table-column prop="dfsdfddft" label="收货备注"></el-table-column>
                    <el-table-column label="操作" width="140">
                        <template slot-scope="scope">
                            <div>
                                <span class="ls sz" @click="hf('waybillDetails')">详情</span>
                            <el-dropdown class="ml10 ls">
                                <span class="el-dropdown-link sz">
                                    更多<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="fz14 ls ">
                                    <el-dropdown-item> <span class=" sz" @click="hf('WaybillTracking')">追踪</span></el-dropdown-item>
                                    <el-dropdown-item><span class=" sz" @click="hf('deliveryEvaluation')">评价</span></el-dropdown-item>
                                     <el-dropdown-item><span class=" sz" @click="hf('claim')">理赔</span></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                                
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div>
                    <div class="tr mt30">
                        <el-pagination background layout="total, sizes, prev, pager, next, jumper,slot" :total="30" @current-change="yemaset" @size-change="sizechange"> </el-pagination>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import {
        Myding
    } from '@/api/moni'
    export default {
        data() {
            return {
                form: {
                    jhhssdfa: '',
                    jhhssdfb: ''
                },
                xialas: [{
                    name: '全 部',
                    id: '1'
                }, {
                    name: '待发货',
                    id: '2'
                }, {
                    name: '已发货',
                    id: '3'
                }, {
                    name: '已装车',
                    id: '4'
                }, {
                    name: '已中转',
                    id: '5'
                }, {
                    name: '已到站',
                    id: '6'
                }, {
                    name: '已签收',
                    id: '7'
                }],
                liste: ''
            }
        },
        components: {},
        methods: {
            yemaset(e) {
                this.liste = new Myding().data
            }
        },
        mounted() {
            this.liste = new Myding().data
        }
    }

</script>
<style scoped>
    .eeertxwe {
        width: 300px
    }

</style>
