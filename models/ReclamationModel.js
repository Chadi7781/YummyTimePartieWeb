var mongoose = require('mongoose')

//Define Schema
var Schema = mongoose.Schema;
const ReclamationModelSchema = new Schema({

  titre: {
    type: String,
    trim: true,
    required: false

  },
  description_rec: {
    type: String,
    trim: true,
    required: false

  },
  date_rec: {
    trim: true,
    type:String,
    required: false

  },
  client:
    {type: mongoose.Schema.ObjectId,
      ref: "ClientModel"},

  responsable:
    {type: mongoose.Schema.ObjectId,
      ref: "Responsable"}
});
var ReclamationModel = mongoose.model('ReclamationModel', ReclamationModelSchema)
module.exports = ReclamationModel
