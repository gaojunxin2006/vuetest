<template>

  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList  />
      <todo-footer/>
    </div>
  </div>



</template>


<script>

  import storageUtil from "./util/storageUtil";
  import PubSub from 'pubsub-js';
  import TodoHeader from "./components/TodoHeader.vue";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";


    export default {

      //映射标签
      components:{
        TodoHeader,
        TodoList,
        TodoFooter,


      },

      methods:{


      },

      // mounted() {
      //
      //   //订阅消息
      //   PubSub.subscribe('deleteTodo',(msg,index)=> {
      //
      //     alert("订阅消息执行了！ msg是：\t"+msg);
      //     this.deleteTodo(index);
      //
      //   })
      //
      // },


      //深度监视
      // watch:{
      //   todos:{
      //     deep:true,    //深度监视
      //    // handler:function (newValue,oldValue) {
      //      // alert("app.vue 看看写入了什么内容 \t"+newValue);
      //       //将todos最新的值的json,保存到 localstorge
      //      // window.localStorage.setItem('todos_key',JSON.stringify(newValue));
      //
      //       //使用存储 写法1
      //      // storageUtil.saveTodos(newValue);
      //
      //    // }
      //
      //     //写法2
      //     handler:storageUtil.saveTodos
      //
      //
      //
      //   }
      //
      //
      // },





    }


</script>


<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }


</style>
