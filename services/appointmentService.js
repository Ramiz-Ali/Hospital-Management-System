import Appointment from "../models/appointmentModel.js";

export const getAllAppointments = async () =>{
    return await Appointment.find();
}

export const createAppointment = async (appointmentData) =>{
    const newAppointment = new Appointment(appointmentData);
    await newAppointment.save();
    return newAppointment;
}

export const updateAppointment = async (id , updateData) =>{
    const updatedAppointment = await Appointment.findByIdAndUpdate(id , updateData , {new: true})
    return updatedAppointment;
}

export const deleteAppointment = async (id) =>{
    await Appointment.findByIdAndDelete(id)
    return {message : "Appointment deleted successfully"}
}