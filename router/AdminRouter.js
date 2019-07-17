const AdminModel = require('../models/AdminModel')
const ResponsableModel = require('../models/ResponsableModel')

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Génerateur de Hashage
const jwt = require('jsonwebtoken');


router.post('/register',function (req, res){
  var Admin  =  new AdminModel ({

    email:req.body.email,
    password:req.body.password,
    role:req.body.role
  })

  Admin.save ( function (err, Admin) {
    if (err){
      res.send({'State':'Not Ok','msg':'err' +err}) }
    else {
      res.send({'State':'Okay','msg':'added' +Admin})
    }
  })
})

router.post("/auth", function (req, res) {
  console.log(req.body)
  AdminModel.findOne({email: req.body.email}).populate("role", "nom").exec(function (err, userInfo) {
    if (err)
      next(err);
    else {
      if (userInfo != null) {
        console.log(req.body.password),
          console.log(userInfo.password)

        if (bcrypt.compare(req.body.password, userInfo.password) ) {
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


router.get('/all', function(req,res) {
  AdminModel.find({}, function (err,result)
  {
    res.send(result)
  })
})

router.get('/approuver/:id', function (req,res) {
  ResponsableModel.findByIdAndUpdate(req.params.id , {

    $set : {etat : true}
  })
    .then(resu =>{
      res.send(resu) ;
    })
    .catch(err => {
      res.send(err)
    })
})


//
// const ac = new AccessControl();
// ac.grant('admin')                    // define new or modify existing role. also takes an array.
//   .createOwn('reservation')             // equivalent to .createOwn('video', ['*'])
//   .deleteOwn('reservation')
//   .readAny('reservation')
//
//
// const permission = ac.can('user').createOwn('service');
// console.log(permission.granted);    // —> true
// console.log(permission.attributes); // —> ['*'] (all attributes)
















module.exports = router;
