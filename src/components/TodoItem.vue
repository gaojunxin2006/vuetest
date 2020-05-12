<template>

  <li :style="{background:bgColor}" @mouseenter="hEnter(true)" @mouseleave="hEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span> {{todo.title}} </span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>

</template>


<script>
  import PubSub from 'pubsub-js';
    export default {

      props:{
        index:Number,
        todo:Object,
        // deleteTod:Function,
      },
      data(){
       return{
         bgColor:'white',   //指定默认背景颜色
         isShow:false,    //按钮默认是否显示

       }


      },
      methods:{
        hEnter(isEnter){
          console.log("你的鼠标进入了吗？"+isEnter);
          if (isEnter){
            //alert("你的鼠标进入了");
              this.bgColor='green';
              this.isShow=true;

          }else {
             //alert("你的鼠标离开了");
            this.bgColor='white';   //指定默认背景颜色
            this.isShow=false;
          }
        },

        deleteItem(){
          const {todo,index,deleteTod}=this;
          if (window.confirm(`确认删除吗？${todo.title}\t`+index)){

            // deleteTod(index);

            //发布消息
            alert('Todolitem.vue 准备发布消息');
            PubSub.publish('deleteTodo',index);


          }

        },


      }


    }


</script>


<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }


</style>
