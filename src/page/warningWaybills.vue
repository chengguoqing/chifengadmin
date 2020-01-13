<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            预警运单一览表
        </p>
        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <el-row class="cen">
                    <el-col :span="6">
                        <div class="sz" @click="gtesse(0)">
                            <p class="fz20 b">
                                超时运单
                            </p>
                            <p class="b fz18 mt10" :class="idsd==0?'dfdrtyty':''">
                                5
                            </p>
                        </div>
                    </el-col>
                   <el-col :span="6">
                        <div class="sz"  @click="gtesse(1)">
                            <p class="fz20 b">
                                等通知/代收运单
                            </p>
                            <p class="b fz18 mt10" :class="idsd==1?'dfdrtyty':''">
                                5
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="sz"  @click="gtesse(2)">
                            <p class="fz20 b">
                                待发运单
                            </p>
                            <p class="b fz18 mt10" :class="idsd==2?'dfdrtyty':''">
                                5
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="6"  >
                        <div class="sz" @click="gtesse(3)">
                            <p class="fz20 b">
                                退货运单
                            </p>
                            <p class="b fz18 mt10" :class="idsd==3?'dfdrtyty':''">
                                5
                            </p>
                        </div>
                    </el-col>
                </el-row>
                <el-table :data="liste" class="mt20">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column label="操作" width="140" align="center">
                        <template slot-scope="scope">
                            <div>
                                <span class="ls sz" @click="hf('waybillDetails')">详情</span>
                                 <span class="ls sz ml10" @click="hf('WaybillTracking')">追踪</span>
                           
                                
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dfsdfddfa" label="状态" width="80">
                        <template>
                            <span class="">待发货</span>
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
                    <el-table-column prop="dfsdfddft" label="收货备注" width="120"></el-table-column>
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
                liste:'',
                idsd:0
            }
        },
        components: {},
        methods: {
            gtesse (idx) {
            this.idsd = idx || 0
            this.liste = new Myding().data
            }
        },
        mounted() {
            this.gtesse()
        }
    }

</script>
<style scoped>
    .dfdrtyty{
        color: #00a0e9 !important;
          text-decoration:underline
    }
</style>
