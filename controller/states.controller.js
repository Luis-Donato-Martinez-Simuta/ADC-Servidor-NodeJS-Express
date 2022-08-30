const stateModel = require('../model/state.model')

const getAllStates = async (req, res) => {
    stateModel._getAllStates((data) => {
        if (data === -1) {

            return res.status(500).json({
                error: false,
                status: 500,
                menssage: "Error en la peticion",
            })

        } else {
            let states = data;
            return res.status(200).json({
                error: false,
                status: 200,
                menssage: "Estados encontrados",
                estados: states,
            })
        }
    });
}


module.exports = {
    getAllStates
};