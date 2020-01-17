<!--运营分析-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            ＸＸ托运单位物流信息统计
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <div>
                   
                    <el-date-picker v-model="sdfdfa" type="month" placeholder="选择月"></el-date-picker>
                    <span class="fz14 ml10 mr10">至</span>
                    <el-date-picker v-model="sdfdfb" type="month" placeholder="选择月"></el-date-picker>

                    <el-button type="primary" class="ml20 sdfrt">查询</el-button>
                </div>
                <div class="mt30">
                    <div class="dsfrtxeeer parent">
                        <div class="dderrtts">
                            <kjhcder derttse="单量分布" jhshse="1"></kjhcder>
                        </div>
                        <div class="dderrtts">
                            <kjhcder derttse="运费分布" jhshse="2"></kjhcder>
                        </div>
                        <div class="dderrtts">
                            <kjhcder derttse="准点率" jhshse="3"></kjhcder>
                        </div>
                        <div class="dderrtts">
                            <kjhcder derttse="货损率" jhshse="4"></kjhcder>
                        </div>
                        <div class="dderrtts">
                            <kjhcder derttse="好评率" jhshse="5"></kjhcder>
                        </div>

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
                sdfdfa:'',
                sdfdfb:'',
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

    .parent {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 0px;
    }

</style>
