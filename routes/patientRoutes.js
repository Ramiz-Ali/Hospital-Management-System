import { getAllPatientsController , getPatientByIdController , createPatientController, updatePatientController , deletePatientController ,  } from "../controllers/patientController.js";

import express from 'express';

const route =  express.Router();
route.get('/' ,getAllPatientsController)
route.get('/:id' , getPatientByIdController);
route.post('/' , createPatientController);
route.patch('/:id' , updatePatientController);
route.delete('/:id' , deletePatientController);

export default route
