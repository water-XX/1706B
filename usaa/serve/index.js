const express = require('express');
const app = express();
const Router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const getData = (path) => new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data) => {
        if(err){
            reject(err)
            return;
        }
        resolve(JSON.parse(data.toString()));
    })
})


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use(Router);

Router.post('/api/search',async (req,res)=>{
    let {val} = req.body;
    let data = await getData('./data/data.json');
    res.send({
        code:1,
        msg:'success',
        data:data.data.filter(item=> {

            
            return item.phone.includes(val) || item.name.includes(val) || item.title.includes(val)
        })
    })
})

Router.post('/api/list',async (req,res)=>{
    let {val} = req.body;
    let data = await getData('./data/data.json');
    res.send({
        code:1,
        msg:'success',
        data:data.data
    })
})

app.listen(3000,()=>{
    console.log('111')
});
