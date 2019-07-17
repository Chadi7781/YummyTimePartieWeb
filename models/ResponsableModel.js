var mongoose = require('mongoose');
const User = require('./UserModel');

Schema = mongoose.Schema
const Responsable = User.discriminator('Responsable', new mongoose.Schema({



  etat : {
    type : Boolean,
    default : false
  },

  nom_resto:{
    type: String,
    trim: true,
    required: true

  },

  nom:{
    type: String,
    trim: true,
    required: true

  },

  numero_telephone:{
    type:String,
    trim:true
  },
  adress:{
    type:String,
    trim:true
  },

  role:{
    type: mongoose.Schema.ObjectId,
  ref : 'role'
}
  })
);
module.exports = mongoose.model('Responsable');

