var mongoose = require('mongoose');
const User = require('./UserModel');
const Schema=mongoose.Schema
const ClientSchema = User.discriminator('ClientModel', new Schema({

  image: {
    trim: true,
    required: false,
    type: String
  },

  nom: {
    type: String,
    trim: true,
  },
  prenom: {
    type: String,
    trim: true,
  },
  numero_telephone: {
    type: String,
    trim: true,
  },
  sexe: {
    type: String,
    trim: true
  },
  adresse: {
    type: String,
    trim: true,
  },



  reservationtable:
    [
    {type: Schema.Types.ObjectId, ref: "ReservationTableModel"}
    ],
  restaurants:
    [
      {type:Schema.Types.ObjectId,ref:"RestaurantModel"}
    ],
}));


//   offres:
//     [
//       {type:Schema.Types.ObjectId,ref:"OffreModel"}
//     ]
//   })

module.exports = mongoose.model('ClientModel');
