const Router = require('express');
const stateController = require('../controller/municipality.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");
const router = Router();

router.get('/municipality_listByIdState/:IdMunicipality', verifyToken, stateController.getMunicipalityById);


module.exports = router;