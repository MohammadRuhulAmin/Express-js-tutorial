const express = require('express');
const path =require('path');

const app = new express();

const PORT = 5000 || process.env.PORT;


app.listen(PORT,()=>{
    console.log(PORT + " HAS started! ");
});



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index_2.html'));
});

app.get('/index/myInfo',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/myInfo','index_3.html'));
});

app.get('/myIndex/myotherInfo',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/myInfo','index_4.html'));
});