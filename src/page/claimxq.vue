<!--理赔详情-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            理赔详情
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff">
                <el-form label-width="120px" class="mt30">
                    <el-form-item label="运单编号：">
                        191110045
                    </el-form-item>
                    <el-form-item label="货损金额：">
                      1800
                    </el-form-item>
                    <el-form-item label="货损说明：">
                       一辆电动车已损坏，另一辆有刮擦。
                    </el-form-item>
                    <el-form-item label="凭证：">
                       <img src="http://duxinggj.com/www/static/img/2.jpg" class="dtretxewe cz" v-for="sd in 3">
                    </el-form-item>
                    <el-form-item label="处理说明：">
                       一辆电动车已损坏，另一辆有刮擦。
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
                }
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
    .dtretxewe{
        border-radius: 4px;
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
</style>
