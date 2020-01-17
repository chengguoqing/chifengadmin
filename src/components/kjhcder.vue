<!--运营分析-->
<template>
    <div>
        <div class="xdeertt ">
           <p class="cen b fz18  irseerr">
              {{derttse}} 
           </p>
           <div class="cen">
                <tuzhuai :shuju="xddera" class="f_b"></tuzhuai>
               
           </div>
            <div class="mt20">
                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==1">
                    <thead>
                        <tr>
                            <td>地区</td>
                            <td>票数</td>
                            <td>占比</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="sd in 6">
                            <td>北京</td>
                            <td>53</td>
                            <td>10%</td>
                        </tr>
                    </tbody>
                </table>
                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==2">
                   <thead>
                        <tr>
                            <td>地区</td>
                            <td>票数</td>
                            <td>占比</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="sd in 6">
                            <td>北京</td>
                            <td>53</td>
                            <td>10%</td>
                        </tr>
                    </tbody>
                </table>
                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==3">
                    <thead>
                        <tr>
                            <td>总票数</td>
                            <td>600</td>
                            <td>占比</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>正常</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        <tr>
                            <td>超时一天</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        <tr>
                            <td>超时两天</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        <tr>
                            <td>超时三天</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        
                    </tbody>
                </table>
                
                
                
                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==4">
                    <thead>
                        <tr>
                            <td>总票数</td>
                            <td>600</td>
                            <td>占比</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>正常</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        <tr >
                            <td>货损</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                    </tbody>
                </table>
                 <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==5">
                    <thead>
                        <tr>
                            <td>总票数</td>
                            <td>600</td>
                            <td>占比</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>好评</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        <tr >
                            <td>中评</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                        <tr >
                            <td>差评</td>
                            <td>577</td>
                            <td>96.1%</td>
                        </tr>
                         <tr >
                            <td>服务态度</td>
                            <td colspan="2">4.9</td>
                        </tr>
                         <tr >
                            <td>物流时效</td>
                            <td colspan="2">4.9</td>
                        </tr>
                         <tr >
                            <td>安全到达</td>
                            <td colspan="2">4.9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
    import tuzhuai from "@/components/tuzhuai"
    export default {
            props: ['derttse','jhshse'],
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
                        bottom: '0',
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
                }
            }
        },
        components: {
            tuzhuai
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfdfrttxze {
        width: 100%;
        border: 1px solid #e0e0e0;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        border-right: 0;
        border-bottom: 0
    }
    .irseerr{
        position: relative;
        top: 50px;
    }

    .dfdfrttxze td {
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
    }

    .sdfrt {
        width: 150px
    }

</style>
