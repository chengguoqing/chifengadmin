<!--在线下单-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            在线下单
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <el-button type="primary">＋新增运单</el-button>
                <el-button type="primary">↓保存运单</el-button>
                <el-button type="primary">打印运单</el-button>
                <el-button type="primary">打印标签</el-button>


                <el-form label-width="100px" class="mt30">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="运单单号：">
                                <span>191110025</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="运单日期：">
                                2019-12-12 12:12
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="到达日期：">
                                2019-12-12 12:12
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="手工单号：">
                                <el-input placeholder="请输入手工单号" v-model="forme.dsfdsfdfa"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="起始站：">
                                <el-cascader class="w100" v-model="forme.dsfdsfdfb" :options="optseions"></el-cascader>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="到达站：">
                                <el-cascader class="w100" v-model="forme.dsfdsfdfc" :options="chengshi"></el-cascader>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="xderrtsweer">
                        <span>收发货人</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="发货人：">
                                李四
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="发货电话：">
                                13125240016
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="所属网点：">
                                所属网点所属网点所属网点所属网点
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="收件人：">
                                <el-input placeholder="请输入收件人" v-model="forme.dsfdsfdfe"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="收货电话：">
                                <el-input placeholder="请输入收货电话" v-model="forme.dsfdsfdff"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="收货地址：">
                                <el-input placeholder="请输入收货地址" v-model="forme.dsfdsfdfg"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="xderrtsweer mb10">
                        <span>货物信息</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="货物名称：">
                                <el-input placeholder="请输入货物名称" v-model="forme.dsfdsfdfh"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="包装：">
                                <el-input placeholder="请输入包装" v-model="forme.dsfdsfdfi"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="件数：">
                                <el-input placeholder="请输入件数" v-model="forme.dsfdsfdfj"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="重量（kg）：">
                                <el-input placeholder="请输入重量" v-model="forme.dsfdsfdfk"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="体积（m³）：">
                                <el-input placeholder="请输入体积" v-model="forme.dsfdsfdfl"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="xderrtsweer mb10">
                        <span>配送信息</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="配送方式：" v-model="forme.dsfdsfdxda">
                                <div class="xcdeeerertt">
                                    <el-radio label="自提" v-model="forme.dsfdsfdxdq"></el-radio>
                                    <el-button v-if="forme.dsfdsfdxdq=='自提'" type="primary" @click="dialogVisible=true" size="mini" class="ml10">自提网点选择</el-button>
                                    <el-radio label="送货" class="" v-model="forme.dsfdsfdxdq"></el-radio>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="网点编号：">
                                123446
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="网点地址：">
                                网点地址网点地址网点地址网点地址
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="是否等通知：">

                                <div class="f_b ">
                                    <el-checkbox v-model="forme.dsfdsfdfw">等通知</el-checkbox>
                                </div>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="卸货：">
                                <div class="dsdffdgtxe">
                                    <el-select placeholder="卸货" v-model="forme.dsfdsfdfq">
                                        <el-option label="无" value="1"></el-option>
                                        <el-option label="卸货（不上楼）" value="2"></el-option>
                                        <el-option label="卸货（含上楼）" value="3"></el-option>
                                    </el-select>
                                </div>

                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="回单类型：">
                                <el-select v-model="forme.dsfdsfdxdh" class="w100" filterable>
                                    <el-option label="回单" value="1"></el-option>
                                    <el-option label="收条" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <div class="xderrtsweer mb10">
                        <span>费用信息</span>
                    </div>
                    <el-row :gutter="20">

                        <el-col :span="24">
                            <el-form-item label="总运费：">
                                <div class="xeeeertt">
                                    <el-input placeholder="请输入总运费" v-model="forme.dsfdsfdxdd"></el-input>

                                </div>
                                <el-button type="primary" size="mini" class="ml10">生成运费</el-button>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="现付：">
                                <el-input placeholder="请输入现付" v-model="forme.dsfdsfdxde"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="到付：">
                                <el-input placeholder="请输入到付" v-model="forme.dsfdsfdxdf"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="欠付：">
                                <el-input placeholder="请输入欠付" v-model="forme.dsfdsfdxdg"></el-input>
                            </el-form-item>
                        </el-col>


                        <el-col :span="8">
                            <el-form-item label="代收款：">
                                <el-input placeholder="请输入代收款" v-model="forme.dsfdsfdxdi"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="代垫费：">
                                <el-input placeholder="请输入代垫费" v-model="forme.dsfdsfdxdj"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="">
                                &nbsp;
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="收货备注：">
                                <el-input type="textarea" placeholder="请输入收货备注" v-model="forme.dsfdsfdxdk"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>




            </div>
        </div>
        <el-dialog class="sddf_drrt" title="网点信息及地图" :visible.sync="dialogVisible" width="30%">
            <ditupup></ditupup>
        </el-dialog>
    </div>
</template>
<script>
    import {
        chengshi
    } from '@/chengshi'
    import ditupup from "@/components/ditupup"
    export default {
        data() {
            return {
                dialogVisible: false,
                chengshi: '',
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
                    dsfdsfdfa: '',
                    dsfdsfdfb: '',
                    dsfdsfdfc: '',
                    dsfdsfdfd: '',
                    dsfdsfdfe: '',
                    dsfdsfdff: '',
                    dsfdsfdfg: '',
                    dsfdsfdfh: '',
                    dsfdsfdfi: '',
                    dsfdsfdfj: '',
                    dsfdsfdfk: '',
                    dsfdsfdfl: '',
                    dsfdsfdfq: '',
                    dsfdsfdfw: '',
                    dsfdsfdxda: '',
                    dsfdsfdxdb: '',
                    dsfdsfdxdc: '',
                    dsfdsfdxdd: '',
                    dsfdsfdxde: '',
                    dsfdsfdxdf: '',
                    dsfdsfdxdg: '',
                    dsfdsfdxdh: '',
                    dsfdsfdxdi: '',
                    dsfdsfdxdj: '',
                    dsfdsfdxdk: '',
                    dsfdsfdxdq: ''
                }
            }
        },
        components: {
            ditupup
        },
        methods: {

        },
        mounted() {
            this.chengshi = chengshi
        },
    }

</script>
<style>
    .sddrcrr .el-form-item__label {
        text-align: left;
    }

</style>
<style scoped>
    .dsdffdgtxe {
        display: inline-block;
        width: 200px;
    }

    .dsfdseerxe {
        position: relative;
        left: -25px;
    }

    .xcdeeerertt {
        height: 30px;
    }

    .xderrtsweer {
        font-size: 12px;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 4px;
    }

    .xderrtsweer span {
        background: #409EFF;
        color: #fff;
        padding: 4px 10px;
    }

    .xeeeertt {
        width: 200px;
        display: inline-block
    }

</style>
