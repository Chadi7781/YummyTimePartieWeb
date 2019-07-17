var mongoose=require('mongoose')

//Define Schema
var Schema=mongoose.Schema;
const SousCategorieModelSchema=new Schema({

  nom_sous_cat:{
    type: String,
    trim: true,
    required: true

  },
  image_sous_cat:{
    type: String, 
    trim: true,
    required: true

  },
  prix:{
    type: String,
    trim: true,
    required: true
  },
  

});

//compile model from Schema
var SousCategorieModel=mongoose.model('SousCategorieModel',SousCategorieModelSchema)
module.exports=SousCategorieModel
