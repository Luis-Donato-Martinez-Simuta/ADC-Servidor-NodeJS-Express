const creditoModel = require('../model/Credito.model');

const crear_solicitud_credito = async (req, res) => {
    

    let {encabezado} = req.body;
    let {detalle} = req.body;
    let {IdUsuario} = req.body;
    let otherEncabezado = req.body.otherData;
    //console.log(encabezado);

    //console.log(encabezado);
    //console.log(detalle);

    await creditoModel._creaar_solicitud_credito_encabezado(encabezado,otherEncabezado,IdUsuario,(data)=>{
        
        let IdCredito = data[0].IdCredito
        
        for (let i = 0; i < detalle.length; i++) {  
            
            creditoModel._creaar_solicitud_credito_detalle(detalle[i],IdCredito,(data)=>{
                
            });
            
        }

        res.status(200).json({
            status:200,
            IdCredito
        })
    });



}

const bucar_credito_por_Id = async (req, res) => {
    let {IdCredito} = req.params
    console.log(IdCredito);
    
    creditoModel._bucar_credito_por_Id(IdCredito, (data)=>{
        
        let credito = data;

        res.status(200).json({
            status:200,
            credito
        })
    });


}

const creditos_sinaprobar_list = async (req, res) => {
    creditoModel._creditos_sinaprobar_list((data)=>{
        let credito = data;
        res.status(200).json({
            status:200,
            credito
        })
    });
}

const credito_update_status = async (req, res) => {
    
    let data = {
        IdCredito : req.body.IdCredito,
        status : req.body.status
    };
    console.log(data);
    creditoModel._credito_update_status(data,(response)=>{
        console.log(response);
        let status = response[0].status;
        console.log(status);
        res.status(200).json({
            status,
        })
    });
}

module.exports = {
    crear_solicitud_credito,
    bucar_credito_por_Id,
    creditos_sinaprobar_list,
    credito_update_status
};
