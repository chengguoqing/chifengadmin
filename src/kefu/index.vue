<template>
	<div class="parent_dert">
	   <section class="keft_left">
           <ul>
        <li class="pt10 pm10 pd btm sz dsf_df_drt" v-for="sd in $store.state.getsessions" @click="list_click(sd)">
            <img class="yj user_iconse cz fl" :src="sd.user_icon" >
        <section class="ov pl10">
            <section class="dian fz15">
                <el-row >
                    <el-col :span="16" class="dian">{{sd.target}}</el-col>
                    <el-col :span="8" class="z9 fz12 tr"><span v-html="time_k(sd.time)"></span></el-col>
                </el-row>
            </section>
            <p class="z9 fz12 dian">
            {{sd.msg}}
            </p>
        </section>
            <p class="qc"></p>
    </li>
        </ul>
    </section>
     <section class="keft_right "> 
    
         <section class="sd_jjt_der pl20 pr20" ref="xiaoshi_e" id="sd_der">
                <section class="cen">
                    <p class="fz12 z9">06-15 13:58:33 系统自动分配，客户被 18011887073 接入</p>
                    <section class="yj4 br df_jh_drt tl">
                    <img src="https://img.yzcdn.cn/upload_files/2017/06/19/Fme9JZz7T1rB8sSLnsnCk2gILNp_.png"  class="fengm_drt cz fl">
                    <section class="ov pl10 pr10">
                        <p class="fz12 z9 mt5">用户来自 店铺商品详情页</p>
                        <section class="z3 fz14 mt5">
                            <el-row >
                                <el-col :span="18" class="dian">测试商品二</el-col>
                             <el-col :span="6" class="red tr fz12">￥200</el-col>
                            </el-row>
                        </section>
                    </section>
                        
                        <p class="qc"></p>
                    </section>
                </section>
             <!--                    消息列表-->
                    <ul class="mess_list mt20">
                        <li class="msg" v-for="(sd,idx) in $store.state.get_msglist" :class="sd.flow=='in'?'ab':''">
                            <img :src="sd.user_icon" class="yj user_icon_er yj fl">
                        <section class="ov pl20 pt5">
      <section class="pr dsf_d_drtx pr">
          <p class="sd_j_drrt"></p>
                   {{sd.msg}}
                        </section>
            </section>
                            <p class="qc"></p>
                        </li>
                           
    
                    </ul>
             
             
            </section>
         <section class="btm pt10">
           <el-input type="textarea" v-model="kefu_text"  placeholder="请输入内容..." rows="7" class="dsf_dertxc" ></el-input>
             
             <section class="pd mt10">
                <el-button type="primary" @click="fasxiert">发送</el-button>
                </section>
    </section>
         
         
    </section>
   
	</div>
</template>
<script>
    export default {
        data() {
            return {
                kefu_text: "",
                session: ""

            }
        },
        components: {

        },
        methods: {
            list_click(sd) {
                console.log(sd);
                this.session = sd.target
                this.$store.dispatch('get_sdf', sd.sessionId)
            },
            fasxiert() {
                var value = Math.ceil(Math.random() * 3);
                var content = {
                    user_icon: this.$cookies.get("user_info").data.touxiang,
                    data: {
                        value: this.kefu_text
                    }
                };
                var th=this
                var msg = this.$store.state.nim.sendCustomMsg({
                    scene: 'p2p',
                    to: th.session,
                    content: JSON.stringify(content),
                    done: function sendMsgDone(err) {
                        
                    }
                });
                  this.$store.dispatch('pushMsg_er', msg)
                setTimeout(a => {
                    this.$refs.xiaoshi_e.scrollTop = (this.$refs.xiaoshi_e.scrollHeight + 500);
                }, 50);
            }
        },
        mounted() {},
        computed: {
            gh_sdfd() {
                return this.$store.state.get_msglist
            }
        },
        watch: {
            gh_sdfd: {
                handler: function() {
                    setTimeout(a => {
                        this.$refs.xiaoshi_e.scrollTop = (this.$refs.xiaoshi_e.scrollHeight + 500);
                    }, 50);
                },
                deep: true
            }
        }
    }

</script>
<style lang="scss" scoped>
    .parent_dert {
        height: 90vh;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 5fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        .keft_left {
            grid-area: 1 / 1 / 2 / 2;
            border-right: 1px solid #e0e0e0;
            background: #F2F2F2;
            max-width: 280px;
            min-width: 200px;
            max-height: 90vh;
            overflow: auto;
            .user_iconse {
                width: 40px;
                height: 40px;
            }
            .dsf_df_drt {
                background: #fff
            }
            .dsf_df_drt:hover {
                background-color: #f8f8f8;
            }
        }
        .keft_right {
            max-height: 90vh;
            overflow: auto;
            grid-area: 1 / 2 / 2 / 3;
            .sd_jjt_der {
                height: 600px;
                overflow: auto
            }
            .df_jh_drt {
                width: 300px;
                margin: auto;
                margin-top: 10px;
                .fengm_drt {
                    width: 50px;
                    height: 50px;
                }
            }
            .mess_list {
                li.msg {
                    .user_icon_er {
                        width: 40px;
                        height: 40px;
                    }
                    margin-bottom: 10px;
                    .dsf_d_drtx {
                        background: #F8F8F8;
                        padding: 10px;
                        display: inline-block;
                        font-size: 12px;
                        border-radius: 4px;
                        .sd_j_drrt {
                            position: absolute;
                            background: #F8F8F8;
                            width: 10px;
                            height: 10px;
                            left: -5px;
                            top: 15px;
                            transform: rotate(45deg)
                        }
                    }
                }
                li.ab.msg {
                    .user_icon_er {
                        float: right
                    }
                    .ov.pl20 {
                        text-align: right;
                        padding-left: 0px !important;
                        padding-right: 20px;
                    }
                    .sd_j_drrt {
                        left: inherit;
                        right: -5px;
                    }
                }

            }
        }

    }

</style>
<style>
    .dsf_dertxc textarea {
        border: 0 !important;
    }

</style>
