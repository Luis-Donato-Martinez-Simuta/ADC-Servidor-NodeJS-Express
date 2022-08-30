const  Router = require('express');
const stateController  = require('../controller/states.controller');

const router = Router();

router.get('/states_list' , stateController.getAllStates);


module.exports = router;