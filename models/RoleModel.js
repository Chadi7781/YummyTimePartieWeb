const mongoose=require('mongoose')
const Schema= mongoose.Schema;

const roleSchema=new Schema({
  nom:{
    type:String

  }
})
module.exports=mongoose.model('role',roleSchema)
