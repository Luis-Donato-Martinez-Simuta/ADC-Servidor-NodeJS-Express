const locationModel = require('../model/location.model');



const getLocationByIdMunicipality = async (req, res) => {
    let {
        IdMunicipality
    } = req.params;

    if (!isNaN(IdMunicipality)) {
        locationModel._getLocationByIdMunicipality(IdMunicipality, (data) => {
            if (data === -1) {
                return res.status(500).json({
                    error: false,
                    status: 200,
                    menssage: "Error en la peticion",
                })
            } else {
                let localidades = data;
                return res.status(200).json({
                    error: false,
                    status: 200,
                    menssage: "Estados encontrados",
                    localidades,
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
    getLocationByIdMunicipality
};