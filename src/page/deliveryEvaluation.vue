<!--发货评价-->
<template>
    <div>
        <p class="bbm pm20 fz16 bgff pt20 pl20">
            发货评价
        </p>
        <div class="sddrcrr">
            <div class="dfgdgr bgff cen">
                <el-form label-width="120px" class="mt30 tl f_b">
                    <el-form-item label="服务态度：">
                        <el-rate v-model="foesdd.asdfddfda" class="mt10"></el-rate>
                    </el-form-item>
                    <el-form-item label="物流时效：">
                        <el-rate v-model="foesdd.asdfddfdb" class="mt10"></el-rate>
                    </el-form-item>
                    <el-form-item label="安全到达：">
                        <el-rate v-model="foesdd.asdfddfdc" class="mt10"></el-rate>
                    </el-form-item>
                    <el-form-item label="整体评价：">
                        <el-radio v-model="foesdd.asdfddfdd" label="1">好评</el-radio>
                        <el-radio v-model="foesdd.asdfddfdd" label="2">中评</el-radio>
                        <el-radio v-model="foesdd.asdfddfdd" label="3">差评</el-radio>

                    </el-form-item>
                    <el-form-item label="评价内容：：">
                        <el-input rows="6" placeholder="请输入评价内容" type="textarea" v-model="foesdd.asdfddfde" class="wcssttxe"></el-input>
                    </el-form-item>
                    <el-form-item label="上传凭证：">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <div class="mt40">
                            <el-button type="primary" class="tijiaoeeer">提交</el-button>
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
                foesdd: {
                    asdfddfda: '',
                    asdfddfdb: '',
                    asdfddfdc: '',
                    asdfddfdd: '',
                    asdfddfde: '',
                    asdfddfdf: ''
                },
                dialogImageUrl: '',
                dialogVisible: false
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
    .wcssttxe {
        width: 400px;
    }
    .tijiaoeeer{
        width: 400px
    }

</style>
