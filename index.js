const express = require('express');
const server = new express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const studentsList = require('./Index/studentsList');
server.listen(PORT,()=>{
    console.log(`server has  started at ${PORT}`);
});

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Index','index_1.html'));
});

server.get('/studentsList',(req,res)=>{
    res.json(studentsList);
});




