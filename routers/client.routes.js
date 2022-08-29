import { Router } from 'express';
import { clientController } from '../controllers/client.controller.js'

const router = Router();

router.post('/create_client' , clientController.create_client);
router.get('/client_all',  clientController.client_all);
router.put('/update_client' , clientController.update_client);
router.delete("/delete_client/:IdCliente",clientController.delete_client);
router.get("/getClientById/:IdCliente",  clientController.getClientById);
router.get("/genero_list", clientController.genero_list);
router.get("/estados_civiles_list",  clientController.estados_civiles_list);
router.get("/estudios_list",  clientController.estudios_list);
router.get("/tipovivienda_list",  clientController.tipovivienda_list);

export default router;