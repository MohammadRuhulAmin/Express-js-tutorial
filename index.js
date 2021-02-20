const express = require('express');
const server = new express();
const path = require('path');
const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});

const logger = (req,res,next)=>{
    console.log('this is hit');
    next();
}
const myLog = (req,res,next)=>{
    console.log('this is my log');
    next(); 
}
// init middleware!
server.use(logger);

server.get('/hi-middleware',(req,res)=>{
    res.sendFile(path.join(__dirname,'myAppInfo','index-n.html'));
});


const myMan = [
    {
        "name":"RE",
        "const":"52222"
    },
    {
        "name":"RE",
        "const":"52222"
    },
    {
        "name":"RE",
        "const":"52222"
    },
    {
        "name":"RE",
        "const":"52222"
    },
    {
        "name":"RE",
        "const":"52222"
    },
];
const members = require('./Members');
const studentsList = require('./studentsList');

server.get('/studentList/student/:id',(req,res)=>{
   res.json(studentsList.filter(studentsList=>studentsList.id === parseInt(req.params.id)));
});




