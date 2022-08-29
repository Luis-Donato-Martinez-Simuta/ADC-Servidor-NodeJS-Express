import { Router } from 'express';
import { stateController } from '../controllers/states.controller.js'

const router = Router();

router.get('/states_list' , stateController.getAllStates);


export default router;