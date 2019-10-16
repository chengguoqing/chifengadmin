import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/assets/js/actions.js'
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        user_info: "",
        tesdfr: 0,
        msg_list: [],
        user_list: "",
        targetId_vuex: "",
        nim: "",
        data_dx: {},
        getsessions:"",//会话列表
        get_msglist:"",//对话列表
        get_seeid:0,
        target:""
    },
    mutations: {

    },
    actions
})
export default store
