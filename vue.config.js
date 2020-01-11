
const IS_PROD = process.env.NODE_ENV === 'production'
const cdnDomian = './'
var sd_dert = {
    baseUrl: './',
     publicPath: IS_PROD ? cdnDomian : '/',
    productionSourceMap: false


}
if (process.env.NODE_ENV == 'production') {//build环境
    sd_dert.chainWebpack = config => {
        var externals = {
            vue: 'Vue',
            axios: 'axios',
            'vant': 'vant',
            'vue-router': 'VueRouter',
            vuex: 'Vuex'
        }
        config.externals(externals)
        var cdn = {
            css: [
//          'https://cdn.jsdelivr.net/npm/vant@2.0/lib/index.css'
        ],
            js: [
          // vue
          'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
          // vue-router
          'https://cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
          // vuex
          'https://cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
          // axios
          'https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
          // vant
          'https://cdn.jsdelivr.net/npm/vant@2.0/lib/vant.min.js'
        ]
        }
        config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn
                return args
            })
        // #endregion
    }
}

module.exports = sd_dert
