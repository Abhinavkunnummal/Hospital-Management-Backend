const mongoose=require('mongoose')

const doctorSchema=new mongoose.Schema({
    doctorName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    role:{
        type:String,
        default:'doctor'
    },
    specialization:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Doctor',doctorSchema)