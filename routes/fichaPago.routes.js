const Router = require('express');
const fichaPagoController = require('../controller/fichaPago.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");

const router = Router();

router.post('/ficha_pago_create', verifyToken, fichaPagoController.ficha_pago_create);


module.exports = router;