var mongoose=require('mongoose')

//Define Schema
var Schema=mongoose.Schema;
const OffreModelSchema=new Schema({

  titre:{
    type: String,
    trim: true,
    required: true

  },
  image:{
    type: String,
    trim: true,
    required: true

  },
  desc_off:{
    type: String,
    trim: true,
    required: true
  },
  date_expiration:{
    type: Date,
    default: Date.now,
    trim: true,
    required: true
  },
});

//compile model from Schema
var OffreModel=mongoose.model('OffreModel',OffreModelSchema)
module.exports=OffreModel
