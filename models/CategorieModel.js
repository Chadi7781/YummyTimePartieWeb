var mongoose=require('mongoose')

//Define Schema
var Schema=mongoose.Schema;
const CategorieModelSchema=new Schema({

  titre: {
    type: String,
    trim: true,
    requiredn: true

  },
  image: {
    type: String,//
    trim: true,
    required: true

  },

  sous_cat: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "SousCategorieModel"
    }]
});

//compile model from Schema
var CategorieModel=mongoose.model('CategorieModel',CategorieModelSchema)
module.exports=CategorieModel
