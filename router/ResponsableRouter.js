const ResponsableModel = require('../models/ResponsableModel')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Génerateur de Hashage
const jwt = require('jsonwebtoken');

router.post('/register',function (req, res){
  var Responsable  =  new ResponsableModel ({
    nom: req.body.nom,
    numero_telephone:req.body.numero_telephone,
    email:req.body.email,
    password:req.body.password,
    adress:req.body.adress,
    nom_resto:req.body.nom_resto,
    role:'5ce6997ad99b4e0248e46468'
  })

  Responsable.save ( function (err,Responsable) {
    if (err){
      res.send({'State':'Not Ok','msg':'err'+err}) }
    else {
      res.send({'State':'Okay','msg':'added'+Responsable})
    }
  })
})



router.get('/allFalse', function(req,res) {
  ResponsableModel.find({etat: false}).exec( function (err, result) {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})



router.get('/allTrue', function(req,res) {
  ResponsableModel.find({etat : true}), function (errr,result)
  {
    res.send(result)
  }
})


router.delete('/remove/:id',function (req, res) {
  ResponsableModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'err'+err})
    } else {
      res.send({'state':'ok','msg':'supp'})
    }
  })
})

router.post("/auth", function (req, res) {
  console.log(req.body)
  ResponsableModel.findOne({email: req.body.email}).populate("role", "nom").exec(function (err, userInfo) {
    if (err)
      next(err);
    else {
      if (userInfo != null) {
        console.log(req.body.password),
          console.log(userInfo.password)

        if (bcrypt.compare(req.body.password, userInfo.password) && etat === true ) {
          const token = jwt.sign({id: userInfo._id}, req.app.get("secretKey"), {expiresIn: '1h'});
          res.json({status: "succes", msg: "user found", data: {user: userInfo, token: token}});
        } else {
          res.json({status: "erreur", msg: "invalid email/pswd", data: null});
        }

      } else {

        res.json({status: "erreur", msg: "assyaaaa", data: null});
      }


    }

  });
})





module.exports = router;
