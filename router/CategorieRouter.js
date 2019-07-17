const CateogrieModel = require('../models/CategorieModel')
const express = require('express');
const router = express.Router();
var fs = require("fs");
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

router.post('/add', upload.single('image'), function (req, res) {
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
      var Categorie = new CateogrieModel({
        titre: req.body.titre,

        image: req.file.originalname,
      });

      Categorie.save(function (err) {
        if (err) {
          res.send({'State': 'Not Ok', 'msg': 'erreur dajout categorie:' + err})
        } else {
          res.send(Categorie)
        }
      });
    });
  });
//*************

})
router.get("/images/:image", function (req, res) {

  console.log(__dirname + "/uploads" + req.params.image)
  res.sendFile(__dirname + "/uploads/" + req.params.image)

 // res.send("okkk")
});

//******
router.get('/all', function (req, res) {
  CateogrieModel.find({}, function (errr, result) {
    res.send(result)
  });
});
router.delete('/remove/:id', function (req, res) {
  CateogrieModel.deleteOne({_id: req.params.id}, function (err) {
    if (err) {
      res.send({'state': 'not ok', 'msg': 'error:' + err})
    } else {
      res.send({'state': 'ok', 'msg': 'Categorie removed'})
    }
  });
});
router.put("/update/:id", function (req, res) {
  CateogrieModel.updateOne({
      id: req.params.id,
      titre: req.body.titre,
      image: req.body.image,
    },
    function (err, res) {
      if (err)
        res.send({"sate": " failed", "msg": "err:" + err});
      else
        res.send(res);
    });

});



router.get('/all', function(req,res) {
  CateogrieModel.find({}).populate('SousCategorieModel').exec( function (err,result)
  { if (err){
    res.send(err)
  }else{ res.send(result)}

  })
})


router.get('/byID/:id', function (req, res) {
    CateogrieModel.findOne({_id: req.body.id}, function (err, data) {
      if (err) {
        res.send(err)
      } else {
        res.send(data)

      }
    })
  }
)


module.exports = router;



