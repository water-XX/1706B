import Mock ,{Random} from 'mockjs'
Mock.mock('/api/list','get',{
    'list|21':[{
        'id|+1':1,
        'img':Random.image('200x100', '#FF6600'),
        'title':'@ctitle(5, 10)',
        'price|9-999':9
    }]
})