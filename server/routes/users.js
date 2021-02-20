const express = require('express');
const router = express.Router();
const passport = require('passport');

//package for hashing passwords 
const bcrypt = require('bcrypt');

//studentUser model
const StudentUser = require('../models/student_user.js');

const EmployerUser = require('../models/employer_user.js');

//login handle
router.get('/login', (req,res)=>{
    res.render('login');
});

router.get('/register', (req,res)=>{
    res.render('register')
});


//posting the new account credentials at localhost:8000/users/register
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    var arr = name.split(' ');
    console.log(arr);
    const firstName = arr[0];
    const lastName = arr[1];

    let errors = [];

    if (!firstName || !lastName || !email || !password || !password2) {
        errors.push({msg: "Error – you need to fill in all fields."});
    }

    console.log('name: ' + firstName + ' ' + lastName + ' email: ' + email + ' password: ' + password + ' newpass: ' + password2);

    //next in the error hierarchy, the passwords don't match
    if (password !== password2) {
        errors.push({msg: "Error – the passwords do not match."});
    }

    if (password.length < 8) {
        errors.push({msg: "Error – password lengths must be 8 characters or more."});
    }

    //if we don't have any errors, can proceed with making the User 

    //note – this currently doesn't account for duplicate users signing up
    if (errors.length > 0) {
        console.log(errors);

        //return errors 
        res.render('register', {
            errors : errors,
            firstName : firstName,
            lastName : lastName,
            email: email,
            password : password,
            password2 : password2})
    }
    else {
        //user not saved here, user will be saved after password encryption
        const newUser = new StudentUser({
            first_name: firstName, 
            last_name: lastName,
            email: email,
            password: password
        });

        //hash the password 
        bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                //hash password and then save it, printing out the values to console afterwards 
                newUser.password = hash;
                newUser.save().then((value) => {
                    console.log(value);
                    res.redirect('/users/login');
                })
                .catch(value => console.log(value));

            }
        ));
    }

});


//endpoint for posting creation of an employer account 
router.post('/registerEmployees', (req, res) => {
    const {companyName, email, password, password2} = req.body;
    
    let errors = [];

    if (!companyName || !email || !password || !password2) {
        errors.push({msg: "Error – you need to fill in all fields."});
    }

    console.log('name: ' + comapnyName + ' email: ' + email + ' password: ' + password + ' newpass: ' + password2);

    //next in the error hierarchy, the passwords don't match
    if (password !== password2) {
        errors.push({msg: "Error – the passwords do not match."});
    }

    if (password.length < 8) {
        errors.push({msg: "Error – password lengths must be 8 characters or more."});
    }

    //if we don't have any errors, can proceed with making the User 

    //note – this currently doesn't account for duplicate users signing up
    if (errors.length > 0) {
        console.log(errors);
        //return errors 
        res.render('register', {
            errors : errors,
            companyName: companyName,
            email: email,
            password : password,
            password2 : password2})
    }
    else {
        //user not saved here, user will be saved after password encryption
        const newUser = new EmployerUser({
            name: companyName,
            email: email,
            password: password
        });

        //hash the password 
        bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                //hash password and then save it, printing out the values to console afterwards 
                newUser.password = hash;
                newUser.save().then((value) => {
                    console.log(value);
                    res.redirect('/users/login');
                })
                .catch(value => console.log(value));

            }
        ));
    }

});


//posting the login 
router.post('/login', (req,res,next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
    })(req, res, next);
})

//logout
router.get('/logout',(req,res)=>{
});



module.exports  = router;