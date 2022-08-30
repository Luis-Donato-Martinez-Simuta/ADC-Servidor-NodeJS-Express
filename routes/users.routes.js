var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller')
var {
    verifyToken
} = require("../middleware/user.middleware");

router.post('/create_user', verifyToken, userController.create_user);
router.put('/update_user', verifyToken, userController.update_user);
router.delete("/delete_user/:IdUsuario", verifyToken, userController.delete_user);
router.get('/all_User', verifyToken, userController.all_User);
router.post('/login', userController.login);
router.get('/user_By_IdUser/:IdUsuario', verifyToken, userController.user_By_IdUser);

module.exports = router;