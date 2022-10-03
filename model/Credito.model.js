const database = require('../config/database.config');

const conexion = database.conexion;

const _creaar_solicitud_credito_encabezado = (encabezado,otherEncabezado, IdUsuario,nuevoGranTotal, callback) => {


    let sql = `call credito_crear_solicitus(  
                                    ${encabezado.IdCliente}, 
                                    ${encabezado.monto},  
                                    ${encabezado.tasaMensual}, 
                                    ${encabezado.tipoCuota}, 
                                    ${encabezado.numeroCuotas} , 
                                    ${encabezado.plazo} , 
                                    '${encabezado.fechaMinistracion}' , 
                                    '${encabezado.fechaPimeraCuota}' , 
                                    ${encabezado.interes} , 
                                    ${encabezado.iva} , 
                                    ${encabezado.total},
                                    ${IdUsuario},
                                    ${otherEncabezado.IdFormaPago},
                                    ${otherEncabezado.IdTipoMoneda},
                                    ${otherEncabezado.montoPago}, 
                                    ${nuevoGranTotal}                                     
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



const _credito_actualizar_solicitus = (encabezado,otherEncabezado, IdUsuario, nuevoGranTotal, callback) => {

    //console.log(encabezado.IdCredito);
    let sql = `call credito_actualizar_solicitus(  
                                    ${encabezado.IdCredito}, 
                                    ${encabezado.IdCliente}, 
                                    ${encabezado.monto},  
                                    ${encabezado.tasaMensual}, 
                                    ${encabezado.tipoCuota}, 
                                    ${encabezado.numeroCuotas} , 
                                    ${encabezado.plazo} , 
                                    '${encabezado.fechaMinistracion}' , 
                                    '${encabezado.fechaPimeraCuota}' , 
                                    ${encabezado.interes} , 
                                    ${encabezado.iva} , 
                                    ${encabezado.total},
                                    ${IdUsuario},
                                    ${otherEncabezado.IdFormaPago},
                                    ${otherEncabezado.IdTipoMoneda},
                                    ${otherEncabezado.montoPago},
                                    ${nuevoGranTotal} 
                                            )`;
    
    console.log(sql);
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

const _eliminar_solicitud_detalle_byIdEncebezado = (IdCreditoEncabezado, callback) => {

    //console.log(encabezado.IdCredito);
    let sql = `call eliminar_solicitud_detalle_byIdEncebezado(${IdCreditoEncabezado})`;
    
    console.log(sql);
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

const _creaar_solicitud_credito_detalle = (detalle,IdCredito, callback) => {

    let sql = `call credito_crear_solicitus_detalle(  
        ${IdCredito}, 
        ${detalle.numeroCuota},  
        '${detalle.fecha}', 
        '${detalle.fecha2}', 
        ${detalle.capital} , 
        ${detalle.interes} , 
        ${detalle.iva}, 
        ${detalle.total}
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


const _credito_actualizar_solicitus_detalle = (detalle,IdCredito, callback) => {

    let sql = `call credito_crear_solicitus_detalle(  
        ${IdCredito}, 
        ${detalle.numeroCuota},  
        '${detalle.fecha}', 
        '${detalle.fecha2}', 
        ${detalle.capital} , 
        ${detalle.interes} , 
        ${detalle.iva}, 
        ${detalle.total}
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
const _bucar_credito_por_Id = (IdCredito, callback) => {



    let sql = `call credito_ByIdCredito(${IdCredito})`;
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

const _creditos_sinaprobar_list = (callback) => {

    let sql = `call creditos_sinaprobar_list()`;
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

const _credito_update_status = (data,callback) => {

    let sql = `call credito_update_status(${data.IdCredito},'${data.status}')`;
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


const _credito_eliminar_encabezado_y_detalle_byId = (IdCredito,callback) => {

    let sql = `call credito_eliminar_encabezado_y_detalle_byId(${IdCredito})`;
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


const _credito_buscar = (data,callback) => {

    let sql = `call credito_buscar(${data.tipoBusqueda},"%${data.value}%","%${data.value}%")`;
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
    _creaar_solicitud_credito_encabezado,
    _creaar_solicitud_credito_detalle,
    _bucar_credito_por_Id,
    _creditos_sinaprobar_list,
    _credito_update_status,
    _credito_actualizar_solicitus,
    _credito_actualizar_solicitus_detalle,
    _eliminar_solicitud_detalle_byIdEncebezado,
    _credito_eliminar_encabezado_y_detalle_byId,
    _credito_buscar,
}