const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');

/*
app.get('/', function(req, res) {
    res.send("hello, world.");
})*/

//mongoose connection test 
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/',require('./routes/render'));
app.use('/users',require('./routes/users'));




//set up server port on 8000
app.listen(8000, () => {
    console.log("connected to port 8000!");
});