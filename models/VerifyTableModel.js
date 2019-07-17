var mongoose=require('mongoose')

//Define Schema
  var Schema=mongoose.Schema;
  const VerifyTableModelSchema=new Schema({

  etatTable:{
    type: String,
    trim: true,
    required: true
  },
    nombre_total:{
    type:Number,
      trim:true,
      required:true,
    },
    position:{
    type:String,
    trim:false,
    }

});

//compile model from Schema
var VerifyTableModel=mongoose.model('VerifyTableRouter',VerifyTableModelSchema)
module.exports=VerifyTableModel;
