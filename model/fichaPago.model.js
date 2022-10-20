const database = require('../config/database.config')
const conexion = database.conexion;
createConnection = database.createConnection;

const ficha_pago_create = (fichaPago, callback) => {

    let sql = `call ficha_pago_create(
        '${fichaPago.fechaFichaDeposito}',  
        ${fichaPago.IdCliente}, 
        ${fichaPago.IdTipoFichaDeposito}, 
        ${fichaPago.IdBancoFichaDeposito}, 
        ${fichaPago.IdCuentaFichaDeposito}, 
        ${fichaPago.IdCreditoFichaDeposito}, 
        '${fichaPago.folioFichaDeposito}',
        '${fichaPago.montoFichaDeposito}', 
        ${fichaPago.IdEstado} 
    )`;
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}



const ficha_pago_detalle_create = (IdFichaPago,detalle, callback) => {

    let sql = `call ficha_pago_detalle_create(
        ${IdFichaPago},  
        ${detalle.IdCliente}, 
        ${detalle.importe}

    )`;
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

const ficha_pago_list = (callback) => {

    let sql = `call ficha_pago_list()`;
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}


const ficha_pago_updateDate = (fichaPago, callback) => {

    let sql = `call ficha_pago_updateDate(
        ${fichaPago.IdFichaPago},
        '${fichaPago.fecha}'
    )`;

    

    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {

        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

const ficha_pago_list_ById = (IdFichaPago, callback) => {

    let sql = `call ficha_pago_list_ById(${IdFichaPago})`;
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {

        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });
}

const ficha_pago_buscar = (referencia,callback) => {

    let sql = `call ficha_pago_buscar('%${referencia}%')`;
    let connection = createConnection(conexion);
    
    connection.query(sql, (err, data) => {

        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });
}

const ficha_pago_pagar = (IdFichaPago ,callback) => {

    let sql = `call ficha_pago_pagar(${IdFichaPago})`;
    let connection = createConnection(conexion);
    
    connection.query(sql, (err, data) => {

        if (err) {
            console.log(err);
            connection.end();
            return callback(-1);
        };
        if (data.length > 0) {
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });
}

module.exports = {
    ficha_pago_create,
    ficha_pago_detalle_create,
    ficha_pago_list,
    ficha_pago_updateDate,
    ficha_pago_list_ById,
    ficha_pago_buscar,
    ficha_pago_pagar,
}