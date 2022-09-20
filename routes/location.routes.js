const Router = require('express');
const locationController = require('../controller/location.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");
const router = Router();

router.get('/localidad_listByIdMunicipality/:IdMunicipality', verifyToken, locationController.getLocationByIdMunicipality);


module.exports = router;