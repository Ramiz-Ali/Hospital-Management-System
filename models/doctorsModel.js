import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    specilization: String,
    phone: Number,
    email: String,
})

const Doctor = mongoose.model("Doctor" , doctorSchema)

export default  Doctor;