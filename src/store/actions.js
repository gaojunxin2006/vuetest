
//接收组件通知触发mutation调用 间接更新状态
//包含多个

import {ADD_TODO} from './mutation-types'

export default {

  addTodo({commit},todo){

    alert("actions.js 准备提交addTodo()请求了！"+todo);
    alert(todo)
    commit(ADD_TODO,{todo});




  }



}
