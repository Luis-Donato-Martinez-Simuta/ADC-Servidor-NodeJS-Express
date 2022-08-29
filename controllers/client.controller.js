import {
    _create_cliente,
    getAllClient,
    _update_client,
    _delete_client,
    _getClientById,
    _genero_list,
    _estados_civiles_list,
    _estudios_list,
    _tipovivienda_list
} from "../models/client.model.js";

const create_client = async (req, res) => {

    let client = req.body;

    _create_cliente(client, (data) => {

        if(data ===-1){
            return res.status(200).json({
                error: true,
                status: 200,
                menssage: "Error en la peticion",
            });
        }else{

            let client = data;

            if (client) {
                return res.json({
                    error: false,
                    status: 200,
                    menssage: "Cliente Creado",
                    client
                });
            } else {
                return res.json({
                    error: false,
                    status: 201,
                    menssage: "Cliente no Creado",
                });
            }
        }

    })
};

//Traer todos los clientes.
const client_all = async (req, res) => {


    getAllClient((data) => {
        
        if (data === -1) {
            return res.json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",
            });
        } else {
            let clients = data;
            if (clients) {
                return res.json({
                    error: false,
                    status: 200,
                    message: "Se encontraron " + clients.length + " clientes",
                    clients,
                });
            } else {
                return res.json({
                    error: false,
                    status: 201,
                    menssage: "No se encontraron clientes",
                    clients
                });
            }
        }


    })


}


const estados_civiles_list = async (req, res) => {


    _estados_civiles_list((data) => {
        
        if (data === -1) {
            return res.json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",
            });
        } else {
            let estadosCiviles = data;
            if (estadosCiviles) {
                return res.json({
                    error: false,
                    status: 200,
                    estadosCiviles,
                });
            } else {
                return res.json({
                    error: false,
                    status: 201,
                    menssage: "No se encontraron estados civiles",
                    estadosCiviles
                });
            }
        }


    })


}


const estudios_list = async (req, res) => {


    _estudios_list((data) => {
        
        if (data === -1) {
            return res.json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",
            });
        } else {
            let estadosCiviles = data;
            if (estadosCiviles) {
                return res.json({
                    error: false,
                    status: 200,
                    estadosCiviles,
                });
            } else {
                return res.json({
                    error: false,
                    status: 201,
                    menssage: "No se encontraron estados civiles",
                    estadosCiviles
                });
            }
        }


    })


}

const update_client = async (req, res) => {

    let client = req.body;

    console.log("IdEstadoNegocioCliente: ",client.IdEstadoNegocioCliente);


    _update_client(client, (data) => {
        if (data === -1) {

            return res.status(500).json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",

            });
        } else {
            let status = data.status;
            return res.json({
                error: false,
                status: status,
                menssage: "Usuario actualizado",

            });
        }


    })


}

const delete_client = async (req, res) => {

    // console.log(req.params);

    let {
        IdCliente
    } = req.params;

    try {
        _delete_client(IdCliente, (data => {

            let status = data.status;
            //console.log(status);

            return res.json({
                error: false,
                status: 200,
                menssage: "Cliente Eliminado",

            });

        }))
    } catch (error) {
        return res.json({
            error: true,
            status: 500,
            menssage: "Error en el servidor",
            error: error.toString()
        });
    }
}

const getClientById = async (req, res) => {



    let {
        IdCliente
    } = req.params;

    if (!isNaN(IdCliente)) { // isNaN indica si es de tipo numero, si IdCliente = 2 retorna false
        await _getClientById(IdCliente, (data => {
            let client = data;

            if (client === -1) {
                return res.status(500).json({
                    error: false,
                    status: 500,
                    menssage: "Error en el servidor",
                    client: []
                });
            } else {
                if (client) {
                    return res.status(200).json({
                        error: false,
                        status: 200,
                        menssage: "Cliente encontrado",
                        client
                    });
                } else {
                    return res.json({
                        error: true,
                        status: 201,
                        menssage: "Cliente no encontrado",
                        client: []
                    });
                }

            }


        }))
    } else {
        return res.status(500).json({
            error: false,
            status: 200,
            menssage: "El parametro que mandas como Id no es numerico",
            client: []
        });
    }

}


const genero_list = async (req, res) => {


    _genero_list((data) => {
        
        if (data === -1) {
            return res.status(500).json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",
            });
        } else {
            let generos = data;
            if (generos) {
                return res.status(200).json({
                    error: false,
                    status: 200,
                    message: "Lista de generos disponibles",
                    generos,
                });
            } else {
                return res.status(5000).json({
                    error: false,
                    status: 201,
                    menssage: "No se encontraron clientes",
                    generos
                });
            }
        }


    })


}

const tipovivienda_list = async (req, res) => {


    _tipovivienda_list((data) => {
        
        if (data === -1) {
            return res.status(500).json({
                error: true,
                status: 500,
                menssage: "Error en la peticion",
            });
        } else {
            let titposVivienda = data;
            if (titposVivienda) {
                return res.status(200).json({
                    error: false,
                    status: 200,
                    message: "Lista de generos disponibles",
                    titposVivienda,
                });
            } else {
                return res.status(5000).json({
                    error: false,
                    status: 201,
                    menssage: "No se encontraron clientes",
                    titposVivienda
                });
            }
        }


    })


}

export const clientController = {
    create_client,
    client_all,
    update_client,
    delete_client,
    getClientById,
    genero_list,
    estados_civiles_list,
    estudios_list,
    tipovivienda_list,
};