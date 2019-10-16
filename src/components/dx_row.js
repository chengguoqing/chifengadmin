import Vue from 'vue';
import dx_row from './dx_row.vue';

var dx_row_e = {
    install:function(Vue) {
        Vue.component('dx_row', dx_row)
    }
}

export default dx_row_e;