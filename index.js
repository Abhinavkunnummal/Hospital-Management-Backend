const express =require('express')
const connectDB = require('./config/db')
const app=express()
const cors=require('cors')
require('dotenv').config();
connectDB()
app.use(express.json())
app.use(cors())
const patientRoute=require('./routes/patientRoute')
const doctorRoute=require('./routes/doctorRoute')
const appointmentRoute=require('./routes/appointmentRoute')

app.use('/patient',patientRoute)
app.use('/doctor',doctorRoute)
app.use('/appointment',appointmentRoute)

app.listen(3000,()=>{
    console.log('Server is running on 3000');   
})