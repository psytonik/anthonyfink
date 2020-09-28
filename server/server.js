const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const compression = require('compression');
const mongoose = require('mongoose');
// const config = require("./config");
const bodyParser = require('body-parser');
require("dotenv").config();

mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=>console.log('Im your Db'))
    .catch(e=> console.error(e));

app.prepare().then(()=>{
    const server = express();
    server.use(compression());
    server.use(bodyParser.json());

    server.use('/api/v1', require('./routes/portfolioRoutes'));



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
