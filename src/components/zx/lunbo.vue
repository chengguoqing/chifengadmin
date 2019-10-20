<template>
    <div>
        <el-popover placement="right" width="450" trigger="click">
            <section>
                <el-form ref="header" :model="from" label-width="80px">
                    <el-form-item label="选择模板:">
                        <el-row :gutter="10">
                            <el-col :span="8" v-for="(sd,idx) in mobandsew">
                                <section class="ssd_deert sz" :class="gousw==idx?'act':''" @click="gousw=idx">
                                    <img :src="sd.img" class="w100 cz">
                                    <p class="fz12 cen">
                                        {{sd.name}}
                                    </p>
                                </section>
                            </el-col>
                        </el-row>
                    </el-form-item>

                    <el-form-item label="高度" v-if="gousw==1||gousw==2">
                        <el-slider v-model="from.height" show-input :max="1000"> </el-slider>
                    </el-form-item>
                    <el-form-item label="宽度" v-if="gousw==2">
                        <el-slider v-model="from.width" show-input :max="1000"> </el-slider>
                    </el-form-item>
                    <el-form-item label="上下边距">
                        <el-slider v-model="from.marginTop" show-input :max="200"> </el-slider>
                    </el-form-item>
                    <el-form-item label="左右边距" v-if="gousw==2">
                        <el-slider v-model="from.marginLeft" show-input :max="200"> </el-slider>
                    </el-form-item>
                </el-form>
                <section class="shsgd_deert row pd mb10 pr" v-for="(sd,idx) in from.data">
                    <section class="ssd_j_der">
                        <img :src="sd.fm" class="cz">
                    </section>
                    <section class="col pl10">
                        <el-input placeholder="链接地址" v-model="sd.url"></el-input>

                    </section>
                    <i class="el-icon-error fz26 closerrttsw" @click="deleer(idx)"></i>
                </section>
                <section class="shsgd_deert" @click="dialogVisible=true">
                    <span class="ls"> + 添加广告图片</span> <br>
                    建议尺寸 750x300 像素
                </section>
            </section>
            <section class="pr" slot="reference">
                <section v-if="from.data.length>0">
                    <section v-if="gousw==0" :style="{'margin-top':from.marginTop+'px'}">
                        <section v-for="sd in from.data">
                            <img :src="sd.fm" class="w100 h100 cz">
                        </section>
                    </section>
                    <section class="pr dfg_rrert" :style="{height:from.height+'px','margin-top':from.marginTop+'px'}" v-if="gousw==1">
                        <van-swipe class="h100" :initial-swipe="2">
                            <van-swipe-item v-for="sd in from.data" class="h100">
                                <img :src="sd.fm" class="w100 h100">
                            </van-swipe-item>
                        </van-swipe>
                    </section>
                    <section v-if="gousw==2" class="ssd_jh_deeert" :style="{'margin-top':from.marginTop+'px'}">
                        <img :src="sd.fm" v-for="sd in from.data" class="cz" :style="{height:from.height+'px','width':from.width+'px','margin-left':from.marginLeft+'px'}">
                    </section>



                </section>
                <msg v-else>点击编辑广告位<br>建议尺寸750x300</msg>
            </section>

            <el-dialog class="sddf_drrtimg" :visible.sync="dialogVisible" width="890px">
                <dxupimg @close_s="dialogVisible=false" @queding="queding" :is_d="true" v-if="dialogVisible"></dxupimg>
            </el-dialog>

        </el-popover>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                gousw: 1,
                mobandsew: [{
                    name: "一行一个",
                    img: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/98eeef19-5eb5-4072-a6b1-3dcf459ce048.png",
                    id: 0
                }, {
                    name: "轮播海报",
                    img: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/a069bc44-1d5d-4edb-97ca-f40153cc5aef.png",
                    id: 1
                }, {
                    name: "小图横向滑动",
                    img: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/5661e5e3-b830-456b-81cf-7b17e2e975ea.png",
                    id: 2
                }],
                from: {
                    height: 200,
                    width: 60,
                    url_et: "",
                    marginTop: "",
                    marginLeft: 10,
                    data: []
                }
            }
        },
        components: {

        },
        methods: {
            queding(data) {
                this.dialogVisible = false
                data.map(a => {
                    this.from.data.push({
                        url: '',
                        fm: a
                    })
                })
            },
            deleer(idx) {
                this.from.data.splice(idx, 1)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfg_rrert {
        overflow: hidden
    }

    .shsgd_deert {
        border: 1px dashed #e0e0e0;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer
    }

    .ssd_j_der {
        width: 80px;
        height: 80px;
        border: 1px solid #e0e0e0;
        text-align: center;
        line-height: 80px;
    }

    .ssd_j_der img {
        max-width: 100%;
        max-height: 100%
    }

    .closerrttsw {
        position: absolute;
        right: -13px;
        top: -13px;
        cursor: pointer;
        display: none
    }

    .shsgd_deert:hover .closerrttsw {
        display: block
    }

    .ssd_jh_deeert {
        white-space: nowrap;
        overflow: auto
    }


    .ssd_jh_deeert::-webkit-scrollbar {
        height: 4px;
    }

    .ssd_jh_deeert::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 20px;
    }

    .ssd_jh_deeert::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        background: #fff
    }

</style>
