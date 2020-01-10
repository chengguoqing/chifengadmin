import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import admin from './page/admin.vue'
import Outletrrates from './page/Outletrrates.vue'
import MyWaybill from './page/MyWaybill.vue'
import waybillDetails from './page/waybillDetails.vue'
import WaybillTracking from './page/WaybillTracking.vue'
import deliveryEvaluation from './page/deliveryEvaluation.vue'
import claim from './page/claim.vue'
import ClaimsThat from './page/ClaimsThat.vue'
import warningWaybills from './page/warningWaybills.vue'
Vue.use(Router)

export default new Router({
    routes: [
         {
            path: '/',
            name: '',
            component: index,
            meta: {
                requireAuth: true,
                title: '首页'
            }

    },{
            path: '/admin',
            name: 'admin',
            component: admin,
            bz: "",
            meta: {
                title: '登录'
            }

    },{
            path: '/Outletrrates',
            name: 'Outletrrates',
            component: Outletrrates,
            bz: "",
            meta: {
                title: '登录'
            }

    },{
            path: '/MyWaybill',
            name: 'MyWaybill',
            component: MyWaybill,
            bz: "",
            meta: {
                title: '我的运单'
            }

    },{
            path: '/waybillDetails',
            name: 'waybillDetails',
            component: waybillDetails,
            bz: "",
            meta: {
                title: '运单详情'
            }

    },{
            path: '/WaybillTracking',
            name: 'WaybillTracking',
            component: WaybillTracking,
            bz: "",
            meta: {
                title: '运单追踪'
            }

    },{
            path: '/deliveryEvaluation',
            name: 'deliveryEvaluation',
            component: deliveryEvaluation,
            bz: "",
            meta: {
                title: '发货评价'
            }

    },{
            path: '/claim',
            name: 'claim',
            component: claim,
            bz: "",
            meta: {
                title: '理赔申请'
            }

    },{
            path: '/ClaimsThat',
            name: 'ClaimsThat',
            component: ClaimsThat,
            bz: "",
            meta: {
                title: '理赔说明'
            }

    },{
            path: '/warningWaybills',
            name: 'warningWaybills',
            component: warningWaybills,
            bz: "",
            meta: {
                title: '预警运单一览表'
            }

    }


    ]
})
