const express = require('express');

const portfoilio = express.Router();

portfoilio.route('/')
.get((req,res,next)=>{
    res.render('index');
})


module.exports = portfoilio;