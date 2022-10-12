var userModel = require('../model/user.model')
var jwt = require('jsonwebtoken')
var middlewareUser = require('../middleware/user.middleware')
const {secret} = require('../config/server.config');
const create_user = async (req, res) => {

    let user = {
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        fechaNacimiento: req.body.fechaNacimiento,
        username: req.body.username,
        password: req.body.password,
        direccion: req.body.direccion
    }


    userModel._create_user(user, (data) => {
        let user = data;
        if (data === -1) {
            return res.status(500).json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",
                user
            });
        }

        if (user) {
            return res.json({
                error: false,
                status: 200,
                menssage: "Usuario Creado",
                user
            });
        } else {
            return res.json({
                error: false,
                status: 201,
                menssage: "Usuario no Creado",
                user
            });
        }
    })


};

const update_user = async (req, res) => {

    let user = {
        IdUsuario: req.body.IdUsuario,
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        fechaNacimiento: req.body.fechaNacimiento,
        username: req.body.username,
        password: req.body.password,
        direccion: req.body.direccion,
        status: req.body.status
    }



    userModel._update_user(user, (data) => {
        let status = data.status;

        if (data === -1) {
            return res.status(500).json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",

            });
        } else {
            return res.json({
                error: false,
                status,
                menssage: "Usuario Actualizado",

            });
        }
    })


}

const delete_user = async (req, res) => {



    let {
        IdUsuario
    } = req.params;
 
    userModel._delete_user(IdUsuario, (data => {
  
        if (data === -1) {
            return res.status(500).json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",

            });
        } else {
            let status = data[0].status;
            return res.json({
                error: false,
                status: status,
                menssage: "Usuario Eliminado",

            });
        }
    }))

}

const all_User = async (req, res) => {

    userModel.getAllUser((data) => {
        if (data === -1) {
            res.status(500).json({
                error: true,
                status: 500,
                message: "Error en la peticion",
            });
        } else {
            let users = data;
            res.json({
                error: false,
                status: 200,
                message: "Se encontraron " + users.length + " usuarios",
                users,
            });
        }

    })
}

const login = async (req, res) => {

    let username = req.body.username
    let password = middlewareUser.hashing(req.body.password);


    try {
        userModel.login_user(username, password, (data) => {
            let user = data[0];
          
            if (user) {

                if(user.status == 1){
                    jwt.sign({
                        user
                    }, secret, {
                        expiresIn: '24h'
                    }, (err, token) => {
                        if (err) {
                            res.json({
                                error: true,
                                tipoError: 403,
                                mesage: "Error en el servidor",
                            });
                        } else {
                            user.token = token;
                            return res.json({
                                error: false,
                                status: 200,
                                menssage: "Usuario encontrado",
                                user,
                                //token
                            });
                        }
                    });
                }else{
                    return res.json({
                        error: false,
                        status: 202,
                        menssage: "Usuario no activo",
                        user: []
                    });
                }



            } else {
                return res.json({
                    error: false,
                    status: 201,
                    menssage: "Usuario no encontrado",
                    user: []
                });
            }

        })
    } catch (error) {
        return res.json({
            error: true,
            status: 500,
            menssage: "Error en el servidor",
            error: error.toString()
        });
    }

}

const user_By_IdUser = async (req, res) => {

   
    let {
        IdUsuario
    } = req.params;


    userModel.getUserById(IdUsuario, (data => {

        let user = data;
        if (user === -1) {
            return res.json({
                error: true,
                status: 500,
                menssage: "Error en el servidor",

            });
        }
        if (user) {
            return res.json({
                error: false,
                status: 200,
                menssage: "Usuario encontrado",
                user
            });
        } else {
            return res.json({
                error: false,
                status: 201,
                menssage: "Usuario no encontrado",
                user: []
            });
        }

    }))
}


module.exports = {
    login,
    all_User,
    create_user,
    delete_user,
    update_user,
    user_By_IdUser,
    
};

