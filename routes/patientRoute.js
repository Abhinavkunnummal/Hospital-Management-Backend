const express=require('express')
const router=express.Router()
const patientController=require('../controller/patientController')


router.get('/',patientController.loadPatients)
router.post('/add',patientController.addPatient)
router.delete('/:id',patientController.deletePatient)
router.put('/:id',patientController.editPatient)
router.post('/login',patientController.loginUser)

module.exports=router