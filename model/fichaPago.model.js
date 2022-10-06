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
    console.log(sql);
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
    ficha_pago_detalle_create
}