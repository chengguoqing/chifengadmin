var url_d = "http://192.168.1.102:8360/"
//url_d = "http://duxinggj.com/"
import router from './router'
var wx = require('weixin-js-sdk');
import axios from "axios"
var CryptoJS = require("crypto-js");
var key = "duxinggongchengguoqingguangzoulg"
import { Message } from 'element-ui';
export default {
    install(Vue) {
        Vue.prototype.base_url = "http://127.0.0.1:8360/"
        Vue.prototype.post = function (url, dtat, type) {
            var encrypt = CryptoJS.AES.encrypt(JSON.stringify(dtat), CryptoJS.enc.Utf8.parse(key), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            var sd_df = {
                token: encrypt.toString()
            }
            var sd_Df = ""
            let th = this
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: url_d + url,
                    data: dtat
                }).then((res) => {
                    console.log(res.data);
                    sd_Df = res
                    if (res.data.code < 0) {
                        Message.error(res.data.msg);
                        return
                    }
                    if (res.data.code == 1) { //提示
                        Message.success(res.data.msg);
                        return
                    }
                    //                    var decrypt = CryptoJS.AES.decrypt(res.data.data, CryptoJS.enc.Utf8.parse(key), {
                    //                        mode: CryptoJS.mode.ECB,
                    //                        padding: CryptoJS.pad.Pkcs7
                    //                    });
                    //                    decrypt = decrypt.toString(CryptoJS.enc.Utf8)         
                    resolve(res.data.data)

                }).catch(err => {
                    if (sd_Df.data.code == 0) {
                        th.$message.success(sd_Df.data.msg);
                    }
                    if (sd_Df.data.code == -1) {
                        th.$message.error(sd_Df.data.msg);
                    }
                    resolve(sd_Df.data)
                })

            })
        }

        Vue.prototype.get = function (url, dtat, call) {
            let th = this
            axios.get(url_d + url, {
                params: dtat
            }).then(function (response) {
                if (response.data.code == 0) {
                    th.$message({
                        message: response.data.msg,
                        type: 'success'
                    });
                }

                call(response.data.data)
            })
        }

        Vue.prototype.time_c = function (t) {
            let time = new Date()
            time.setTime(t)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
            Month < 10 ? Month = 0 + '' + Month : ''
            return Year + "-" + Month + "-" + Data
        }


        Vue.prototype.set_ltlist = function (date_e) {
            var liao_user = []
            if (localStorage.liao_user) {
                liao_user = JSON.parse(localStorage.liao_user)
            }
            var sd_df = 0,
                sd_idx = 0
            try {
                liao_user.map((a, b) => {
                    if (a.targetId == date_e.targetId) {
                        sd_df++
                        sd_idx = b
                    }
                })
            } catch (e) {

            }
            var sd_drt = {}
            sd_drt.targetId = date_e.targetId
            sd_drt.user_name = date_e.content.extra.user_name
            sd_drt.user_icon = date_e.content.extra.user_icon
            sd_drt.content = date_e.content.content
            sd_drt.receivedTime = date_e.receivedTime
            if (sd_df == 0) { //没有相同的用户添加缓存  否则修改缓存的数据
                liao_user.push(sd_drt)
            } else {
                liao_user[sd_idx] = sd_drt
            }
            localStorage.liao_user = JSON.stringify(liao_user)
        }
        //        ty 消息类型  1接受  2自己发送的
        Vue.prototype.set_msgtext = function (date_e, ty) {
            var msgtext = []
            if (localStorage[date_e.targetId]) {
                msgtext = JSON.parse(localStorage[date_e.targetId])
            }
            var sd_drt = {}
            sd_drt.targetId = date_e.targetId
            sd_drt.user_name = date_e.content.extra.user_name
            sd_drt.user_icon = date_e.content.extra.user_icon
            sd_drt.content = date_e.content.content
            sd_drt.ty = ty
            sd_drt.receivedTime = date_e.receivedTime
            msgtext.push(sd_drt)
            localStorage[date_e.targetId] = JSON.stringify(msgtext)

        }


        Vue.prototype.push_msg = function (date_e, ty) {
            var sd_drt = {}
            sd_drt.targetId = date_e.targetId
            sd_drt.user_name = date_e.content.extra.user_name
            sd_drt.user_icon = date_e.content.extra.user_icon
            sd_drt.content = date_e.content.content
            sd_drt.ty = ty
            sd_drt.receivedTime = date_e.receivedTime
            return sd_drt
        }


        Vue.prototype.time_d = function (t) {
            let time = new Date()
            time.setTime(t)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
                hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
                Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
                Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
            Month < 10 ? Month = 0 + '' + Month : ''
            return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
        }


        Vue.prototype.time_k = function (t) {
            let time = new Date() //发送消息时间
            time.setTime(t)
            var jintian = new Date() //当前时间
            var sd_d = "",
                getMonth_a = time.getMonth(),
                getMonth_b = jintian.getMonth(),
                getData_a = time.getDate(),
                getData_b = jintian.getDate(),
                getHours_d = jintian.getHours(), //当前的时间
                xs_sd = ""
            if (getHours_d == 0) {
                sd_d = "凌晨"
            } else if (getHours_d > 11 && getHours_d < 12) {
                sd_d = "上午"
            } else if (getHours_d == 12) {
                sd_d = "中午"
            } else if (getHours_d > 12) {
                sd_d = "下午"
            }

            var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            var myddy = time.getDay(); //获取存储当前日期
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
                hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
                Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
                Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
            Month < 10 ? Month = 0 + '' + Month : ''
            if (getMonth_a == getMonth_b) {

                if (getData_a == getData_b) {
                    xs_sd = sd_d + " " + hour + ":" + Minutes
                } else if (getData_b - getData_a == 1) {
                    xs_sd = "昨天"
                } else if (getData_b - getData_a > 1 && getData_b - getData_a < 7) {
                    xs_sd = weekday[myddy]
                } else {
                    xs_sd = Year + "/" + Month + "/" + Data
                }
            } else {
                xs_sd = Year + "/" + Month + "/" + Data
            }



            return xs_sd
        }



        Vue.prototype.hf = function (url, cu) { //路由跳转
            router.push({
                path: "/" + url,
                query: cu
            })
        }


        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|14[0-9]{9}|19[0-9]{9}|16[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };


        //company=分享标题  sd_us=分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 imgUrl分享图标 desc=详情介绍
        Vue.prototype.fenxiang = function (company, sd_us, shop_logo, desc) {
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: company, // 分享标题
                    link: sd_us, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shop_logo, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: company,
                    desc: desc,
                    link: sd_us,
                    imgUrl: shop_logo,
                    trigger: function () {

                    },
                    success: function () {

                    },
                    cancel: function () {

                    }
                });
            })
        }


        Vue.prototype.wx_config = function (data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'onVoicePlayEnd',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
            });

        }


        Vue.prototype.editorOption = {
            modules: {
                toolbar: [
              ['bold', 'italic'], //加粗，斜体，下划线，删除线
              [{
                        'header': 1
                    }, {
                        'header': 2
                    }], // 标题，键值对的形式；1、2表示字体大小
              [{
                        'indent': '-1'
                    }, {
                        'indent': '+1'
                    }], // 缩进
              [{
                        'size': ['small', false, 'large', 'huge']
                    }], // 字体大小
              [{
                        'color': []
                    }, {
                        'background': []
                    }], // 字体颜色，字体背景颜色
              [{
                        'font': []
                    }], //字体
              [{
                        'align': []
                    }], //对齐方式

              ['clean'], //清除字体样式
              ['image', 'video'] //上传图片、上传视频

            ]
            }
        }





    }

}
