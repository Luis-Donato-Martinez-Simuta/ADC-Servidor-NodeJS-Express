import express from 'express'
import user from './routers/user.routes.js';
import client from './routers/client.routes.js'
import state from './routers/state.routes.js'
import municipality from './routers/municipality.routes.js'
import { createConnection } from 'mysql';
import {conexion}  from "./database/MySQL.database.js"
import cors from 'cors';

const app = express()
app.use(cors());
const port = 3000;

app.use(express.json({limit: '50mb'}));
app.use('/apicreditos/user', user);
app.use('/apicreditos/client', client);
app.use('/apicreditos/states', state);

app.use('/apicreditos/municipality', municipality);

const connection = createConnection(conexion);
connection.connect(function(error) {
    if (error) {
        console.error("Error en la conexcion a la base de datos: ",error);
        return;
    }
    console.log("Conexcion exitosa con la base de datos");
});
connection.end();

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port)
}) 
