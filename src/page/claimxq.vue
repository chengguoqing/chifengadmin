<!--理赔详情-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            理赔详情
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff cen">
                <el-form label-width="120px" class="mt30 tl f_b">
                    <el-form-item label="运单编号：">
                        191110045
                    </el-form-item>
                    <el-form-item label="货损金额：">
                        1800
                    </el-form-item>
                    <el-form-item label="货损说明：">
                        一辆电动车已损坏，另一辆有刮擦。
                    </el-form-item>
                    <el-form-item label="">
                        <el-image v-for="sd in 3" class="dtretxewe" src="http://duxinggj.com/www/static/img/2.jpg" :preview-src-list="srcList"></el-image>

                    </el-form-item>
                    <el-form-item label="处理说明：">
                      <div class="dstrets">
                            一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。一辆电动车已损坏，另一辆有刮擦。
                      </div>
                    </el-form-item>

                    <el-form-item label="实际理赔金额：">
                        1800
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
                dsfdsr: true,
                dialogImageUrl: '',
                dialogVisible: false,
                foesdd: {
                    asdfddfda: '',
                    asdfddfdb: '',
                    asdfddfdc: '',
                    asdfddfdd: '',
                    asdfddfde: ''
                },
                url: 'http://duxinggj.com/www/static/img/2.jpg',
                srcList: [
                    'http://duxinggj.com/www/static/img/2.jpg',
                    'http://duxinggj.com/www/static/img/2.jpg'
                ]
            }
        },
        components: {},
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        mounted() {}
    }

</script>
<style lang='scss' scoped>
    .sdfsdfrr {
        width: 250px;
    }

    .sdfsdfrr.ab {
        width: 400px
    }

    .tijiaoeeer {
        width: 400px
    }

    .dtretxewe {
        border-radius: 4px;
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
    .dstrets{
        width: 500px;
        line-height: 2;
        padding-top: 5px;
    }
</style>
