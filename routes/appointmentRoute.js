import {getAllAppointmentsController , createAppointmentController , updateAppointmentController , deleteAppointmentController} from "../controllers/appointmentController.js"

import express from 'express';
const router = express.Router();
router.get('/' , getAllAppointmentsController)
router.post('/' , createAppointmentController)
router.patch('/:id' , updateAppointmentController)
router.delete('/:id' , deleteAppointmentController)

export default router;
