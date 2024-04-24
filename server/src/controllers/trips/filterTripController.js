import filterTripModel from '../models/filterTripModel.js';

const filterTripController = async (req, res) => {
    try {
        // Obtener los parámetros de consulta
        const filtro = req.query;

        // Llamar al modelo para filtrar los viajes
        const viajesFiltrados = await filterTripModel(filtro);

        // Devolver los viajes filtrados como respuesta
        res.json(viajesFiltrados);
    } catch (err) {
        next(err);
    }
};

export default filterTripController;
