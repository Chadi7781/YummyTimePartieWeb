const SousCategorieModel = require('../models/SousCategorieModel')
const express = require('express');
const router = express.Router();
var fs = require("fs");
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

router.post('/add', upload.single('image_sous_cat'), function (req, res) {
  //*****************************
  //Upload Image
  var file = __dirname + '/uploads/' + req.file.originalname;
  fs.readFile(req.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.error(err);
        var response = {
          message: 'Sorry, file couldn\'t be uploaded.',
          filename: req.file.originalname
        };
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.file.originalname
        };
      }

      //**********************************
      var SousCategorie = new SousCategorieModel({
        nom_sous_cat: req.body.nom_sous_cat,
        prix:req.body.prix,
        image_sous_cat: req.file.originalname,
      });

      SousCategorie.save(function (err) {
        if (err) {
          res.send({'State': 'Not Ok', 'msg': 'erreur dajout categorie:' + err})
        } else {
          res.send(SousCategorie)
        }
      });
    });
  });
//*************

})
router.get("/images/:image_sous_cat", function (req, res) {

  console.log(__dirname + "/uploads" + req.params.image)
  res.sendFile(__dirname + "/uploads/" + req.params.image)

  // res.send("okkk")
});

//******
router.get('/all', function (req, res) {
  SousCategorieModel.find({}, function (errr, result) {
    res.send(result)
  });
});





router.get("/images/:image", function (req, res) {

  console.log(__dirname + "/uploads" + req.params.image)
  res.sendFile(__dirname + "/uploads/" + req.params.image)

})









router.delete('/remove/:id',function (req, res) {
  SousCategorieModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'error:'+err})
    } else {
      res.send({'state':'ok','msg':'SousCategorie removed'})
    }
  })
})
router.put("/update/:id", function (req,res) {
  SousCategorieModel.updateOne({
        id:req.params.id,
         nom_sous_cat: req.body.nom_sous_cat,
          image_sous_cat: req.body.image_sous_cat,
           prix:req.body.prix,
    },
    function (err) {
      if(err)
        res.send({"sate":"not ok","msg":"error:"+err});
      else
        res.send({"sate":"ok","msg":"SousCategorie updated"});
    });
});


router.delete('/remove/:id',function (req, res) {
  SousCategorieModel.deleteOne({_id: req.params.id}, function (err) {
    if (err) {
      res.send({'state': 'not ok', 'msg': 'error:' + err})
    } else {
      res.send({'state': 'ok', 'msg': 'SousCategorie removed'})
    }
  });
});
module.exports = router;

