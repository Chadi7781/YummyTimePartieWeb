var mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: 'items', // the name of our collection
}
Schema=mongoose.Schema;

const User = mongoose.model('User', new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique : true
    },
    password: {
      type: String,
    },

  },
  baseOptions
).pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
})
);

module.exports = mongoose.model('User');
