const municipalityModel = require('../model/municipality.model');



const getMunicipalityById = async (req, res) => {
    let {
        IdMunicipality
    } = req.params;

    if (!isNaN(IdMunicipality)) {
        municipalityModel._getMunicipalityById(IdMunicipality, (data) => {
            if (data === -1) {
                return res.status(500).json({
                    error: false,
                    status: 200,
                    menssage: "Error en la peticion",
                })
            } else {
                let municipality = data;
                return res.status(200).json({
                    error: false,
                    status: 200,
                    menssage: "Estados encontrados",
                    municipios: municipality,
                })
            }

        });
    } else {
        return res.status(500).json({
            error: true,
            status: 500,
            menssage: "El Id no es mumerico",
        })
    }

}


module.exports = {
    getMunicipalityById
};