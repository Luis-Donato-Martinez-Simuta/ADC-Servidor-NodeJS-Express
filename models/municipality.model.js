import { createConnection } from 'mysql';
import {conexion}  from "../database/MySQL.database.js";


export const _getMunicipalityById = (IdMunicipality,callback) =>{

    let sql = 'call municipios_listByIdEstado('+IdMunicipality+')';
    let connection = createConnection(conexion);
    
    connection.query(sql,(err,data) => {
        if(err){
            return callback(-1);
        };
        if(data.length>0){
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}