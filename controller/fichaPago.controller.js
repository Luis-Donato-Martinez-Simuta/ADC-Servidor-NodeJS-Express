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

const ficha_pago_list = async (req, res) => {
    
    fichaPagoModel.ficha_pago_list((data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let fichaPagoList = data;
            return res.status(200).json({
                error: false,
                status: 200,
                menssage: fichaPagoList.length+" fichas de pagos encontradas",         
                fichaPagoList       
            })
        }
    });

}

const ficha_pago_updateDate = async (req, res) => {
    
    let fichaPago = req.body.fichaPago;
    
    fichaPagoModel.ficha_pago_updateDate(fichaPago,(data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let fichaPagoList = data;
            return res.status(200).json({
                error: false,
                status: data[0].status,
                menssage: fichaPagoList.length+" fichas de pagos encontradas",         
                fichaPagoList       
            })
        }
    });

}

const ficha_pago_list_ById = async (req, res) => {
    
    let {IdFichaPago} = req.params;

    fichaPagoModel.ficha_pago_list_ById(IdFichaPago,(data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let fichaPago = data;
            return res.status(200).json({
                error: false,
                status: 200,
                menssage: "Ficha de Pago recuperada",      
                fichaPago   
            })
        }
    });

}



const ficha_pago_buscar = async (req, res) => {
    
    let {referencia} = req.body;

    fichaPagoModel.ficha_pago_buscar(referencia,(data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let fichaPago = data;
            
            return res.status(200).json({
                error: false,
                status: 200,
                menssage: "Ficha de Pago recuperada",      
                fichaPago   
            })
        }
    });

}


const ficha_pago_pagar = async (req, res) => {
    
    let {IdFichaPago} = req.params;

    fichaPagoModel.ficha_pago_pagar(IdFichaPago,(data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let status = data[0].status;            
            
            return res.status(200).json({
                error: false,
                status,
                menssage: "Ficha de Pago recuperada",      
               
            })
        }
    });

}

module.exports = {
    ficha_pago_create,
    ficha_pago_list,
    ficha_pago_updateDate,
    ficha_pago_list_ById,
    ficha_pago_buscar,
    ficha_pago_pagar,
};