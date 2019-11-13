import {showDynamic,sendWord} from '../../service/index'

const state = {
    list:[]
}

const mutations = {
    updateList(state,payload){
        state.list = payload.reverse();
    }
}

const actions = {
    async getTimeline(context,payload){
        let data = await showDynamic();
        console.log('......',data);
        context.commit('updateList',data.data.data)
    }
}