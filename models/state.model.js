import {
    createConnection
} from 'mysql';
import {
    conexion
} from "../database/MySQL.database.js";


export const _getAllStates = (callback) => {

    let sql = 'call estados_list()';
    let connection = createConnection(conexion);

    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err);
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