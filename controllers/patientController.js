import {getPatientById, getAllPatients, createPatient, updatePatient, deletePatient} from '../services/patientService.js';

export const getAllPatientsController = async (req, res) =>{
    try {
        const patients =  await getAllPatients();
        return res.status(200).json(patients)
    }
    catch (error){
        return res.status(500).json({message: "Error fartchig patients"})
    }
}

export const getPatientByIdController = async (req, res) =>{
    try{
        const patient =  await getPatientById(req.params.id)
        if(!patient){
            return res.status(404).json({message: "Patient not found"})
        }
        return res.status(200).json(patient)
    }
    catch (err){
        return res.status(500).json(err.message);
    }
}

export const createPatientController = async (req, res) =>{
    try{
        const newPatient = await createPatient(req.body)
        return res.status(201).json(newPatient)
    }
    catch(error){
        return res.status(500).json({message: "Error creating patient" , error :err.message})
    }
}

export const updatePatientController = async (req, res) =>{
    try{
        const updatedPatient =  await updatePatient(req.params.id , req.body);
        if(!updatedPatient){
            res.status(404).json({message: "Patient not found"})
        }
        res.status(200).json(updatedPatient)
    }
    catch (error){
        return res.status(500).json({message: "Error updating patient" , error: err.message})
    }
}

export const deletePatientController = async (req, res) =>{
    try{
        const deletedPatient = await deletePatient(req.params.id);
        if(!deletedPatient){
            return res.status(404).json({message: "Patient not found"})
        }
        return res.status(200).json(deletedPatient)
    }
    catch (error){
        return res.status(500).json({message: "Error deleting patient" , error: err.message})
    }
}

