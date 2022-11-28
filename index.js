const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello bangladesh , I am mitaly.one day you all people know me for my hardwork')
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get(`/category/:id`,(req,res)=>{
    const id = req.params.id
    if(id==='08'){
        res.send(news)
    }
    else{
        const exit = news.filter(item=>item.id===id) || {}
        res.send(exit)
    }
})

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/news/:id',(req,res)=>{
    const id = req.params.id
    const exit = news.find(item=>item._id===id) || {}
    res.send(exit)
})

app.listen(port,()=>{
    console.log(`news days today's port ${port}`)
})