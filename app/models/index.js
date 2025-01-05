import  mongoose, { Schema } from "mongoose";

const usersSchema= new Schema({
name:{
  required:true,
  type: String
},
email:{
  required:true,
  type: String
},
password:{
  required:true,
  type: String
},
phone:{
  required:true,
  type: String
},
wishlist:{
  required:false,
  type: Array
},
});

export const usersModel= mongoose.models.users ?? mongoose.model('users',usersSchema);