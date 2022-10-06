const fichaPagoModel = require('../model/fichaPago.model')

const ficha_pago_create = async (req, res) => {
    
    let fichaPago = req.body.data;
    let detalle = req.body.detalle;

    fichaPagoModel.ficha_pago_create(fichaPago,(data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let IdFichaPago = data[0].IdFichaPago;
            console.log(detalle.length);
            for (let i = 0; i < detalle.length; i++) {
                fichaPagoModel.ficha_pago_detalle_create(IdFichaPago,detalle[i], (data)=>{                    
                    
                });
            }
            return res.status(200).json({
                error: false,
                status: 200,
                menssage: "Ficha de pago creada",         
                IdFichaPago       
            })
        }
    });
}


module.exports = {
    ficha_pago_create,
};