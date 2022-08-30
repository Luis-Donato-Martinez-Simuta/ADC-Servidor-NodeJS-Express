const Router = require('express');
const stateController = require('../controller/states.controller');
var {
    verifyToken
} = require("../middleware/user.middleware");
const router = Router();

router.get('/states_list', verifyToken, stateController.getAllStates);


module.exports = router;