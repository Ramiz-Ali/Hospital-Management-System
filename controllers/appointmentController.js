import { getAllAppointments, createAppointment, updateAppointment, deleteAppointment } from '../services/appointmentService.js'

export const getAllAppointmentsController = async (req, res) => {
    try {
        const appointmets = await getAllAppointments();
        return res.status(200).json(appointmets);
    }
    catch(error){
        return res.status(500).json({Message: "Error Fetching Appointments"})
    }
}

export const createAppointmentController = async (req , res) =>{
    try{
        const newAppointment = await createAppointment(req.body)
        return res.status(201).json(newAppointment);
    }
    catch(error){
        res.status(500).json({message: "Error creating doctor" , error: error.message})
    }
}

export const updateAppointmentController = async (req, res) =>{
    try {
        const updatedAppointment = await updateAppointment (req.params.id , req.body)
        if(!updatedAppointment){
            res.status(404).json({message: "Appointment not found"})
        }
        return res.status(201).json(updatedAppointment)
    }
    catch(error){
        res.status(500).json({message : "Error updating appointment" , error: error.message})
    }
}

export const deleteAppointmentController =  async (req , res) =>{
    try{
        const deletedAppointment = await deleteAppointment(req.params.id)
        if(!deletedAppointment){
            return res.status(404).json({message: "Appointment not found"})
        }
        return res.status(201).json(deletedAppointment)
    }
    catch(error){
        return res.status(500).json({message : "Error updating appointment" , error: error.message})
    }
}