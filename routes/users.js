const express = require("express");
const User = require("../model/User");
const router = express.Router();
const bcrypte = require('bcryptjs')

router.get("/register", function (req, res, next) {
   res.render("register", { title: "Registration Page", isRegister: true });
});

router.post("/register", function (req, res, next) {
   req.checkBody("name", "Please write down your Name").notEmpty();
   req.checkBody("surname", "Please write down your Surname").notEmpty();
   req.checkBody("password", "Please create a password").notEmpty();
   req.checkBody("password1", "Please Confirm your Password").equals(
      req.body.password
   );

   const errors = req.validationErrors();

   if (errors) {
      res.render("register", {
        title: 'An error occured while filling the form',
         errors: errors,
      });
   } else {
        const name = req.body.name;
        const surname = req.body.surname;
        const password = req.body.password;
        const password1 = req.body.password1;

        const newUser = new User({
        name: name,
        surname: surname,
        password: password,
        password1: password1,
       });

    bcrypte.genSalt(10, (err, pass)=>{ 
        bcrypte.hash(newUser.password, pass, (err, hash)=>{
            if(err) console.log(err);
            newUser.password = hash;
            newUser.save((err)=>{
                if(err) console.log(err);
                else{
                    req.flash('success', 'You have successfully registered')
                    res.redirect("/")
                };
            });
        });
    });
   };
});

router.get("/login", function (req, res, next) {
    res.render("login", { title: "LOG IN", isLogin: true });
 });

module.exports = router;
