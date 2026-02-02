const Patient=require('../model/patientModel')
const Doctor=require('../model/doctorModel')

const loadPatients=async(req,res)=>{
    try {
       let patients= await Patient.find({})
       console.log(patients);
       
       res.status(200).json({success:true,patients:patients})
    } catch (error) {
        console.log('Error in Loading Patients',error);
        
    }
}

const addPatient=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        console.log('name :',name);
        console.log('email :',email);
        console.log('password :',password);
        const newUser=new Patient({
            name,
            email,
            password,
            role:'patient'
        })
        await newUser.save();
res.json({ success: true });
    } catch (error) {
        console.log('Error in Adding Patient : ',error);
        
    }
}

const deletePatient=async(req,res)=>{
    try {
        const id=req.params.id
        await Patient.findByIdAndDelete(id);
        // console.log('deleted Id  ',deletedUser)
        res.json({success:true})

    } catch (error) {
        console.log('Error in delete User ',error);
        
    }
}

const editPatient=async(req,res)=>{
    try {
        const id=req.params.id
        console.log('Edit Id is ',id);
        const PatientDet=req.body
        const updatePatientDetails=await Patient.findByIdAndUpdate(id,PatientDet,{new:true})
       
        console.log('Up Det : ',updatePatientDetails);
        res.json({success:true})
    } catch (error) {
        console.log('Error in Editing Patient',error);
        
    }
}

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        let user=await Patient.findOne({email})
        if (!user) {
      user = await Doctor.findOne({ email });
    }

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

        res.status(201).json({success:true,user:{
            id:user._id,
            name:user.name  || user.doctorName,
            email:user.email,
            role:user.role
        }})
    } catch (error) {
        console.log('Error in Login Patient ',error);
        
    }
}




module.exports={
    loadPatients,
    addPatient,
    deletePatient,
    editPatient,
    loginUser,
}