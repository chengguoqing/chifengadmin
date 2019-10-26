import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import admin from './page/admin.vue'
import user_msg from './user_msg/index.vue'
import shopp from './shopp/index.vue'
import wenzhang from './wenzhang/index.vue'
import add_wz from './wenzhang/add_wz.vue'
import dianpu from './page/dianpu.vue'
import test from './page/test.vue'
import kefu from './kefu/index.vue'
import weixin from './weixin/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/test',
            name: '',
            component: test,
            meta: {
                requireAuth: true,
                title: '首页'
            }

    }, {
            path: '/',
            name: '',
            component: index,
            meta: {
                requireAuth: true,
                title: '首页'
            }

    }, {
            path: '/user_msg',
            name: 'user_msg',
            component: user_msg,
            meta: {
                requireAuth: true,
                title: '用户列表'
            },
            children: [{
                name: "user_msg",
                path: '',
                meta: {
                    requireAuth: true,
                    title: '用户列表'
                },
                component: () =>
                    import('@/user_msg/user_list')
            }, {
                name: "user_msg",
                path: 'xiangqing',
                component: () =>
                    import('@/user_msg/xiangqing'),
                meta: {
                    requireAuth: true,
                    title: '用户列表'
                },
            }]

    },


        {
            path: '/shopp',
            name: 'shopp',
            component: shopp,
            meta: {
                requireAuth: true,
                title: '商品'
            },
            children: [{
                name: "shopp/sp_list",
                path: 'sp_list',
                meta: {
                    requireAuth: true,
                    title: '商品列表'
                },
                component: () =>
                    import('@/shopp/sp_list')
            }, {
                name: "shopp/sp_fl",
                path: 'sp_fl',
                meta: {
                    requireAuth: true,
                    title: '商品分类'
                },
                component: () =>
                    import('@/shopp/sp_fl')
            }, {
                name: "shopp/add_sp",
                path: 'add_sp',
                meta: {
                    requireAuth: true,
                    title: '添加商品'
                },
                component: () =>
                    import('@/shopp/add_sp')
            }]

    }, {
            path: '/weixin',
            name: 'weixin',
            component: weixin,
            meta: {
                requireAuth: true,
                title: '微信商城'
            },
            children: [{
                name: "weixin/user_list",
                path: 'user_list',
                meta: {
                    requireAuth: true,
                    title: '用户列表'
                },
                component: () =>
                    import('@/weixin/user_list')
            }, {
                name: "weixin/dingdan_list",
                path: 'dingdan_list',
                meta: {
                    requireAuth: true,
                    title: '订单列表'
                },
                component: () =>
                    import('@/weixin/dingdan_list')
            }, {
                name: "weixin/chengjiao_list",
                path: 'chengjiao_list',
                meta: {
                    requireAuth: true,
                    title: '成交列表'
                },
                component: () =>
                    import('@/weixin/chengjiao_list')
            }]

    }, {
            path: '/wenzhang',
            name: 'wenzhang',
            component: wenzhang,
            meta: {
                requireAuth: true,
                title: '文章管理'
            },

    }, {
            path: '/add_wz',
            name: 'add_wz',
            component: add_wz,
            meta: {
                requireAuth: true,
                title: '添加文章'
            },

    },





        {
            path: '/admin',
            name: 'admin',
            component: admin,
            bz: "",
            meta: {
                title: '登录'
            }

    }, {
            path: '/dianpu',
            name: 'dianpu',
            component: dianpu,
            bz: "",
            meta: {
                title: '店铺信息'
            }

    }, {
            path: '/kefu',
            name: 'kefu',
            component: kefu,
            bz: "",
            meta: {
                title: '客服'
            }

    }


    ]
})
