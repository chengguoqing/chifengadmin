<template>
	<div class="parent_dert">
	   <section class="keft_left">

           <ul>
        <li class="pt10 pm10 pd btm sz dsf_df_drt" v-for="sd in $store.state.user_list" @click="get_sdf(sd.targetId)">
            <img class="yj user_iconse cz fl" :src="sd.user_icon">
        <section class="ov pl10">
            <section class="dian fz15">
                <el-row >
                    <el-col :span="16" class="dian">{{sd.user_name}}</el-col>
                    <el-col :span="8" class="z9 fz12 tr"><span v-html="time_k(sd.receivedTime)"></span></el-col>
                </el-row>
            </section>
            <p class="z9 fz12 dian">
            {{sd.content}}
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
                        <li class="msg" v-for="(sd,idx) in $store.state.msg_list" :class="sd.ty==2?'ab':''">
                            <img :src="sd.user_icon" class="yj user_icon_er yj fl">
                        <section class="ov pl20 pt5">
      <section class="pr dsf_d_drtx pr">
          <p class="sd_j_drrt"></p>
                   {{sd.content}}
                        </section>
            </section>
                            <p class="qc"></p>
                        </li>
                           
    
                    </ul>
             
             
            </section>
         <section class="btm pt10">
           <el-input type="textarea" v-model="kefu_text"  placeholder="请输入内容..." rows="7" class="dsf_dertxc" ></el-input>
             
             <section class="pd mt10">
                <el-button type="primary" @click="fasxi">发送</el-button>
                </section>
    </section>
         
         
    </section>
	</div>
</template>
<script>
    import {
        liaotian_wai
    } from "@/assets/js/liaotian"
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        mixins: [liaotian_wai],
        methods: {
            fasxi() {
                var sd_drte = this.$cookies.get("user_info"),
                    th = this
                var msg = new RongIMLib.TextMessage({
                    content: this.kefu_text,
                    extra: {
                        user_icon: sd_drte.data.touxiang,
                        user_name: sd_drte.data.user_name,
                        order_id: 16
                    }
                });
                var conversationType = RongIMLib.ConversationType.PRIVATE; // 单聊, 其他会话选择相应的消息类型即可
                RongIMClient.getInstance().sendMessage(conversationType, this.targetId, msg, {
                    onSuccess: function(message) {
                        console.log(message);
                        // message 为发送的消息对象并且包含服务器返回的消息唯一 Id 和发送消息时间戳
                        th.set_msgtext(message, 2)
                        th.$store.state.msg_list = JSON.parse(localStorage[message.targetId])
                        th.kefu_text=""
                    },
                    onError: function(errorCode, message) {
                        var info = '';
                        switch (errorCode) {
                            case RongIMLib.ErrorCode.TIMEOUT:
                                info = '超时';
                                break;
                            case RongIMLib.ErrorCode.UNKNOWN:
                                info = '未知错误';
                                break;
                            case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                                info = '在黑名单中，无法向对方发送消息';
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                                info = '不在讨论组中';
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_GROUP:
                                info = '不在群组中';
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                                info = '不在聊天室中';
                                break;
                        }
                        console.log('发送失败: ' + info + errorCode);
                    }
                });
            }
        },
        mounted() {
            var th = this
            if (localStorage.liao_user) {
                th.$store.state.user_list = JSON.parse(localStorage.liao_user)
                th.get_sdf(th.$store.state.user_list[0].targetId)
                th.targetId = th.$store.state.user_list[0].targetId
            
            }

            this.init_liao()
            this.jieshou()
        },
        computed: {
            msg_list_g() {
                return this.$store.state.msg_list;
            }
        },
        watch: {
           msg_list_g: {
                handler: function() {
                     setTimeout(a=> {
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
