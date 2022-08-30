const mysql = require('mysql');


const conexion = {
    host: "200.52.83.41",
    user: 'rhchia_admin',
    password: 'admin@2021',
    database: 'rhchia_smth_db_system',
    port: 3306,
}
const createConnection = mysql.createConnection;

const connection = createConnection(conexion);
connection.connect(function (err) {
    if (err) {
        console.log('Error en la conexion a la base de datos:');
        throw err;
    }

    console.log('Conexion exitosa con la Base de Datos!');
});
connection.end();

module.exports = {
    conexion,
    createConnection,
}