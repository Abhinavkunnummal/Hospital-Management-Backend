const express=require('express')
const router=express.Router()
const appointmentController=require('../controller/appointmentController')

router.get('/', appointmentController.getAppointment);
router.post('/add', appointmentController.addAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

router.get('/patient/:patientId', appointmentController.getMyAppointment);
router.get('/doctor/:doctorId', appointmentController.getAppointmentDoctor);

router.put('/status/:id', appointmentController.updateStatus);



module.exports=router