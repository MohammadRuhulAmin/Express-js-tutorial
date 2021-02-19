const express = require('express');
const path    = require('path');
const server = new express();


const  PORT = process.env.PORT || 3000;
server.listen(PORT,function(){
    console.log(`Server started at ${PORT}`);
});


server.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'myfiles','file_1.html'));
});


server.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'myfiles/aboutme','aboutme.html'));
});



server.get('/myIndex',function(req,res){
    res.sendFile(path.join(__dirname,'myInfo','x.html'));
});

server.use(express.static(path.join(__dirname,'public')));
server.use(express.static(path.join(__dirname,'myFile')));
server.get('/index/info',(req,res)=>{
    res.sendFile(path.join(__dirname,'Folder1','myFile.html'));
});

server.use(express.static(path.join(__dirname,'AboutMyFolder')));

const students = [
    {
        "name":"Ruhul amin",
        "email":"ruhul@gmail.com",
        "contact":"0140-3288711"
    },
    {
        "name":"Ruhul amin",
        "email":"ruhul@gmail.com",
        "contact":"0140-3288711"
    },
    {
        "name":"Ruhul amin",
        "email":"ruhul@gmail.com",
        "contact":"0140-3288711"
    }

];

server.get('/api/myInfo',(req,res)=>{
    res.json(students);
});





