import {getAllDoctorsController , getDoctorByIdController, createDoctorController, updateDoctorController, deleteDoctorController, getDoctorsBySpecializationController} from '../controllers/doctorController.js';

import express from 'express';
const router = express.Router();
router.get('/', getAllDoctorsController);
router.get('/:id', getDoctorByIdController);
router.post('/', createDoctorController);
router.patch('/:id', updateDoctorController);
router.delete('/:id', deleteDoctorController);
router.get('/specialization/:specialization', getDoctorsBySpecializationController);

export default router;