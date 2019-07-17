const UserModel = require('../models/UserModel.js')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Génerateur de Hashage
const jwt = require('jsonwebtoken');


router.post("/auth", function (req, res) {
  console.log(req.body)
  UserModel.findOne({email: req.body.email}).populate("role", "nom").exec(function (err, userInfo) {
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



module.exports = router;
