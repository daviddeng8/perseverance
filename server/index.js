const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// stuff for cors problems
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });

//stuff for the dummy frontend 
const expressEjsLayout = require('express-ejs-layouts');

/*
app.get('/', function(req, res) {
    res.send("hello, world.");
})*/

const passport = require('passport');

//importing passport configuration file 
require("./config/passport")(passport);

app.use(cors());

//initializing the pasport 
app.use(passport.initialize());
app.use(passport.session());

//mongoose connection test 
mongoose.connect('mongodb+srv://perseverance:githappens@perseverance.zi6ah.mongodb.net/users?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
  }));

//Routes
app.use('/', require('./routes/render'));
app.use('/users', require('./routes/users'));



//set up server port on 8000
app.listen(8000, () => {
    console.log("connected to port 8000!");
});
