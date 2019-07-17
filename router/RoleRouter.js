var express=require('express')
var router=express.Router()
var roleModel=require('../models/RoleModel')


router.post('/add',function(req,res){
  role=new roleModel({
    nom:req.body.nom
  })

  role.save(function(err)
  {
    if (err) {
      res.send({'state':'not ok','msg':'err:'+err})
      console.log('err')
    }else {
      res.send({'state':'ok','msg':'ajout'});
      console.log(' ajouté avec succé ')
    }
  })
})
router.get('/all', function(req,res) {
  roleModel.find({}, function (err,result)
  {
    res.send(result)
  })
})
module.exports=router
