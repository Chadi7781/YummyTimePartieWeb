const MenuJourModel = require('../models/MenuJourModel')
const express = require('express');
const router = express.Router();

router.post('/add',function (req, res){
  var MenuJour  =  new MenuJourModel ({
    type: req.body.type,
    list_image:req.body.list_image,
    prix:req.body.prix,
    nbr_choix:req.body.nbr_choix,
  });

  MenuJour.save ( function (err) {
    if (err){
      res.send({'State':'Not Ok','msg':'error'+err}) }
    else {
      res.send({'State':'Okay','msg':'menu de jour ajouter'})
    }
  });
});

router.get('/all', function(req,res) {
  MenuJourModel.find({}, function (errr,result)
  {
    res.send(result)
  })
})
router.delete('/remove/:id',function (req, res) {
  MenuJourModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'err'+err})
    } else {
      res.send({'state':'ok','msg':'supp'})
    }
  })
})
//prolongation
router.put("/update/:id", function (req,res) {
  MenuJourModel.updateOne({
      id:req.params.id,
      type: req.body.type,
      list_image:req.body.list_image,
      prix:req.body.prix,
      nbr_choix:req.body.nbr_choix,
    },
    function (err) {
      if(err)
        res.send({"sate":"not ok","msg":"error:"+err});
      else
        res.send({"sate":"ok","msg":"menu a ete mise a jour"});
    });

});
module.exports = router;


