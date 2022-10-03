const creditoModel = require('../model/Credito.model');

const crear_solicitud_credito = async (req, res) => {


    let {
        encabezado,
        nuevoGranTotal
    } = req.body;
    let {
        detalle
    } = req.body;
    let {
        IdUsuario
    } = req.body;
    let otherEncabezado = req.body.otherData;
    console.log("Creando");
    console.log(encabezado);

    //console.log(encabezado);
    //console.log(detalle);


    await creditoModel._creaar_solicitud_credito_encabezado(encabezado, otherEncabezado, IdUsuario, nuevoGranTotal, (data) => {

        let IdCredito = data[0].IdCredito

        for (let i = 0; i < detalle.length; i++) {

            creditoModel._creaar_solicitud_credito_detalle(detalle[i], IdCredito, (data) => {

            });

        }

        res.status(200).json({
            status: 200,
            IdCredito
        })
    });



}

const credito_actualizar_solicitus = async (req, res) => {


    let {
        encabezado,
        nuevoGranTotal
    } = req.body;
    let {
        detalle
    } = req.body;
    let {
        IdUsuario
    } = req.body;
    let otherEncabezado = req.body.otherData;
    //console.log(encabezado);

    //console.log(encabezado);
    //console.log(detalle);
    console.log("Actualizando");

    await creditoModel._credito_actualizar_solicitus(encabezado, otherEncabezado, IdUsuario, nuevoGranTotal, (data) => {

        let IdCredito = encabezado.IdCredito
        //console.log(IdCredito);

        creditoModel._eliminar_solicitud_detalle_byIdEncebezado(IdCredito, (data) => {
            console.log(data);
            for (let i = 0; i < detalle.length; i++) {
                creditoModel._credito_actualizar_solicitus_detalle(detalle[i], IdCredito, (data) => {
                    console.log(data);
                });
            }
        });



        res.status(200).json({
            status: 200,
            IdCredito: IdCredito,
        })
    });



}

const bucar_credito_por_Id = async (req, res) => {
    let {
        IdCredito
    } = req.params
    console.log(IdCredito);

    creditoModel._bucar_credito_por_Id(IdCredito, (data) => {

        let credito = data;

        res.status(200).json({
            status: 200,
            credito
        })
    });


}

const creditos_sinaprobar_list = async (req, res) => {
    creditoModel._creditos_sinaprobar_list((data) => {
        let credito = data;
        res.status(200).json({
            status: 200,
            credito
        })
    });
}

const credito_update_status = async (req, res) => {

    let data = {
        IdCredito: req.body.IdCredito,
        status: req.body.status
    };
    console.log(data);
    creditoModel._credito_update_status(data, (response) => {
        console.log(response);
        let status = response[0].status;
        console.log(status);
        res.status(200).json({
            status,
        })
    });
}

const credito_eliminar_encabezado_y_detalle_byId = async (req, res) => {

    let {
        IdCredito
    } = req.params;

    if (!isNaN(IdCredito)) {
        creditoModel._credito_eliminar_encabezado_y_detalle_byId(IdCredito, (data) => {
            console.log(data);
            let status = data[0].status;
            console.log(status);
            res.status(200).json({
                error: false,
                status,
                message: "Solicitud de credito eliminada."
            })
        });
    } else {
        return res.status(500).json({
            error: false,
            status: 240,
            menssage: "El parametro que mandas como Id no es numerico",
        });
    }
}

const credito_buscar = async (req, res) => {

    let data = req.body;
    console.log(req.body);
    console.log(data);
    creditoModel._credito_buscar(data, (data) => {
        console.log(data);
        let creditos = data;

        res.status(200).json({
            error: false,
            status: 200,
            message: `Se encontraron ${data.length} creditos`,
            creditos,
        })
    });

}



module.exports = {
    crear_solicitud_credito,
    bucar_credito_por_Id,
    creditos_sinaprobar_list,
    credito_update_status,
    credito_actualizar_solicitus,
    credito_eliminar_encabezado_y_detalle_byId,
    credito_buscar
};