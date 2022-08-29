import { createConnection } from 'mysql';
import {conexion}  from "../database/MySQL.database.js";

//Crear Usuario
export const _create_user = (user,callback) =>{

    let sql = 'call user_new( "'+user.nombre+'", "'
                                +user.paterno+'","'
                                +user.materno+'","'
                                +user.fechaNacimiento+'","'
                                +user.username+'","'
                                +user.password+'","'
                                +user.direccion+'")';

    let connection = createConnection(conexion);

    connection.query(sql,(err,data) => {
        if(err){
            return callback(-1);
        };
        if(data.length>0){
            connection.end();
            return callback(data[0][0]);
        };
        connection.end();
        return callback(null);

    });

}

export const getAllUser = (callback) =>{

    let sql = 'call user_list()';
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

export const login_user = (username, password,callback) =>{

    let sql = 'call user_loguear("'+username+'", "'+password+'")';
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

export const _update_user = (user, callback) =>{

    let sql = 'call user_update('  +user.IdUsuario+',"'
                                    +user.nombre+'", "'+
                                    user.paterno+'","'
                                    +user.materno+'","'
                                    +user.fechaNacimiento+'","'
                                    +user.username+'","'
                                    +user.password+'","'
                                    +user.direccion+'",'
                                    +user.status+
                                    ')';
    let connection = createConnection(conexion);
    console.log(sql);
    connection.query(sql,(err,data) => {
        if(err){
            return callback(-1);
        };
        if(data.length>0){
            connection.end();
            return callback(data[0][0]);
        };
        connection.end();
        return callback(null);

    });

}

export const _delete_user = (IdUsuario,callback) =>{

    let sql = 'call user_delete('+IdUsuario+')';
    let connection = createConnection(conexion);
    console.log(sql);
    connection.query(sql,[],(err,data) => {
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

export const getUserById = (IdUsuario,callback) =>{

    let sql = 'call user_listById('+IdUsuario+')';
    // console.log(sql);
    let connection = createConnection(conexion);
    
    connection.query(sql,[],(err,data) => {
        if(err){
            return callback(-1);
        };
        if(data.length>0){
            connection.end();
            return callback(data[0][0])
        };
        connection.end();
        return callback(null);

    });

}