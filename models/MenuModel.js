var mongoose = require('mongoose');
var Schema=mongoose.Schema;

const Menu = mongoose.model('Menu', new Schema({
  titre: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  }
  },
  {
  timestamps: true
}));
module.exports = mongoose.model('Menu');
