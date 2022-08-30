


const main = async (req, res) => {
    res.status(500).json({
        error: false,
        status:200,
        menssage: "Servicio corriendo"
    });
}


export const mainController = {
    main,
};