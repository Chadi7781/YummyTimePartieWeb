const express = require('express');
const router = express.Router();
RestaurantModel = require('../models/RestaurantModel')
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
var fs = require("fs");
 var url="http://192.168.1.54/restaurants/images/"





router.post('/uploads', upload.single('Image'), function (req, res) {
  var file = __dirname + '/uploads/' + req.file.originalname;
  fs.readFile(req.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.error(err);
        var response = {
          message: 'Sorry, file couldn\'t be uploaded.',
          filename: req.file.originalname
        };

        res.json(response);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.file.originalname
        };
        res.json(response);
      }

    })
  })
})
// var url="http://192.168.1.21:8080/restaurants/images/"
router.post('/add', upload.single('image'), function (req, res) {
  var file = __dirname + '/uploads/' + req.file.originalname;
  fs.readFile(req.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.error(err);
        var response = {
          message: 'Sorry, file couldn\'t be uploaded.',
          filename: req.file.originalname
        };

        res.json(response);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.file.originalname
        };
        var Restaurant = new RestaurantModel({
          city: req.body.city,
          image: url +req.file.originalname,
          name: req.body.name,
          rating: req.body.rating,
          lat: req.body.lat,
          lng: req.body.lng,
          location: req.body.location,
          cuisine: req.body.cuisine,
          openingTime: req.body.openingTime,
          closingTime: req.body.closingTime,
          phone: req.body.phone,
          adress: req.body.adress,
          openStatus: req.body.openStatus,
          imageList: req.body.imageList,
          nombre_table: req.body.nombre_table

        });
        Restaurant.save(function (err) {
          if (err) {
            res.send({'statut': 'Not Ok', 'msg': 'erreur dajout Restaurant:' + err})

          } else {
            res.send({'State': 'okk'} )
            //RestaurantCount++;
            /// console.log("restaurant" + RestaurantCount)
          }
        });
      }
    });
  })
})
router.get("/images/:image", function (req, res) {

  console.log(__dirname + "/uploads" + req.params.image)
  res.sendFile(__dirname + "/uploads/" + req.params.image)

  // res.send("okkk")
});
router.get('/all', function (req, res, next) {
  RestaurantModel.find({}, function (errr, result) {

    res.send(result)

  });
});
router.get('/byID/:id', function (req, res, next) {
  RestaurantModel.findOne({_id:req.params.id}, function (errr, result) {

    res.send(result)

  });
});
router.delete('/remove/:id',function (req, res) {
  RestaurantModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'err'+err})
    } else {
      res.send({'state':'ok','msg':'supp'})
    }
  })
})

router.get('/allTrue', function (req, res, next) {
  RestaurantModel.find({etat : true}, function (errr, result) {

    res.send(result)

  });
});


router.get('/bloquer/:id', function (req,res) {
  RestaurantModel.findByIdAndUpdate(req.params.id , {

    $set : {etat : false}
  })
    .then(resu =>{
      res.send(resu) ;
    })
    .catch(err => {
      res.send(err)
    })
})



router.get('/debloquer/:id', function (req,res) {
  RestaurantModel.findByIdAndUpdate(req.params.id , {

    $set : {etat : true}
  })
    .then(resu =>{
      res.send(resu) ;
    })
    .catch(err => {
      res.send(err)
    })
})




module.exports = router;




