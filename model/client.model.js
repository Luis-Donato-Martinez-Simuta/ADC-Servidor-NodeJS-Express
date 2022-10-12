const database = require('../config/database.config')
const conexion = database.conexion;
const createConnection = database.createConnection;


const _create_cliente = (client, callback) => {

    let sql =
        `
    CALL client_new(
        '${client.sucursalCliente}', 
		'${client.IdTipoPersonaCliente}',
		'${client.nombreCliente}', 
		'${client.paternoCliente}', 
		'${client.maternoCliente}', 
		'${client.fechaNacimientoCliente}',
		'${client.IdEstadoEntidadNacimientoCliente}', 
		'${client.lugarNacimientoCliente}',
		'${client.IdTipoGeneroCliente}', 
		'${client.IdEstadoCivilCliente}',
		'${client.IdEstudioCliente}', 
		'${client.IFENumeroCliente}', 
		'${client.IFEFolioCliente}', 
		'${client.IFEclaveCliente}', 
		'${client.CURPCliente}', 
		'${client.RFCCliente}', 
		'${client.telefonoCliente}',
		'${client.celularCliente}',
		'${client.emailCliente}', 
		'${client.IdNacionalidadCliente}',
		'${client.paisOrigenCliente}', 
		'${client.IdPaisDomicilioCliente}',
		'${client.IdEstadoDomicilioCliente}',
		'${client.IdMunicipioDomicilioCliente}',
		'${client.IdLocalidadDomicilioCliente}', 
		'${client.localidadNegocioCliente}', 
		'${client.domicilioCliente}', 
		'${client.CodigoPostalDomicilioCliente}', 
		'${client.IdTipoViviendaCliente}',
		'${client.ubicacionGPSCliente}',
		'${client.nombreConyugueCliente}',
		'${client.paternoConyugueCliente}', 
		'${client.maternoConyugueCliente}', 
		'${client.lugarTrabajoConyugueCliente}',
		'${client.puestoConyugueCliente}', 
		'${client.antiguedadConyugueCliente}', 
		'${client.anosConyugueCliente}', 
		'${client.mesesConyugueCliente}',
		'${client.descripcionNegocioCliente}',
		'${client.expreienciaNegocioCliente}', 
		'${client.antigudadNegocioCliente}', 
		'${client.pagoDiarioCliente}',
		'${client.abreLunes}', 
		'${client.abreMartes}',
		'${client.abreMiercoles}', 
		'${client.abreJueves}', 
		'${client.abreViernes}', 
		'${client.abreSabado}', 
		'${client.abreDomingo}',
		'${client.telefonoNegocioCliente}', 
		'${client.horaAperturaCliente}',
		'${client.horaCierreCliente}', 
		'${client.lugarNegocioCliente}', 
		'${client.nombrePropietarioCliente}', 
		'${client.IdPaisNegocioCliente}', 
		'${client.IdEstadoNegocioCliente}',
		'${client.IdMunicipioNegocioCliente}',
		'${client.IdLocalidadNegocioCliente}', 
		'${client.localidadDomicilioCliente}', 
		'${client.codigoPostalNegocioCliente}', 
		'${client.domicilioNegocioCliente}', 
		'${client.numeroTelefonoNegocioCliente}'
    )
    `
    let connection = createConnection(conexion);

    console.log(sql);

    connection.query(sql, (err, data) => {
        if (err) {
           
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


const getAllClient = (callback) => {

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

const _estados_civiles_list = (callback) => {

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

const _estudios_list = (callback) => {

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

const _tipovivienda_list = (callback) => {

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

const _genero_list = (callback) => {

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


const _update_client = (client, callback) => {
    console.log(client.numeroTelefonoNegocioCliente);
    let sql =
        `
    CALL client_upDate(
        '${client.IdCliente}', 
        '${client.sucursalCliente}', 
        ${client.IdTipoPersonaCliente.split(',')[0]}, 
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
        '${client.numeroTelefonoNegocioCliente}',
        '${client.IdLocalidadDomicilioCliente}',
        '${client.IdLocalidadNegocioCliente}'
    )
    `


    let connection = createConnection(conexion);

    connection.query(sql, [], (err, data) => {
  
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


const _delete_client = (IdUCliente, callback) => {

    let sql = 'call client_delete(' + IdUCliente + ')';
    console.log(sql);
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

const _getClientById = (IdCliente, callback) => {

    let sql = 'call client_byId(' + IdCliente + ')';

    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
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

module.exports = {
    _create_cliente,
    _delete_client,
    _estados_civiles_list,
    _estudios_list,
    _genero_list,
    _getClientById,
    _update_client,
    getAllClient,
    _tipovivienda_list,
}