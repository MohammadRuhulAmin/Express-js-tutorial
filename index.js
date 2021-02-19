const express = require('express');

const app = new express();

const PORT = 5000 || process.env.PORT;


app.listen(PORT,()=>{
    console.log(PORT + " HAS started! ");
});
