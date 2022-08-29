import {
    getAllUser,
    login_user,
    _create_user,
    _update_user,
    _delete_user,
    getUserById
} from '../models/user.model.js'
import jwt from 'jsonwebtoken';

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


    _create_user(user, (data) => {
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

    console.log(user);


    _update_user(user, (data) => {
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

    // console.log(req.params);

    let {
        IdUsuario
    } = req.params;
    console.log("Eliminando usuario", req.params);

    _delete_user(IdUsuario, (data => {
        console.log(data);
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

    getAllUser((data) => {
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
    let password = req.body.password

    try {
        login_user(username, password, (data) => {
            let user = data[0];
            //console.log(user);
            if (user) {

                jwt.sign({
                    user
                }, "SECRET", {
                    expiresIn: '3h'
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

    //console.log(req.params);

    let {
        IdUsuario
    } = req.params;


    getUserById(IdUsuario, (data => {

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

export const userController = {
    create_user,
    update_user,
    delete_user,
    all_User,
    login,
    user_By_IdUser,
};