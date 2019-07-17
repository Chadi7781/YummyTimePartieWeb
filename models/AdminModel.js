var mongoose = require('mongoose');
var Schema=mongoose.Schema;


const User = require('./UserModel');
const Admin = User.discriminator('Admin', new mongoose.Schema({

  role:{
    type: mongoose.Schema.ObjectId,
    ref : 'role'
  }

  }))

module.exports= Admin;
