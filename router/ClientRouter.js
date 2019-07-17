const ClientModel = require('../models/ClientModel')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Génerateur de Hashage
const jwt = require('jsonwebtoken');
const async = require('async')

//*******************************************************

router.post("/register",function (req,res) {

    console.log({
      nom: req.body.nom,
      prenom: req.body.prenom,
      numero_telephone: req.body.numero_telephone,
      password: req.body.password,
      adresse: req.body.adresse,
      email: req.body.email,
      sexe:req.body.sexe,
      image:req.body.image
    })
  var Client = new ClientModel({
    nom: req.body.nom,
    prenom:  req.body.prenom,
    numero_telephone: req.body.numero_telephone,
    password: req.body.password,
    adresse: req.body.adresse,
    email: req.body.email,
    sexe:req.body.sexe,
    image:req.body.image
  });
  Client.save(function (err) {
    if (err) {
      res.send({'status': 'failure', 'msg': 'err' + err})

    } else
      res.send({'status': 'success', 'msg': 'Objet' + Client})

  })
});


router.post("/auth", function (req, res) {
  ClientModel.findOne({nom: req.body.nom}, function (err, userInfo) {
    try {
      if (err) {
        next(err);
      }
      else {
        console.log(userInfo)
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
            res.json({status: "success", message: "user found!!!", data: {user: userInfo, token: token}});

        }
        else {
          res.json({status: "error", message: "Invalid username/password!!!", data: null});
        }
      }
    }
    catch (err) {
      res.json({status: "error", message: "Invalid username/password!!!", data: null});
    }
  })
})
  router.get('/all', function (req, res,next) {

ClientModel.find({}).populate('reclamations').populate('reservationtable').populate('restaurants').exec( function( err, data ) {
  if(err)
    next(err)
  else{
  console.log( data );
    res.json(data)
    console.log(data.length)

  }
} );

router.get('/byid/:id',function(req,res,next){
  ClientModel.findById({_id:req.params.id}).populate('reservationtable').populate('reclamations').populate('offres').exec(function (err,data) {
    if(err)
      next(err)
    else{
      console.log( data );
      res.json(data)

    }
  });

});

 });

  router.delete('/remove/:id', function (req, res) {
    ClientModel.deleteOne({_id: req.params.id}, function (err) {
      if (err) {
        res.send({'state': 'not ok', 'msg': 'err' + err})
      } else {
        res.send({'state': 'ok', 'msg': 'supp'})
      }
    })
  })
  router.put("/update/:id", function (req, res) {
    ClientModel.findByIdAndUpdate({
        nom: req.body.nom,
        prenom: req.body.prenom,
        numero_telephone: req.body.numero_telephone,
        email: req.body.email,
        password: req.body.password,
        sexe:req.body.sexe,
      adresse:req.body.adresse,
          image:req.body.image
      },
      function (err) {
        if (err)
          res.send({"sate": "not ok", "msg": "err:" + err});
        else
          res.send({"sate": "ok", "msg": "name updated"});
      })

  })

/*
  function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
      if (err) {
        res.json({status: "error", message: err.message, data: null});
      } else {
        // add user id to request
        req.body.ClientId = decoded.id;
        next();
      }
    });

  }



*/


  module.exports = router

