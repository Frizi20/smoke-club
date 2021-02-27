const express = require('express');
const app = express();
const path = require('path');
const bodyParser =require('body-parser');

//View engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Set public folder
app.use(express.static(__dirname + "/public"));

//Use body-parser
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) =>{
    res.render('home')
})





app.listen(process.env.PORT || '3000',()=>{
    console.log('Server started at PORT 3000');
})