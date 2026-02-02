const Doctor = require("../model/doctorModel");

const loadDoctors = async (req, res) => {
  try {
    let doctors = await Doctor.find({});
    //    console.log('Doctors ',doctors);
    res.json({ success: true, doctors: doctors });
  } catch (error) {
    console.log("Error While Fetching The Doctor ", error);
  }
};

const addDoctors = async (req, res) => {
  try {
    const { doctorName,email, specialization, password } = req.body;
    // console.log('name :',doctorName);
    // console.log('email :',specialization);
    // console.log('password :',password);

    const newDoctor = new Doctor({
      doctorName,
      email,
      specialization,
      password,
      role: "doctor",
    });
    await newDoctor.save();
    res.json({ success: true });
  } catch (error) {
    console.log("Error while Adding Doctors ", error);
  }
};

const editDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log('params id :',id);

    const doctorDet = req.body;
    // console.log('body id :',doctorDet);
    const editedDetails = await Doctor.findByIdAndUpdate(id, doctorDet, {
      new: true,
    });
    // console.log('Edited :',editedDetails);

    res.json({ success: true });
  } catch (error) {
    console.log("Error in editDoctor", error);
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    console.log("Error While Deleting Doctor ", error);
  }
};

const getDoctorByid = async (req, res) => {
  try {
    const id = req.params.id;
    const findDoctor = await Doctor.findById(id);
    console.log("doct :", findDoctor);
    res.json({ success: true, findDoctor });
  } catch (error) {
    console.log("Error in Finding Doctor by id ", error);
  }
};

module.exports = {
  loadDoctors,
  addDoctors,
  editDoctor,
  deleteDoctor,
  getDoctorByid,
};
