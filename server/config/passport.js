//Source: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/student_user");

module.exports = function(passport) {
    passport.use(
        //use email address as the identifying feature for the database element 
        new LocalStrategy({usernameField : 'email'}, (email, password, done) => {
                //match user
                User.findOne({email : email})
                //if the user is not registered
                .then((user) => {
                 if(!user) {
                     return done(null, false, {message : 'that email is not registered'});
                 }
                 //compare passwords 
                 bcrypt.compare(password, user.password, (err,isMatch) =>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null, false, {message : 'pass incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )

    //code for maintaining login sessions 
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    }); 
}; 


