const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const compression = require('compression');
app.prepare().then(()=>{
    const server = express();
    server.use(compression())
    server.get('/api/v1/admin',(req,res)=>{
        return res.json()
    })
    server.get('*',(req,res)=>{
        return handle(req,res)
    })
    const PORT = process.env.PORT || 3000;
    server.listen(PORT,(err)=>{
        if (err){console.error(err)}
        console.log('> Server running on Port ', PORT)
    })
})
