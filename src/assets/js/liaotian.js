import Vue from 'vue'
export let liaotian_wai = {
    data() {
        return {
            kefu_text: "",
            targetId: "",
            df_crrtt: ""
        }
    },
    methods: {
        get_sdf(targetId) {
            this.targetId = targetId
            this.$store.state.targetId_vuex = targetId
            console.log(this.$store.state.targetId_vuex);
            this.$store.state.msg_list = JSON.parse(localStorage[targetId])
        },
        jieshou(call) {
            let th = this
            // 消息监听器
            RongIMClient.setOnReceiveMessageListener({
                // 接收到的消息
                onReceived: function (message) {
                    // 判断消息类型
                    switch (message.messageType) {
                        case RongIMClient.MessageType.TextMessage:
                          
                            // message.content.content => 文字内容
                            th.set_ltlist(message)
                            th.$store.state.user_list = JSON.parse(localStorage.liao_user)
                            th.set_msgtext(message, 1)

                          
                            if (th.$store.state.targetId_vuex == message.targetId) {
                                th.$store.state.msg_list = JSON.parse(localStorage[message.targetId])
                            }

                            break;
                        case RongIMClient.MessageType.VoiceMessage:
                            // message.content.content => 格式为 AMR 的音频 base64
                            break;
                        case RongIMClient.MessageType.ImageMessage:
                            // message.content.content => 图片缩略图 base64
                            // message.content.imageUri => 原图 URL
                            break;
                        case RongIMClient.MessageType.LocationMessage:
                            // message.content.latiude => 纬度
                            // message.content.longitude => 经度
                            // message.content.content => 位置图片 base64
                            break;
                        case RongIMClient.MessageType.RichContentMessage:
                            // message.content.content => 文本消息内容
                            // message.content.imageUri => 图片 base64
                            // message.content.url => 原图 URL
                            break;
                        case RongIMClient.MessageType.InformationNotificationMessage:
                            // do something
                            break;
                        case RongIMClient.MessageType.ContactNotificationMessage:
                            // do something
                            break;
                        case RongIMClient.MessageType.ProfileNotificationMessage:
                            // do something
                            break;
                        case RongIMClient.MessageType.CommandNotificationMessage:
                            // do something
                            break;
                        case RongIMClient.MessageType.CommandMessage:
                            // do something
                            break;
                        case RongIMClient.MessageType.UnknownMessage:
                            // do something
                            break;
                        default:
                            // do something
                    }
                }
            });
        },
        init_liao() {
            let th = this
            RongIMLib.RongIMClient.init('tdrvipkstxtp5');
            // 连接状态监听器
            RongIMClient.setConnectionStatusListener({
                onChanged: function (status) {
                    // status 标识当前连接状态
                    switch (status) {
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            console.log('链接成功');
                            if (localStorage.liao_user) {
                                th.$store.state.user_list = JSON.parse(localStorage.liao_user)
                                th.get_sdf(th.$store.state.user_list[0].targetId)
                                th.targetId = th.$store.state.user_list[0].targetId

                            }
                            break;
                        case RongIMLib.ConnectionStatus.CONNECTING:
                            console.log('正在链接');
                            break;
                        case RongIMLib.ConnectionStatus.DISCONNECTED:
                            console.log('断开连接');
                            break;
                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                            console.log('其他设备登录');
                            break;
                        case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
                            console.log('域名不正确');
                            break;
                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                            console.log('网络不可用');
                            break;
                    }
                }
            });
            var token = "i/UDpVbUii7H68UrDKSC34u2Ri7Rb6n5n7uDdYjsPMLa1gIAFyWMqY2Zpdu1dABOvfknNcF5mPRAqFML58DWLIQorZttt1ZxmnlI/2Cx/Lu/JTH+jlENZg==";
            RongIMClient.connect(token, {
                onSuccess: function (userId) {
                    console.log('Connect successfully. ' + userId);
                },
                onTokenIncorrect: function () {
                    console.log('token 无效');
                },
                onError: function (errorCode) {
                    var info = '';
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '超时';
                            break;
                        case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
                            info = '不可接受的协议版本';
                            break;
                        case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                            info = 'appkey不正确';
                            break;
                        case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                            info = '服务器不可用';
                            break;
                    }
                    console.log(info);
                }
            });


        }
    }

}
