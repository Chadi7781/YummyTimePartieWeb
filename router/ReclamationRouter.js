const ReclamtionModel = require('../models/ReclamationModel')
const express = require('express');
const router = express.Router();


router.post('/add',function (req, res){


   console.log({
     titre: req.body.titre,
     client:req.body.client,
     description_rec:req.body.description_rec,
     date_rec:req.body.date_rec,
     responsable:req.body.responsable

   })
  var Reclamation =  new ReclamtionModel ({
    titre: req.body.titre,
    client:req.body.client,
    description_rec:req.body.description_rec,
    date_rec:req.body.date_rec,
    responsable:req.body.responsable

  });

  Reclamation.save ( function (err) {
    if (err){
      res.send({'State':'Not Ok','msg':'error'+err}) }
    else {
      res.send({'State':'Okay','msg':'Reclamtion added'+Reclamation})
    }
  });
});

router.get('/all', function(req,res) {
  ReclamtionModel.find({}).populate('client','nom').populate('responsable','nom').exec( function (err,result)
  { if (err){
    res.send(err)
  }else{ res.send(result)}

  })
})
router.delete('/remove/:id',function (req, res) {
  ReclamtionModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'err'+err})
    } else {
      res.send({'state':'ok','msg':'supp'})
    }
  })
})
//prolongation
router.put("/update/:id", function (req,res) {
  ReclamtionModel.updateOne({
      id:req.params.id,
      titre: req.body.titre,
      description_rec:req.body.description_rec,
      date_rec:req.body.date_rec,

    },
    function (err) {
      if(err)
        res.send({"sate":"not ok","msg":"error:"+err});
      else
        res.send({"sate":"ok","msg":"Reclamation updated"});
    });

});
module.exports = router;


