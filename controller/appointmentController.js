const Appointment=require('../model/appointmentModel');
const doctorModel = require('../model/doctorModel');
const patientModel = require('../model/patientModel');

const getAppointment=async(req,res)=>{
    try {
      let appoints= await Appointment.find({}).populate('patientId','name').populate('doctorId','doctorName')
    //   console.log('Appints :',appoints);
      res.json({success:true,appoints})
      
    } catch (error) {
        console.log('Error in Fetching Appointment ',error);
        
    }
}

const addAppointment=async(req,res)=>{
    try {
        console.log('Req body ',req.body);
        const {userName,doctorName,appointmentDate,appointmentTime,status,reason}=req.body
        let patientId=await patientModel.findOne({name:userName})
        console.log('patient Name :',patientId)
        let doctorId=await doctorModel.findOne({doctorName})
        const newAppointment=new Appointment({
            patientId:patientId._id,
            doctorId:doctorId._id,
            appointmentDate,
            appointmentTime,
            status,
            reason
        })
        await newAppointment.save()
        res.json({success:true})
    } catch (error) {
        console.log('Error in Adding Appointments ',error);
    }
}

const deleteAppointment=async(req,res)=>{
    try {
        const id=req.params.id;
        const deletedAppointment=await Appointment.findByIdAndDelete(id)
        res.json({success:true})
    } catch (error) {
        console.log('Error in Deleting Appointment ',error);
        
    }
}

const getMyAppointment=async(req,res)=>{
    try {
        const patientId=req.params.patientId;

        const appoints=await Appointment.find({patientId}).populate('patientId','name').populate('doctorId','doctorName')
        console.log('Appooints : ',appoints);
        
        res.json({success:true,appoints})
    } catch (error) {
        console.log('Error in getting my Appointment');
    }
}

const getAppointmentDoctor = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;

    const appoints = await Appointment.find({ doctorId })
      .populate('patientId', 'name')
      .populate('doctorId', 'doctorName');

    console.log('Doctor Appointments:', appoints);

    res.json({ success: true, appoints });
  } catch (error) {
    console.log('Error in getAppointmentDoctor', error);
  }
};


const updateStatus=async (req,res)=>{
    try {
        const {status}=req.body
        await Appointment.findByIdAndUpdate(req.params.id,{status})
        res.json({ success: true });
    } catch (error) {
        
    }
}

module.exports={
    getAppointment,
    addAppointment,
    deleteAppointment,
    getMyAppointment,
    getAppointmentDoctor,
    updateStatus
}