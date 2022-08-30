const database = require('../config/database.config')
const conexion = database.conexion;
createConnection = database.createConnection;

const _getAllStates = (callback) => {

    let sql = 'call estados_list()';
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
    _getAllStates,
}