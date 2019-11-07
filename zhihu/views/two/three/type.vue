<template>
    <div class="wrap" ref="wrap">
        <div>
            <!-- 添加点击事件传入id -->
            <ul v-for="(item) in list" :key="item.id" @click="goDetail(item.id)">
                <div class="item">
                <p>
                    <span>{{item.title}}</span>
                    <span>{{item.description}}</span>
                </p>
                <img :src="item.banner" alt="">
                </div>
                <p>{{`${item.favor}赞同，${item.comment}评论`}}</p>
            </ul>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';
// 引入vuex  数据仓库   异步方法
import {mapState, mapActions} from 'vuex';

export default {
    data(){
        return {
            page: 1,
            pageSize: 10,
            type: '',
        }
    },
    computed: {
        //  展开数据
        ...mapState({
            list: state=>state.list
        })
    },
    // 监听
    watch: {
        $route: function(){
            // 动态路由
            this.type = this.$route.params['type'];
            this.page = 1;
            //调用传值
            this.getData({type:this.type, page:this.page});
        }
    },
    methods: {
        
        ...mapActions({
            getData: 'getList'
        }),
        // 跳详情 接收相对应的Id
        goDetail(id){
            this.$router.push(`/detail/${id}`);
        }
    },
    mounted(){
        this.type = this.$route.params['type'];
         this.getData({type:this.type, page:this.page});
        let ele = this.$refs.wrap;
        ele.onscroll = async (e)=>{
            if (this.isFetching){
                return;
            }
            
            let height = ele.offsetHeight,
                scrollTop = ele.scrollTop,
                childHeight = ele.children[0].offsetHeight;            

            if (height+scrollTop > childHeight-20){
                this.isFetching = true;
                this.page++;
                await this.getData({type: this.type, page:this.page});
                this.isFetching = false;
            }   
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap{
    background: #f4f4f4;
    overflow: auto;
}
ul{
    background: #fff;
    margin-top: .3rem;
    padding: 0 .4rem;
    font-size: .35rem;
}
.item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:nth-child(1){
        font-size: .42rem;
        padding-bottom: .2rem
    }
    span:nth-child(2){
        color: #666;
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    img{
        width: 2rem;
    }
}
</style>