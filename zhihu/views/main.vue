<template>
  <div class="wrap">
      <div>
          <router-view></router-view>
      </div>
      <footer>
          <!-- 渲染  实现路由跳转 -->
          <router-link tag="span" v-for="(item,index) in footList" :key="index" :to="item.path">{{item.text}}</router-link>
      </footer>
  </div>
</template>

<script>
export default {
  data(){
      return{
          footList:[
              {
                  path:'/main/home',
                  text:'首页'
              },{
                  path:'/main/idea',
                  text:'想法'
              },{
                  path:'/main/edu',
                  text:'大学'
              },{
                  path:'/main/message',
                  text:'消息'
              },{
                  path:'/main/my',
                  text:'我的'
              },
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
    height: 100%;
    display: flex;
    flex-direction: column;
    &>div{
        flex: 1;
        overflow: auto;
    }
}
footer{
    height: 1rem;
    font-size: .4rem;
    border-top: 1px solid #666;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        height: 100%;
        width: 20%;
        text-align: center;
        line-height: 1rem;
    }
    span.router-link-active{
        color: palevioletred;
    }
}
</style>