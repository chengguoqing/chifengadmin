<!--网点及运价 2019 1 7-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            网点运价
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <div class="hhcdeeert">
                    <el-form label-width="120px">
                        <el-form-item label="起始站：">
                            <el-cascader class="w100" placeholder="请输入省/市/区/镇" v-model="forme.sdfsdfa" :options="optseions"></el-cascader>
                        </el-form-item>

                        <el-form-item label="收货地址：">
                            <el-cascader class="w100" placeholder="请输入省/市/区/镇" v-model="forme.sdfsdfh" :options="chengshi"></el-cascader>
                            <p class="mt10">
                                <el-input placeholder="请输入详情地址" type="textarea" v-model.trim="forme.sdfsdfi"></el-input>
                            </p>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="货名：">
                                    <el-input v-model.trim="forme.sdfsdfb" placeholder="请输入货名"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="件数：">
                                    <el-input v-model.trim="forme.sdfsdfc" placeholder="请输入件数"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="重量(kg)：">
                                    <el-input v-model.trim="forme.sdfsdfd" placeholder="请输入重量"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="体积(m³)：">
                                    <el-input v-model.trim="forme.sdfsdfe" placeholder="请输入体积"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="配送方式：" class="fz12">
                            <el-radio v-model="forme.sdfsdff" label="1" @change="jhhdeety">
                                <span class="z6 fz12">自提</span>
                                <el-button v-if="forme.sdfsdff==1" type="primary" @click="dialogVisible=true" size="mini" class="ml10">自提网点选择</el-button>
                            </el-radio>
                            <el-radio v-model="forme.sdfsdff" label="2" @change="jhhdeety">
                                <span class="z6 fz12">送货</span>
                            </el-radio>
                        </el-form-item>
                        <el-form-item label="卸货：">
                            <el-select v-model="forme.sdfsdfg" filterable>
                                <el-option label="无" value="1"></el-option>
                                <el-option label="卸货（不上楼）" value="2"></el-option>
                                <el-option label="卸货（含上楼）" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div class="cen ">
                        <el-button type="primary" class="dfsfdrrt" @click="chauxns=true;cddrr=true">查询</el-button>
                        <el-button type="" class="ml20 dfsfdrrt">重置</el-button>
                    </div>

                    <el-row class="cderrttxe" v-if="forme.sdfsdff==1 && chauxns">
                        <el-col :span="12">
                            <span class="fz12 z6">自提运费： </span>
                        </el-col>
                        <el-col :span="12" class="tr">
                            <span class="fz12 z6">预计到达时间：5天 </span>
                        </el-col>
                        <el-col :span="12">
                            <span class="fz12 z6">网点编号：</span>
                        </el-col>
                        <el-col :span="12" class="tr">
                            <span class="fz12 z6"> 自提里程：</span>
                        </el-col>
                        <el-col :span="12">
                            <span class="fz12 z6">网点地址：</span>
                        </el-col>
                    </el-row>


                    <el-row class="cderrttxe" v-if="forme.sdfsdff==2 && chauxns">
                        <el-col :span="12">
                            <span class="fz12 z6">运价：300</span>
                        </el-col>
                        <el-col :span="12" class="tr">
                            <span class="fz12 z6">预计到达时间：5天</span>
                        </el-col>
                    </el-row>
                    <div class="cderrttxe fz12 z6 b row">
                        <span> 注：</span>
                        <span class="col">
                            1、长度超4.2米，宽度超2.4米，高度超2.8米的异形货，价格另报<br>
                            <span class="">2、大宗货物价格另报。</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog class="sddf_drrt" title="网点信息及地图" :visible.sync="dialogVisible" width="30%">
            <ditupup></ditupup>
        </el-dialog>
    </div>
</template>
<script>
    import ditupup from "@/components/ditupup"
    import {
        chengshi
    } from '@/chengshi'
    export default {
        data() {
            return {
                dialogVisible: false,
                chengshi: '',
                chauxns: false,
                cddrr: false,
                optseions: [{
                    value: 'zhinan',
                    label: '无锡',
                    children: [{
                        value: 'shejiyuanze',
                        label: '永康',
                        children: [{
                            value: 'yizhi',
                            label: '金华',
                            children: [{
                                value: 'yizhiwwer',
                                label: '武义'
                            }]
                        }]
                    }]
                }],
                forme: {
                    sdfsdfa: '',
                    sdfsdfb: '',
                    sdfsdfc: '',
                    sdfsdfd: '',
                    sdfsdfe: '',
                    sdfsdff: '',
                    sdfsdfg: '',
                    sdfsdfh: ''

                }
            }
        },
        components: {
            ditupup
        },
        methods: {
            jhhdeety(e) {
                this.chauxns = false
            }
        },
        mounted() {
            this.chengshi = chengshi
        }
    }

</script>
<style lang='scss' scoped>
    .hhcdeeert {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .dfsfdrrt {
        width: 120px
    }

    .cderrttxe {
        padding-top: 30px;
        padding-left: 120px;
    }

    .dfsdsrtt {
        width: 600px;
        margin-top: 20px
    }

</style>
