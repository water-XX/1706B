import axios from 'axios'

export let register = params =>{
    return axios.post('/api/user/register', params);
}
export let login = params=>{
    return axios.post('/api/user/login', params);
}
export let loginUser = ()=>{
    return axios.get('/api/user/loginUser');
}