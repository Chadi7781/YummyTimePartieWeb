const VerfiyTable = require('../models/VerifyTableModel')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Génerateur de Hashage
const jwt = require('jsonwebtoken');
const saltRounds = 10 ; // Taille de cryptage
const multer = require('multer');

const upload = multer({dest: __dirname + '/uploads/images'});
var fs = require("fs");
router.post('/add',function (req, res) {
  //*****************************
    var Table  =  new VerfiyTable ({
      etatTable:req.body.etatTable,

    });
    Table.save ( function (err) {
      if (err){
        res.send({'State':'Not Ok','msg':'error'+err})
      }
      else {
        res.send({'State': 'Okay', 'msg': 'Table added'+res})
      }
    });
  });

router.get('/all', function(req,res) {
  VerfiyTable.find({}, function (errr,result)
  {
    res.send(result)
  });
});
router.delete('/remove/:id',function (req, res) {
  VerfiyTable.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'err'+err})
    } else {
      res.send({'state':'ok','msg':'supp Table'+res})
    }
  });
});
//prolongation
router.put("/update/:id", function (req,res) {
  VerfiyTable.updateOne({
      id:req.params.id,
      etatTable:req.body.etatTable,

    },
    function (err) {
      if(err)
        res.send({"sate":"not ok","msg":"error:"+err});
      else
        res.send({"sate":"ok","msg":"Table updated"+res});
    });
});
module.exports = router;


