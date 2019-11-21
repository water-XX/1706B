import {createStore} from 'redux'

let reducer = (state,action)=>{
     state = JSON.parse(JSON.stringify(state))
     switch(action.type){
         case 'INITIAL_DATA':{
             state.list = action.payload
         }break;
         default:break;
     }
     return state;
}
let initialState = {
    list:[],
    cart:[]
}
export default createStore(reducer,initialState);