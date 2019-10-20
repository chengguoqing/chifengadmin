<template>
    <div class="fenswertt">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="btm mt10 pt20">
            <section class="tr">
                <el-button type="primary" @click="dialogVisible=true">添加分类</el-button>
            </section>
            <el-tree :data="data" :props="defaultProps">
                <span class="custom-tree-node fz14 w100 f_b" slot-scope="{ node, data }">
                    <img src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/63e5087d-cc8e-4756-a686-841010a0fc8d.png" class="ssd_derettw cz"> {{node.label}}
                      <span class="fr fz12 ls">修改</span>
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
                        <el-col :span="12">
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
                        <i class="el-icon-error closwertx" v-if="form_d.url" @click.stop ="form_d.url=''"></i>
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
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                fenlert: [],
                fenlertb: [],
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
            sousuode() {
                this.getuser("shopp/get_sp", {
                    name: this.name_dx
                })
            },
            add_user(tabname) {
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
                this.post("shopp/fenlei", this.form_d)
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
                this.fenlert = await this.post("shopp/fenlei", {
                    tabname: 'fenlei',
                    type: 3,
                    page: 1
                })
                this.fenlert = this.fenlert.data
            },
            async getjib(ddfee) {
                this.ssd_e =1
                this.form_d.fjs=''
                this.fenlertb = await this.post("shopp/fenlei", {
                    tabname: 'fenleier',
                    type: 3,
                    page: 1,
                    fj: this.form_d.fj
                })
                this.fenlertb = this.fenlertb.data
            },
            getjic(ddfee) {
                 this.ssd_e =2
            }
        },
        mounted() {
            this.getji()
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
    .closwertx{
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 18px;
    }

</style>
