import Doctor from '../models/doctorsModel.js';

export const getAllDoctors = async () => {
    return await Doctor.find();
} 

export const getDoctorById = async (id) => {
    const doctor = await Doctor.findById(id);
    return doctor;
}
export const createDoctor = async (doctorData) => {
    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();
    return newDoctor;
}
export const updateDoctor = async (id, updateData) => {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, updateData, { new: true });
    return updatedDoctor;
}   
export const deleteDoctor = async (id) => {
    await Doctor.findByIdAndDelete(id);
    return { message: 'Doctor deleted successfully' };
}
export const getDoctorsBySpecialization = async (specialization) => {
    return await Doctor.find({ specialization: specialization });
}