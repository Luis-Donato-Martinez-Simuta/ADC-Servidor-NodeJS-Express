const Router = require('express');
const fichaPagoController = require('../controller/fichaPago.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");

const router = Router();

router.post('/ficha_pago_create', verifyToken, fichaPagoController.ficha_pago_create);
router.get('/ficha_pago_list', verifyToken, fichaPagoController.ficha_pago_list);
router.post('/ficha_pago_updateDate', verifyToken, fichaPagoController.ficha_pago_updateDate);
router.post('/ficha_pago_list_ById/:IdFichaPago', verifyToken, fichaPagoController.ficha_pago_list_ById);



module.exports = router;