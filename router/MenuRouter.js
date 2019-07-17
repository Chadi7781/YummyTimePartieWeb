const MenuModel = require('../models/MenuJourModel')
const express = require('express');
const router = express.Router();

router.post('/add',function (req, res){
  var Menu  =  new MenuModel ({
    titre:req.body.titre,
    description:req.body.description

  });

  Menu.save ( function (err) {
    if (err){
      res.send({'State':'Not Ok','msg':'error'+err}) }
    else {
      res.send({'State':'Okay','msg':'menu de jour ajouter'})
    }
  });
});

router.get('/all', function(req,res) {
  MenuModel.find({}, function (errr,result)
  {
    res.send(result)
  })
})
router.delete('/remove/:id',function (req, res) {
  MenuModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'err'+err})
    } else {
      res.send({'state':'ok','msg':'supp'})
    }
  })
})
//prolongation
router.put("/update/:id", function (req,res) {
  MenuModel.updateOne({
      id:req.params.id,
      titre:req.body.titre,
      description:req.body.description,
    },
    function (err) {
      if(err)
        res.send({"sate":"not ok","msg":"error:"+err});
      else
        res.send({"sate":"ok","msg":"menu a ete mise a jour"});
    });

});
module.exports = router;


