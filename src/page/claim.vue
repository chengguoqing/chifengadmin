<!--理赔申请-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            理赔申请
        </p>

        <div class="sddrcrr">
            <div class="dfgdgr bgff cen">
                <el-form label-width="120px" class="mt30 tl f_b">
                    <el-form-item label="运单编号：">
                        <el-input value="191110045" disabled class="sdfsdfrr"></el-input>
                    </el-form-item>
                    <el-form-item label="货损金额：">
                        <el-input placeholder="货损金额" class="sdfsdfrr" v-model="foesdd.asdfddfda"></el-input>
                    </el-form-item>
                    <el-form-item label="货损说明：">
                        <el-input type="textarea" rows="6" placeholder="请输入货损说明" class="sdfsdfrr ab" v-model="foesdd.asdfddfdb"></el-input>
                    </el-form-item>
                    <el-form-item label="上传凭证：">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <div class="mt40 tijiaoeeer cen">
                            <el-checkbox-group v-model="dsfdsr" class="f_b">
                                <el-checkbox label="我已阅读并同意"></el-checkbox>
                            </el-checkbox-group>
                            <span class="ls fz12 sz" @click="hf('ClaimsThat')"> 理赔说明</span>
                            <el-button type="primary" class="w100">提交</el-button>
                        </div>
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
                dsfdsr: false,
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

</style>
