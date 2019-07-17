const ReservationModel = require('../models/ReservationTableModel')
const express = require('express');
const router = express.Router();

router.post('/add',function (req, res){
  var Reservation  =  new ReservationModel ({
    nombrePersonne:req.body.nombrePersonne,
    date_res:req.body.date_res,
    temps:req.body.temps,
    client:req.body.client,
  });

  Reservation.save ( function (err) {
    if (err){
      res.send({'State':'Not Ok','msg':'err'+err}) }
    else {
      res.send({'State':'Okay','msg':'Reservation added'})
    }
  });
});

router.get('/all', function(req,res) {
  ReservationModel.find({}).populate('client').exec( function (errr,result)
  {
    res.send(result)
  })
})
router.delete('/remove/:id',function (req, res) {
  ReservationModel.deleteOne({_id:req.params.id}, function (err) {
    if(err){
      res.send({'state':'not ok','msg':'error:'+err})
    } else {
      res.send({'state':'ok','msg':'Reservation removed'})
    }
  })
})
router.put("/update/:id", function (req,res) {
  ReservationModel.updateOne({
      id:req.params.id,
      nombrePersonne:req.body.nombrePersonne,
      date_res:req.body.date_res,
      temps:req.body.temps,
    },
    function (err) {
      if(err)
        res.send({"sate":"not ok","msg":"error:"+err});
      else
        res.send({"sate":"ok","msg":"name updated"});
    });

});

module.exports = router;


