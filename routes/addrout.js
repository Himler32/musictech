const express = require('express');
const Music = require('../model/Music');
const router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('musicAdd', { title: 'Add Music', isMusic: true });
});

router.post('/add', function (req, res, next){
  const music = new Music();
  music.name = req.body.name;
  music.singer = req.body.singer;
  music.comment = req.body.comment;

  music.save((err)=>{
    if(err) console.log(err);
    else{
      res.redirect('/')
    }
  })
})

module.exports = router;
