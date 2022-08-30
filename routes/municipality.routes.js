const Router = require('express');
const stateController = require ('../controller/municipality.controller');

const router = Router();

router.get('/municipality_listByIdState/:IdMunicipality' , stateController.getMunicipalityById);


module.exports = router;