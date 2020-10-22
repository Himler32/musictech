const express = require("express");
const Music = require("../model/Music");
const router = express.Router();

/* GET home page. */
router.get("/add", function (req, res, next) {
   res.render("musicAdd", { title: "Add a Music", isMusic: true });
});

router.post("/add", function (req, res, next) {
   req.checkBody('name', 'Please fill the music name form').notEmpty()
   req.checkBody('singer', 'Please fill the singer\'s name form').notEmpty()
   req.checkBody('comment', 'Please give some comments').notEmpty()

   const errors = req.validationErrors()
   if (errors){
      res.render('musicAdd', {
         title: "An Error occured in filling the form",
         errors: errors
      })
   }
   else{
      const music = new Music();
      music.name = req.body.name;
      music.singer = req.body.singer;
      music.comment = req.body.comment;
   
      music.save((err) => {
         if (err) console.log(err);
         else {
            req.flash('success', 'ADDED SUCCESSFULLY')
            res.redirect("/");
         }
      });
   };

   
});


module.exports = router;
