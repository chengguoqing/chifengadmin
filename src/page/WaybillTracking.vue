<!--运单追踪-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            运单追踪
        </p>
        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <el-steps direction="vertical" :active="1" class="sdfttsew" finish-status="success">
                    <el-step title="11-13   12：26" description="已到站"></el-step>
                    <el-step title="11-12   20:22 " description="已发车，配载车辆：XXXX"></el-step>
                    <el-step title="11-10    16：48" description="已制单"></el-step>
                </el-steps>
                <div class="mt20 dfsdertrtx pr">
                    <el-image class="cceeerrt" src="http://duxinggj.com/www/static/img/2.jpg" :preview-src-list="srcList"></el-image>

                    <el-button type="primary" class="dfsdertrtx w100">查看图片</el-button>
                </div>
                <el-form label-width="120px" class="sdfrttxwee mt20">
                    <el-form-item label="货物名称：">
                        助力电动车
                    </el-form-item>
                    <el-form-item label="托运日期：">
                        2019-11-10
                    </el-form-item>
                    <el-form-item label="件数：">
                        3
                    </el-form-item>
                    <el-form-item label="起始站：">
                        江苏省 无锡市 锡山区 洛舍镇
                    </el-form-item>
                    <el-form-item label="到达站：">
                        江苏省 无锡市 锡山区 洛舍镇
                    </el-form-item>
                    <el-form-item label="客服查询：">
                        <span class="ls"> 0510-83796616</span>
                    </el-form-item>
                </el-form>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                srcList: [
                    'http://duxinggj.com/www/static/img/2.jpg'
                ]
            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style>
    .sdfrttxwee .el-form-item {
        margin-bottom: 0 !important
    }
    .cceeerrt img.el-image__inner.el-image__preview{
        opacity: 0
    }

</style>
<style scoped>
    .sdfttsew {
        height: 250px;
    }

    .dfsdertrtx {
        width: 250px
    }
    .cceeerrt{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

</style>
