const database = require('../config/database.config')

const conexion = database.conexion;

const _getLocationByIdMunicipality = (IdMunicipality, callback) => {

    let sql = 'call localidad_listByIdMunicipality(' + IdMunicipality + ')';
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
    _getLocationByIdMunicipality
}