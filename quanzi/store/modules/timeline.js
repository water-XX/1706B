import {showDynamic} from '../../service/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload){
        state.list = payload;
    }
}

const actions = {
    async getTimeline(context, payload){
        let data = await showDynamic();
        console.log('data....', data);
        context.commit('updateList', data.data.data);
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}