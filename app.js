import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js'

import patientRoutes from './routes/patientRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import appointmentRoutes from './routes/appointmentRoute.js'
import authRoutes from './routes/authRoute.js';
const PORT = process.env.PORT || 3000;

connectDB()

const app = express();
app.use(express.json())
app.use('/patients' , patientRoutes)
app.use('/doctors', doctorRoutes);
app.use('/appointments' , appointmentRoutes)
app.use('/auth' , authRoutes)




app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`)
})