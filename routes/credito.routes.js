const Router = require('express');
const creditoController = require('../controller/credito.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");

const router = Router();

router.post('/crear_solicutud_credito', verifyToken, creditoController.crear_solicitud_credito);

router.put('/credito_actualizar_solicitus', verifyToken, creditoController.credito_actualizar_solicitus);

router.post('/bucar_credito_por_Id/:IdCredito', verifyToken, creditoController.bucar_credito_por_Id);

router.post('/creditos_sinaprobar_list', verifyToken, creditoController.creditos_sinaprobar_list);

router.post('/credito_update_status', verifyToken, creditoController.credito_update_status);

router.delete('/credito_eliminar_encabezado_y_detalle_byId/:IdCredito', verifyToken, creditoController.credito_eliminar_encabezado_y_detalle_byId);

router.post('/credito_buscar', verifyToken, creditoController.credito_buscar);

router.get('/credito_detalle_list_ById/:IdCredito', verifyToken, creditoController.credito_detalle_list_ById);

router.post('/pagarCuota', verifyToken, creditoController.pagarCuota);

module.exports = router;    