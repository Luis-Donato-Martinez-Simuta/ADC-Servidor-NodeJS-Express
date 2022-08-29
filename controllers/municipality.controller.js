import {
    _getMunicipalityById
} from '../models/municipality.model.js'



const getMunicipalityById = async (req, res) => {
    let {IdMunicipality} = req.params;

    //console.log(IdMunicipality);
    // console.log(isNaN(IdMunicipality));



    if(!isNaN(IdMunicipality)){
        _getMunicipalityById(IdMunicipality,(data)=>{
            if(data === -1){
                return res.status(500).json({
                    error:false,
                    status:200,
                    menssage: "Error en la peticion",
                })
            }else{
                let municipality = data;
                return res.status(200).json({
                    error:false,
                    status:200,
                    menssage: "Estados encontrados",
                    municipios : municipality,
                })
            }
    
        });
    }else{
        return res.status(500).json({
            error:true,
            status:500,
            menssage: "El Id no es mumerico",
        })    
    }

}


export const stateController = {
    getMunicipalityById
};