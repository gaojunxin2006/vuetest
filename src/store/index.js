//vuex最核心的管理对象 stroe


//引入vue
import Vue from 'vue'
import Vuex from 'vuex'
import action from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'


Vue.use(Vuex)

export  default new Vuex.Store({

  state,
  getters,
  mutations,
  action,

})
