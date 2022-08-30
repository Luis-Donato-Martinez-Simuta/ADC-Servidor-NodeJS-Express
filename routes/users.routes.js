var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller')

router.post('/create_user' , userController.create_user);
router.put('/update_user' , userController.update_user);
router.delete("/delete_user/:IdUsuario", userController.delete_user);
router.get('/all_User', userController.all_User); 
router.post('/login', userController.login); 
router.get('/user_By_IdUser/:IdUsuario', userController.user_By_IdUser);

module.exports = router;