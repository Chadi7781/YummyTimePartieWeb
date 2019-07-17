var mongoose=require('mongoose')

//Define Schema
var Schema=mongoose.Schema;
const BannerModelSchema=new Schema({

  nom:{
    type: String,
    trim: true,
    required: true

  },
  image: {
    type: String,
    trim: true,
    required: true
  }

  });

//compile model from Schema
var BannerModel=mongoose.model('BannerModel',BannerModelSchema)
module.exports=BannerModel

