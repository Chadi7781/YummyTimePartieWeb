var mongoose=require('mongoose')

//Define Schema
var Schema=mongoose.Schema;
const ReservationModelSchema=new Schema({

  nombrePersonne :{
    type: Number,
    trim:true,
    required:true
  },
  date_reservation :{
    type: Date,
    default: Date.now,
    trim:true,
    required: true

  },
  temps :
    {
      type:String,
      trim:true,
      required:true
    },
  client:
    {type: mongoose.Schema.ObjectId,
      ref: "ClientModel"},
});

//compile model from Schema
var ReservationTableModel=mongoose.model('ReservationTableModel',ReservationModelSchema)
module.exports=ReservationTableModel
