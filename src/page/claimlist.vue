<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            理赔申请一览表
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <el-form label-width="120px" :inline="true">
                    <el-form-item label="运单编号">
                        <el-input placeholder="请输入运单编号" class="shhxeert"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input placeholder="运单编号、到达站、收货人、收货人电话" class="shhxeert ab"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-checkbox v-model="forms.ddffrc">已处理</el-checkbox>
                        <el-checkbox v-model="forms.ddffrc">待处理</el-checkbox>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" class="dfgrterty">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="liste" class="mt20">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column prop="dfsdfddff" label="运单日期" width="100"></el-table-column>
                    <el-table-column prop="dfsdfddff" label="申请日期" width="100"></el-table-column>
                    <el-table-column prop="dfsdfddfg" label="运单编号" width="100"></el-table-column>
                    <el-table-column prop="dfsdfddfr" label="到达站" width="180"></el-table-column>
                    <el-table-column prop="dfsdfddfq" label="收货人"></el-table-column>
                    <el-table-column prop="dfsdfddfw" label="收货人电话"></el-table-column>
                    <el-table-column prop="dfsdfddfw" label="货名"></el-table-column>
                    <el-table-column prop="dfsdfddfj" label="件数" width="50"></el-table-column>
                    <el-table-column prop="dfsdfddfj" label="货损金额" width="80"></el-table-column>
                    <el-table-column prop="" label="状态" width="80">
                        <template>
                            <span class="ls sz">待发货</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dfsdfddft" label="货损说明"></el-table-column>
                    <el-table-column label="处理结果">
                        <template>
                            <span class=" ">不赔</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dfsdfddfj" label="实际理赔金额" width="110"></el-table-column>
                    <el-table-column label="操作" width="140">
                        <template slot-scope="scope">
                            <div>
                                <span class="ls sz" @click="hf('claimxq')">详情</span>


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
                forms: {
                    ddffra: '',
                    ddffrb: '',
                    ddffrc: ''
                },
                liste: ''
            }
        },
        components: {

        },
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
    .shhxeert {
        width: 200px
    }

    .shhxeert.ab {
        width: 340px
    }

    .dfgrterty {
        margin-left: 20px;
        width: 140px
    }

</style>
