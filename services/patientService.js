import Patient from "../models/patientModel.js";

export const getAllPatients = async () =>{
    return await Patient.find();
}

export const getPatientById = async (id) => {
    const patient = await Patient.findById(id);
    return patient;
}

export const createPatient = async (patientData)=>{
    const newPatient = new Patient(patientData);
    await newPatient.save();
    return newPatient;
}

export const updatePatient = async (id , updateData) =>{
    const updatedPatient = await Patient.findByIdAndUpdate(id , updateData , {new: true})
    return updatedPatient;

}

export const deletePatient = async (id) =>{
    await Patient.findByIdAndDelete(id);
    return {message: "Patient deleted successfully"};
}

