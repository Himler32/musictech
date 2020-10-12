const express = require('express');
const Music = require('../model/Music');
const router = express.Router();

/* GET users listing. */
router.get('/edit/:id', function(req, res, next) {
  Music.findById(req.params.id, (err, musics)=>{
    console.log(musics);
    res.render('musicEdit', {
      title:"Edit the chosen music", musics
    });
  });
});

router.put('/:id', function(req, res, next){
  const promise = Music.findByIdAndUpdate(req.params.id, musics);
  promise
  .then((data)=>{
    res.json(data);
  })
  .catch((err)=>console.log(err));
})

module.exports = router;
 