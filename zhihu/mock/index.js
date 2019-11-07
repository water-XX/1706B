import Mock,{Random} from 'mockjs';

let data = Mock.mock({
    "attention|300": [{
        "id|+1": 1,
        title: '@ctitle(10)',
        description: '@cparagraph',
        banner: Random.image('200x100'),
        "comment|1000-9999": 1000,
        "favor|1000-9999": 1000,
        time: '@datetime'
    }],
    "recommend|300": [{
        "id|+1": 301,
        title: '@ctitle(10)',
        description: '@cparagraph',
        banner: Random.image('200x100'),
        "comment|1000-9999": 1000,
        "favor|1000-9999": 1000,
        time: '@datetime' 
    }],
    "hot|300": [{
        "id|+1": 601,
        title: '@ctitle(10)',
        description: '@cparagraph',
        banner: Random.image('200x100'),
        "comment|1000-9999": 1000,
        "favor|1000-9999": 1000,
        time: '@datetime' 
    }]
})
Mock.mock(/\/api\/list/, 'get', function(options){
    console.log('options...', options);
    let query = options.url.split('?')[1].split('&'),
        queryObj = {};
    query.forEach(item=>{
        let arr = item.split('=')
        queryObj[arr[0]] = arr[1];
    })
    let {type, page, pageSize} = queryObj;
    console.log('data...', data, type);
    return data[type].slice(pageSize*(page-1), pageSize*page);
})
Mock.mock(/\/api\/detail/, 'get', function(options){
    let query = options.url.split('?')[1].split('&'),
        queryObj = {};
    query.forEach(item=>{
        let arr = item.split('=')
        queryObj[arr[0]] = arr[1];
    })
    let {id} = queryObj;
    let info = {};
    for(let key in data){
        let index = data[key].findIndex(item=>item.id==id);
        if (index !== -1){
            info = data[key][index]
        }
    }
    return info;
})