<template>
    <div class="fenswertt">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="btm mt10 pt20">
            <section class="tr">
                <el-button type="primary" @click="getji();dialogVisible=true">添加分类</el-button>
            </section>
            <el-tree :data="data" :props="defaultProps">
                <span class="custom-tree-node fz14 w100 f_b" slot-scope="{ node, data }">
                    <img :src="data.url" class="ssd_derettw cz" v-if="data.url"> {{data.name}}
                    <span class="fr fz12 ls ml20" @click="deled(data.code,data.id)">删除</span>
                    <!--                    <span class="fr fz12 ls">修改</span>-->

                </span>
            </el-tree>


        </div>
        <el-dialog class="sddf_drrt" title="添加分类" :visible.sync="dialogVisible" width="500px">
            <el-form class="mt10" label-width="80px">
                <el-form-item label="上级">
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <el-select v-model="form_d.fj" placeholder="上级分类名称" size="small" @change="getjib">
                                <el-option :label="sd.name" :value="sd.id" v-for="sd in fenlert"></el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="12" v-if="ssd_e>=1">
                            <el-select v-model="form_d.fjs" placeholder="上级分类名称" size="small" @change="getjic">
                                <el-option :label="sd.name" :value="sd.id" v-for="sd in fenlertb"></el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="上传封面">
                    <section class="avatar-uploader cz f_b br yj4 sz pr" @click="dialogVisible_er=true">
                        <img v-if="form_d.url" :src="form_d.url" class="avatar cz">
                        <i v-else class="el-icon-plus avatar-uploader-icon df_deert"></i>
                        <i class="el-icon-error closwertx" v-if="form_d.url" @click.stop="form_d.url=''"></i>
                    </section>

                </el-form-item>
                <el-form-item label="分类名称">
                    <el-input placeholder="分类名称" v-model="form_d.name" size="small"></el-input>
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
                shshda: "",
                dialogVisible: false,
                dialogVisible_er: false,
                name_dx: "",
                ssd_e: 0,
                form_d: {
                    name: "",
                    url: "",
                    fj: "",
                    fjs: "",
                    type: 1
                },
                data: [],
                fenlert: [{
                    id: '',
                    name: '一级类目'
                }],
                fenlertb: [{
                    id: '',
                    name: '二级类目'
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        components: {

        },
        mixins: [playlistMixin], //注册mixins
        methods: {
            init() {
                this.fenlert = [{
                    id: '',
                    name: '一级类目'
                }]
                this.fenlertb = [{
                    id: '',
                    name: '二级类目'
                }]
            },
            sousuode() {
                this.getuser("shopp/get_sp", {
                    name: this.name_dx
                })
            },
            async add_user(tabname) {
                if (!this.form_d.name) {
                    this.$message.error('请输入分类名称');
                    return
                }
                this.form_d.tabname = 'fenlei'
                if (this.ssd_e == 1) {
                    this.form_d.tabname = 'fenleier'
                }
                if (this.ssd_e == 2) {
                    this.form_d.tabname = 'fenleisan'
                }
                await this.post("shopp/fenlei", this.form_d)
                this.gtelist()
                this.dialogVisible = false
            },
            bianji_e(e) {
                this.form_d = e
                this.form_d.type = 2
                this.dialogVisible = true
            },
            queding(e) {
                this.form_d.url = e
                this.dialogVisible_er = false
            },
            async getji(ddfee) {
               this.fenlert = [{
                    id: '',
                    name: '一级类目'
                }]
                let ssd_deer = await this.post("shopp/fenlei", {
                    tabname: 'fenlei',
                    type: 3,
                    page: 1
                })
                ssd_deer.data.map(a => {
                    this.fenlert.push(a)
                })
            },
            async getjib(ddfee) {
                if (!this.form_d.fj) {
                    this.ssd_e = 0
                    return
                }
                this.fenlertb = [{
                    id: '',
                    name: '二级类目'
                }]
                this.ssd_e = 1
                this.form_d.fjs = ''
                let ssd_dertx = await this.post("shopp/fenlei", {
                    tabname: 'fenleier',
                    type: 3,
                    page: 1,
                    fj: this.form_d.fj
                })
                ssd_dertx.data.map(a => {
                    this.fenlertb.push(a)
                })
            },
            getjic(ddfee) {
                this.ssd_e = 2
            },
            async gtelist() {
                let sddert = await this.post("shopp/getfenlei")
                this.data = sddert
            },
            async deled(code,id) {
                await this.post("shopp/delect",{code:code,id:id})
                this.gtelist()
            }
        },
        mounted() {
            this.gtelist()
        },
    }

</script>
<style>
    .fenswertt .el-tree-node__content {
        height: 50px !important;
    }

</style>
<style scoped>
    .sd_jh_dert ul li:hover {
        cursor: pointer;
        background: #f8f8f8
    }

    .ssd_derettw {
        width: 30px;
        height: 30px;
    }

   

</style>
