const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');
const portfolioRouter = require('./routes/portfolio');
const app = express()

app.set('view engine','ejs');
app.use(logger('dev'));
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.use('/myportfolio', portfolioRouter);
app.use(express.static(__dirname+'/public'));
app.use('/',(req,res,next)=>{
    res.redirect('/myportfolio');
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
});