const mongoose=require('mongoose')

const appointmentSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    appointmentDate:{
        type:Date,
        required:true
    },
    appointmentTime:{
        type:String
    },
    status:{
        type:String,
        enum:['Pending','Confirmed','Cancelled'],
        default:'Pending'
    },
    reason:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model('Appointment',appointmentSchema)