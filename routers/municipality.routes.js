import { Router } from 'express';
import { stateController } from '../controllers/municipality.controller.js'

const router = Router();

router.get('/municipality_listByIdState/:IdMunicipality' , stateController.getMunicipalityById);


export default router;