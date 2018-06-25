const express = require('express');

var app =  express();

app.get('/',(req,res) => {
    console.log(req)
    res.send('Hello Express');
})


app.listen(3000);