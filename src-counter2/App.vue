<template>

  <div>
<!--   方式一  $store.state.count-->
    <p>请点击{{count}} 时间,count is {{evenOrOdd}}</p>
    <button @click="increment2">+</button>
    <button @click="decrement2">-</button>
    <button @click="incrementIfOdd2">增加</button>
    <button @click="incrementAsync2">异步增加</button>
  </div>


</template>

<script>

  import {mapState,mapGetters,mapActions} from 'vuex'

  export default {

    computed:{

      //方式二
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd']),   //对象形式（{evenOrOdd2:'evenOrOdd'}）

      //方式一
      // evenOrOdd(){
      //
      //   return this.$store.getters.evenOrOdd;

      //},


    },
    //方式一
    // methods:{
    //
    //   increment2(){
    //     //通知vuex去增加
    //     this.$store.dispatch('increment2');   //触发store中的action调用
    //
    //   },
    //   decrement2(){
    //
    //     this.$store.dispatch('decrement2');   //触发store中的action调用
    //   },
    //   incrementIfOdd(){
    //     this.$store.dispatch('incrementIfOdd2');   //触发store中的action调用
    //
    //   },
    //   incrementAsync(){
    //
    //     this.$store.dispatch('incrementAsync2');   //触发store中的action调用
    //   },
    //
    //
    //
    //
    // },

    //方式二  ,使用方法 移动 和奇数这个两方法都加了2 ， 使用方法一不需要（在上面html标签中 加了2）
    methods:{

      ...mapActions(['increment2','decrement2','incrementIfOdd2','incrementAsync2'])

    },



  }


</script>




<style>

</style>
