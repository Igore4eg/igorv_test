import Vue from 'vue'
import Vuex from 'vuex'
import findTextFieldModule from '@/store/findTextFieldModule'

Vue.use(Vuex);

export default new Vuex.Store ( { 
    modules: {
        findTextFieldModule
    },
})