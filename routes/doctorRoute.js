const express=require('express')
const router=express.Router()
const doctorController=require('../controller/doctorController')



router.get('/',doctorController.loadDoctors)
router.post('/add',doctorController.addDoctors)
router.put('/:id',doctorController.editDoctor)
router.delete('/:id',doctorController.deleteDoctor)
router.get('/:id',doctorController.getDoctorByid)


module.exports=router