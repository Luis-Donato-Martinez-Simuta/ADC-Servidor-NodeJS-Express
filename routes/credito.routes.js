const Router = require('express');
const creditoController = require('../controller/credito.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");

const router = Router();

router.post('/crear_solicutud_credito', verifyToken, creditoController.crear_solicitud_credito);

router.post('/bucar_credito_por_Id/:IdCredito', verifyToken, creditoController.bucar_credito_por_Id);

router.get('/creditos_sinaprobar_list', verifyToken, creditoController.creditos_sinaprobar_list);

router.post('/credito_update_status', verifyToken, creditoController.credito_update_status);


module.exports = router;    