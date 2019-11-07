import axios from 'axios';

export let showDynamic = ()=>{
    return axios.get('/api/dynamic/showDynamic');
}

export let sendWord = params=>{
    return axios.post('/api/dynamic/sendWord', params);
}

export let sendPicWord = params=>{
    return axios.post('/api/dynamic/sendPicWord', params);
}
