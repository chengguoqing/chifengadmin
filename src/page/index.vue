<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页轮播图</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="btm mt10 pt20">
            <p>
                <el-button type="primary" @click="dialogVisible=true">添加轮播图</el-button>
            </p>
            <el-table class="mt20" :data="tableData" style="width: 100%" highlight-current-row>
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column label="封面">
                    <template slot-scope="scope">
                        <img :src="scope.row.imgurl" class="fengmewer">
                    </template>
                </el-table-column>

                <el-table-column label="跳转地址" prop="rurl"></el-table-column>
                <el-table-column label="添加时间">

                    <template slot-scope="scope">
                        <span v-html="time_d(scope.row.addtime)"></span>
                    </template>
                </el-table-column>

                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="del_user('shopp/indexbanner',scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </section>





        <el-dialog class="sddf_drrt" title="添加轮播图" :visible.sync="dialogVisible" width="600px">
            <el-form class="mt10" label-width="80px">

                <el-form-item label="上传封面">
                    <section class="avatar-uploader cz f_b br yj4 sz pr" @click="dialogVisible_er=true">
                        <img v-if="form_d.imgurl" :src="form_d.imgurl" class="avatar cz">
                        <i v-else class="el-icon-plus avatar-uploader-icon df_deert"></i>
                        <i class="el-icon-error closwertx" v-if="form_d.imgurl" @click.stop="form_d.imgurl=''"></i>
                    </section>

                </el-form-item>
                <el-form-item label="跳转地址">
                    <el-input placeholder="分类名称" v-model="form_d.rurl" size="small"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="add_user">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog class="sddf_drrtimg" :visible.sync="dialogVisible_er" width="890px">
            <dxupimg @close_s="dialogVisible_er=false" @queding="queding" :is_d="false" v-if="dialogVisible"></dxupimg>
        </el-dialog>

    </div>
</template>
<script>
    import {
        playlistMixin
    } from "@/biaoge.js"
    export default {
        data() {
            return {
                dialogVisible: false,
                dialogVisible_er: false,
                form_d: {
                    imgurl: "",
                    rurl: ""
                }
            }
        },
        mixins: [playlistMixin], //注册mixins
        components: {

        },
        methods: {
            async add_user() {
                this.form_d.type = 1
                await this.post("shopp/indexbanner", this.form_d)
                this.dialogVisible = false
                this.init()
            },
            queding(e) {
                this.form_d.imgurl = e
                this.dialogVisible_er = false

            },
            init() {
                this.getuser("shopp/indexbanner", {
                    type: 3
                })
            }
        },
        mounted() {
            this.init()
        },
    }

</script>
<style scoped>
    .fengmewer {
        width: 100px;
        height: 50px;
    }

</style>
