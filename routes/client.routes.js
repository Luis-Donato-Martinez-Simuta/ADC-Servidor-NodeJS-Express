var express = require('express');
var router = express.Router();
const clientController = require  ('../controller/client.controller');


router.post('/create_client' , clientController.create_client);
router.get('/client_all',  clientController.client_all);
router.put('/update_client' , clientController.update_client);
router.delete("/delete_client/:IdCliente",clientController.delete_client);
router.get("/getClientById/:IdCliente",  clientController.getClientById);
router.get("/genero_list", clientController.genero_list);
router.get("/estados_civiles_list",  clientController.estados_civiles_list);
router.get("/estudios_list",  clientController.estudios_list);
router.get("/tipovivienda_list",  clientController.tipovivienda_list);

module.exports = router;