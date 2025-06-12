import { getAllDoctors , getDoctorById, createDoctor , updateDoctor, deleteDoctor , getDoctorsBySpecialization } from "../services/doctorService.js";

export const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await getAllDoctors();
        return res.status(200).json(doctors);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching doctors" });
    }
}

export const getDoctorByIdController = async (req, res) => {
    try {
        const doctor = await getDoctorById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        return res.status(200).json(doctor);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createDoctorController = async (req, res) => {
    try {
        const newDoctor = await createDoctor(req.body);
        return res.status(201).json(newDoctor);
    } catch (error) {
        return res.status(500).json({ message: "Error creating doctor", error: error.message });
    }
}

export const updateDoctorController = async (req, res) => {
    try {
        const updatedDoctor = await updateDoctor(req.params.id, req.body);
        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        return res.status(200).json(updatedDoctor);
    } catch (error) {
        return res.status(500).json({ message: "Error updating doctor", error: error.message });
    }
}

export const deleteDoctorController = async (req, res) => {
    try {
        const deletedDoctor = await deleteDoctor(req.params.id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        return res.status(200).json(deletedDoctor);
    } catch (error) {
        return res.status(500).json({ message: "Error deleting doctor", error: error.message });
    }
}

export const getDoctorsBySpecializationController = async (req, res) => {
    try {
        const doctors = await getDoctorsBySpecialization(req.params.specialization);
        return res.status(200).json(doctors);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching doctors by specialization" });
    }
}
