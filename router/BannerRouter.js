const BannerModel = require('../models/BannerModel')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
var fs = require("fs");
var url="http://192.168.1.7:8080/banners/images/"

router.post('/add',upload.single('image'),function (req, res) {
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
    });
    var Banner  =  new BannerModel ({
      nom: req.body.nom,
      image: url+req.file.originalname,
    });
    Banner.save ( function (err) {
      if (err){
        res.send({'State':'Not Ok','msg':'error'+err})
      }
      else {
        res.send({'State': 'Okay', 'msg': 'Banner added'})
      }
    });
  });
})
router.get("/images/:image", function (req , res) {
  res.sendFile(__dirname+ '/uploads/' + req.params.image)

});
router.get('/all', function(req,res) {
  BannerModel.find({}, function (errr,result)
  {
    res.send(result)
  });
});
module.exports = router;

