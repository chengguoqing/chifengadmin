<!--客户评价-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            客户评价
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <p class="fz14 z9">
                    说明：客户签收7天后，系统默认好评。
                </p>
                <div class="mt20">
                    <el-checkbox v-model="checkeda">好评</el-checkbox>
                    <el-checkbox v-model="checkedb">中评</el-checkbox>
                    <el-checkbox v-model="checkedc">差评</el-checkbox>
                    <el-checkbox v-model="checkedd">已回复</el-checkbox>
                    <el-checkbox v-model="checkede">待回复</el-checkbox>
                    <el-button type="primary" class="dfgrterty">查询</el-button>
                </div>

                <div class="mt20">
                    <p class="fz16 z3">评价内容：</p>
                    <div class="sxcrrrtxe fz14 z6" v-for="sd in 4">
                        <div class="row pm10">
                            <div class="col">
                                托运单位：荣威电动车
                            </div>
                            <div class="tr ls">
                                中评
                            </div>
                        </div>
                        <el-row>
                            <el-col :span="7">运单时间：2019-11-12</el-col>
                            <el-col :span="8">运单编号：201911001</el-col>
                            <el-col :span="5">到达站：上海</el-col>
                            <el-col :span="4">收货人：王慧</el-col>
                        </el-row>
                        <div class="mt10">
                            评价内容：货物很及时，就是派送员有点慢，联系不上。
                        </div>
                        <div class="mt10">
                            <el-image  v-for="sd in 3" class="dtretxewe" src="http://duxinggj.com/www/static/img/2.jpg" :preview-src-list="srcList"></el-image>

                        </div>

                        <div class="mt10">
                            处理回复：公司已倾听你的意见，感谢您的评价。
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkeda: '',
                checkedb: '',
                checkedc: '',
                checkedd: '',
                checkede: '',
                url: 'http://duxinggj.com/www/static/img/2.jpg',
                srcList: [
                    'http://duxinggj.com/www/static/img/2.jpg',
                    'http://duxinggj.com/www/static/img/2.jpg'
                ]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfgrterty {
        margin-left: 20px;
        width: 140px
    }

    .sxcrrrtxe {
        background: #f8f8f8;
        padding: 15px 10px;
        width: 570px;
        margin-top: 10px;
        border-radius: 4px;
    }

    .dtretxewe {
        border-radius: 4px;
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }

</style>
