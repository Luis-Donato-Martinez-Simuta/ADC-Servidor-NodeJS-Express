import {
    createConnection
} from 'mysql';
import {
    conexion
} from "../database/MySQL.database.js";

//Crear Cliente
export const _create_cliente = (client, callback) => {

    let sql = 
    `
    CALL client_new(
        '${client.sucursalCliente}', 
        ${client.IdTipoPersonaCliente}, 
        '${client.nombreCliente}', 
        '${client.paternoCliente}', 
        '${client.maternoCliente}', 
        '${client.fechaNacimientoCliente}', 
        ${client.IdEstadoEntidadNacimientoCliente}, 
        '${client.lugarNacimientoCliente}', 
        ${client.IdTipoGeneroCliente}, 
        ${client.IdEstadoCivilCliente}, 
        ${client.IdEstudioCliente}, 
        '${client.IFENumeroCliente}', 
        '${client.IFEFolioCliente}',
        '${client.IFEclaveCliente}',
        '${client.CURPCliente}', 
        '${client.RFCCliente}',
        '${client.telefonoCliente}', 
        '${client.celularCliente}', 
        '${client.emailCliente}', 
        ${client.IdNacionalidadCliente}, 
        '${client.paisOrigenCliente}', 
        ${client.IdPaisDomicilioCliente}, 
        ${client.IdEstadoDomicilioCliente},
        ${client.IdMunicipioDomicilioCliente},
        '${client.localidadNegocioCliente}', 
        '${client.domicilioCliente}', 
        '${client.CodigoPostalDomicilioCliente}', 
        ${client.IdTipoViviendaCliente},
        '${client.ubicacionGPSCliente}',
        '${client.nombreConyugueCliente}',
        '${client.paternoConyugueCliente}',
        '${client.puestoConyugueCliente}', 
        '${client.maternoConyugueCliente}', 
        '${client.lugarTrabajoConyugueCliente}',
        '${client.antiguedadConyugueCliente}',
        ${client.anosConyugueCliente}, 
        ${client.mesesConyugueCliente},
        '${client.descripcionNegocioCliente}',
        '${client.expreienciaNegocioCliente}',
        '${client.antigudadNegocioCliente}', 
        ${client.pagoDiarioCliente}, 
        ${client.abreLunes},
        ${client.abreMartes}, 
        ${client.abreMiercoles},
        ${client.abreJueves},
        ${client.abreViernes}, 
        ${client.abreSabado},
        ${client.abreDomingo}, 
        '${client.telefonoNegocioCliente}',
        '${client.horaAperturaCliente}',
        '${client.horaCierreCliente}',
        '${client.lugarNegocioCliente}', 
        '${client.nombrePropietarioCliente}', 
        ${client.IdPaisNegocioCliente}, 
        ${client.IdEstadoNegocioCliente},
        ${client.IdMunicipioNegocioCliente},
        '${client.localidadDomicilioCliente}',
        '${client.codigoPostalNegocioCliente}', 
        '${client.domicilioNegocioCliente}', 
        '${client.numeroTelefonoNegocioCliente}'
    )
    `
    let connection = createConnection(conexion);
    console.log("????",client.mesesConyugueCliente);
    console.log(sql);
    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end(data[0][0]);
            return callback(data[0][0]);
        };
        connection.end();
        return callback(null);
    });

}

//Traer todos los usuarios.
export const getAllClient = (callback) => {

    let sql = 'call client_list()';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return callback(-1)
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

export const _estados_civiles_list = (callback) => {

    let sql = 'call estados_civiles_list()';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return callback(-1)
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

export const _estudios_list = (callback) => {

    let sql = 'call estudios_list()';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return callback(-1)
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

export const _tipovivienda_list = (callback) => {

    let sql = 'call tipovivienda_list()';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return callback(-1)
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

export const _genero_list = (callback) => {

    let sql = 'call genero_list()';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return callback(-1)
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

//Actualizar Cliente.
export const _update_client = (client, callback) => {

    let sql = 
    `
    CALL client_upDate(
        '${client.IdCliente}', 
        '${client.sucursalCliente}', 
        ${client.IdTipoPersonaCliente}, 
        '${client.nombreCliente}', 
        '${client.paternoCliente}', 
        '${client.maternoCliente}', 
        '${client.fechaNacimientoCliente}', 
        ${client.IdEstadoEntidadNacimientoCliente}, 
        '${client.lugarNacimientoCliente}', 
        ${client.IdTipoGeneroCliente}, 
        ${client.IdEstadoCivilCliente}, 
        ${client.IdEstudioCliente}, 
        '${client.IFENumeroCliente}', 
        '${client.IFEFolioCliente}',
        '${client.IFEclaveCliente}',
        '${client.CURPCliente}', 
        '${client.RFCCliente}',
        '${client.telefonoCliente}', 
        '${client.celularCliente}', 
        '${client.emailCliente}', 
        ${client.IdNacionalidadCliente}, 
        '${client.paisOrigenCliente}', 
        ${client.IdPaisDomicilioCliente}, 
        ${client.IdEstadoDomicilioCliente},
        ${client.IdMunicipioDomicilioCliente},
        '${client.localidadNegocioCliente}', 
        '${client.domicilioCliente}', 
        '${client.CodigoPostalDomicilioCliente}', 
        ${client.IdTipoViviendaCliente},
        '${client.ubicacionGPSCliente}',
        '${client.nombreConyugueCliente}',
        '${client.paternoConyugueCliente}',
        '${client.puestoConyugueCliente}', 
        '${client.maternoConyugueCliente}', 
        '${client.lugarTrabajoConyugueCliente}',
        '${client.antiguedadConyugueCliente}',
        ${client.anosConyugueCliente}, 
        ${client.mesesConyugueCliente},
        '${client.descripcionNegocioCliente}',
        '${client.expreienciaNegocioCliente}',
        '${client.antigudadNegocioCliente}', 
        ${client.pagoDiarioCliente}, 
        ${client.abreLunes},
        ${client.abreMartes}, 
        ${client.abreMiercoles},
        ${client.abreJueves},
        ${client.abreViernes}, 
        ${client.abreSabado},
        ${client.abreDomingo}, 
        '${client.telefonoNegocioCliente}',
        '${client.horaAperturaCliente}',
        '${client.horaCierreCliente}',
        '${client.lugarNegocioCliente}', 
        '${client.nombrePropietarioCliente}', 
        ${client.IdPaisNegocioCliente}, 
        ${client.IdEstadoNegocioCliente},
        ${client.IdMunicipioNegocioCliente},
        '${client.localidadDomicilioCliente}',
        '${client.codigoPostalNegocioCliente}', 
        '${client.domicilioNegocioCliente}', 
        '${client.numeroTelefonoNegocioCliente}'
    )
    `


    let connection = createConnection(conexion);
    //console.log(sql);
    connection.query(sql, [], (err, data) => {
        //console.log(err);
        if (err) {
            console.log(err);
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0][0]);
        };
        connection.end();
        return callback(null);

    });
}

//Eliminar cliente.
export const _delete_client = (IdUCliente, callback) => {

    let sql = 'call client_delete(' + IdUCliente + ')';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

export const _getClientById = (IdCliente, callback) => {

    let sql = 'call client_byId(' + IdCliente + ')';
    // console.log(sql);
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            //console.log(err);
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0][0])
        };
        connection.end();
        return callback(null);

    });

}