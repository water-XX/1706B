import axios from 'axios';

export let publishReply = params=>{
    return axios.post('/api/commentreply/publishreply', params);
}

export let publishComment = params=>{
    return axios.post('/api/commentreply/publishcomment', params);
}