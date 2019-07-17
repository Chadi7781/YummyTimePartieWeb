var mongoose=require('mongoose')

//Define Schema
var Schema=mongoose.Schema;
const RestaurantModelSchema=new Schema({


  city:{
    type: String,
    trim: true,
    required: true

  },
 name:{
    type: String,
    trim: true,
    required: true

  },
  image:{
    type: String,
    trim: true,
    required: true
  },
  rating:{
    type: String,
    trim: true,

  },
  lat:{
    type: String,
    trim: true,
    required: true

  },
  lng:{
    type: String,
    trim: true,
    required: true
  },
  location:{
    type: String,
    trim: true,
    required: true
  },
  cuisine:{
    type:String,
    trim:true,
    required:true
  },
  openStatus:{
    type: Boolean,
    trim: true,

  },
  openingTime:{
    type: String,
//    default:Date.now(),
    trim: true,
    required: true

  },
  closingTime:{
    type: String,
    //default:Date.now(),
    trim: true,
    required: true
  },
  phone:{
    type: String,
    trim: true,
    required: true
  },
  adress:{
    type: String,
    trim: true,
   },
  imageList:{
    type: String,
    trim: true,
  },

  nombre_table:{
    type:Number,
    trim:true,
    required:true
  },
  etat:{
    type:Boolean,
     default: true
  },
  // client:
  //   [
  //     {type:Schema.Types.ObjectId,ref:"ClientModel"}
  //   ]


});

//compile model from Schema
var RestaurantModel=mongoose.model('RestaurantModel',RestaurantModelSchema)
module.exports=RestaurantModel
  
