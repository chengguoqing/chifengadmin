<!--运营分析-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            ＸＸ托运单位物流信息统计
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <div>
                    <el-date-picker :default-time="['00:00:00', '23:59:59']" v-model="form.jhhssdfa" type="datetimerange" range-separator="-" start-placeholder="起始日期" end-placeholder="截至日期"></el-date-picker>
                    <el-button type="primary" class="ml20 sdfrt">查询</el-button>
                </div>
                <div class="mt30">
                    <div class="dsfrtxeeer">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <div class="dderrtts">
                                    <kjhcder derttse="单量分布"></kjhcder>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="dderrtts">
                                    <kjhcder  derttse="运费分布"></kjhcder>
                                </div>
                            </el-col>
                            <el-col :span=8>
                                <div class="dderrtts">
                                    <kjhcder  derttse="准点率"></kjhcder>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="dderrtts">
                                    <kjhcder  derttse="货损率"></kjhcder>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="dderrtts">
                                    <kjhcder  derttse="好评率"></kjhcder>
                                </div>
                            </el-col>

                        </el-row>

                    </div>
                    <p class="qc"></p>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import tuzhuai from "@/components/tuzhuai"
    import kjhcder from "@/components/kjhcder"

    export default {
        data() {
            return {
                form: {
                    jhhssdfa: ''
                },
                xddera: {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        bottom: 0,
                        left: 'center',
                        data: ['北京', '上海', '常州', '无锡', '杭州', '萧山', '西安', '大理']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: '北京'
                            },
                            {
                                value: 310,
                                name: '上海'
                            },
                            {
                                value: 234,
                                name: '常州'
                            },
                            {
                                value: 135,
                                name: '无锡'
                            },
                            {
                                value: 154,
                                name: '杭州'
                            },
                            {
                                value: 154,
                                name: '萧山'
                            },
                            {
                                value: 154,
                                name: '西安'
                            },
                            {
                                value: 154,
                                name: '大理'
                            }
                        ]
                    }]
                },
                xdderb: {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        bottom: 0,
                        left: 'center',
                        data: ['无锡', '杭州', '萧山', '西安', '大理']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 135,
                                name: '无锡'
                            },
                            {
                                value: 154,
                                name: '杭州'
                            },
                            {
                                value: 154,
                                name: '萧山'
                            },
                            {
                                value: 154,
                                name: '西安'
                            },
                            {
                                value: 154,
                                name: '大理'
                            }
                        ]
                    }]
                }
            }
        },
        components: {
            tuzhuai,
            kjhcder
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfdfrttxze {
        width: 530px;
        border: 1px solid #e0e0e0;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        border-right: 0;
        border-bottom: 0
    }

    .dfdfrttxze td {
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
    }

    .sdfrt {
        width: 150px
    }


    .dderrtts {
        margin-bottom: 20px
    }

</style>
