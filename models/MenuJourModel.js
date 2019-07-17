var mongoose = require('mongoose');
const Menu = require('./MenuModel');
const Schema=mongoose.Schema
const MenuJour = Menu.discriminator('MenuJour', new Schema({

  list_image: {
    type: String,
    trim: true,
    required: false,
  },
  type: {
    type: String,
    trim: true,
    required: true
  },

  prix: {
    type: String,
    trim: true,
    required: true
  },
  nbr_choix: {
    type: Number,
    trim: true,
    required: true
  },

}));
module.exports = mongoose.model('MenuJour');

