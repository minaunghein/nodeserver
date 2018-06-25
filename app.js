const express = require('express');

var port = process.env.PORT || 3000;


var app =  express();

app.get('/',(req,res) => {
    console.log(req)
    res.send('Hello Express');
})


app.listen(port,()=>{
    console.log(`running at port ${port}`)
});