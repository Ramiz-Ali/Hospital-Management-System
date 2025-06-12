import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    phone: Number,
    disease: String,
})

const Patient = mongoose.model("Patient" , patientSchema);
export default Patient;