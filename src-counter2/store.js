//vuex的核心管理对象模块

import Vuex from 'vuex'
import Vue from "vue"


Vue.use(Vuex)


//定义四个配置的对象

const state={         //初始化状态

  count:0

}

const mutations={

  //增加mutation
  increment(state) {
    alert("store.js 增加的方法执行了。。。");
    state.count++;

  },

  //减少的mutation
    decrement(state) {
      state.count--;

    }




}

const actions={

  //增加的action
  increment2({commit}){
    commit('increment')

  },
  decrement2({commit}){
    commit('decrement')
  },

  incrementIfOdd2({commit,state}){
    if(state.count%2==1){
      alert("现在是奇数")
      commit('increment');
    }

  },
  incrementAsync2({commit}){

    setTimeout(()=>{
      commit('increment');

    },1000)

  },

}

const getters={

  evenOrOdd(value){
    return state.count%2==0?'偶数':'奇数'
  }


}




export default new Vuex.Store({

  //常用的四个配置
  state,          //状态
  mutations,      //包含多个更新的state函数对象
  actions,        //包含多个对应事件回调函数
  getters,        //计算属性，包含多个getter计算属性函数的对象




})
