var express = require('express');
var router = express.Router();
const clientController = require('../controller/client.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");   

router.post('/create_client', verifyToken, clientController.create_client);
router.get('/client_all', verifyToken, clientController.client_all);
router.put('/update_client', verifyToken, clientController.update_client);
router.delete("/delete_client/:IdCliente", verifyToken, clientController.delete_client);
router.get("/getClientById/:IdCliente", verifyToken, clientController.getClientById);
router.get("/genero_list", verifyToken, clientController.genero_list);
router.get("/estados_civiles_list", verifyToken, clientController.estados_civiles_list);
router.get("/estudios_list", verifyToken, clientController.estudios_list);
router.get("/tipovivienda_list", verifyToken, clientController.tipovivienda_list);

router.post("/client_buscar_por_nombre", verifyToken, clientController.client_buscar_por_nombre);



module.exports = router;