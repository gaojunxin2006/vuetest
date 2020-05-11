/*
//包含多个由action触发调用 直接更新状态的方法对象
 */

import {ADD_TODO} from './mutation-types'

export default {

  ADD_TODO(state,{todo}){

    alert('mutations.js 添加一个todo对象进去');
    state.todos.unshift(todo);

  }




}
