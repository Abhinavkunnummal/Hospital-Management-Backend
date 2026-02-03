const express =require('express')
const connectDB = require('./config/db')
const app=express()
const cors=require('cors')
require('dotenv').config();
connectDB()
app.use(express.json())
app.use(cors({
  origin: [
    'https://hospital-management-frontend-ecru.vercel.app'
  ],
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));
const PORT = process.env.PORT || 3000;
const patientRoute=require('./routes/patientRoute')
const doctorRoute=require('./routes/doctorRoute')
const appointmentRoute=require('./routes/appointmentRoute')

app.use('/patient',patientRoute)
app.use('/doctor',doctorRoute)
app.use('/appointment',appointmentRoute)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});