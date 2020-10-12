var express = require("express");
const Music = require('../model/Music')
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //  const musics = [
  //    { 
  //      id: 1,
  //      name: "Gudki",
  //      signer: "L'One",
  //      comments: "Fuflo"
  //    },
  //    { 
  //     id: 3,
  //     name: "Gudki2",
  //     signer: "L'One2",
  //     comments: "Fuflo2"
  //   },
  //   { 
  //     id: 2,
  //     name: "Gudki3",
  //     signer: "L'One3",
  //     comments: "Fuflo3"
  //   }
  //   ];
  Music.find({}, (err, musics)=>{
    if(err) console.log(err);
    else{
      res.render("index", { title: "Bosh sahifa", isIndex:true, musics });
    }
  });
});

module.exports = router;
