//自定义的组件
import Vue from 'vue';
import msg from './msg/index.vue';
import dxupimg from './dxupimg/index';
var dx_row_e = {
    install: function (Vue) {
        Vue.component('msg', msg)
        Vue.component('dxupimg', dxupimg)
    }
}
export default dx_row_e;
