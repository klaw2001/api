import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    dateofbirth:{
        type:Date,
        required:false
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    about:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:null
    },
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user', 
      },
    // status:{
    //     type:Number,
    //     required:true
    // }
})

export default mongoose.model("User",UserSchema)