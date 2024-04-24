import filterTripModel from '../models/filterTripModel.js';

const filterTripController = async (req, res) => {
    try {
        // Obtener los parámetros de consulta
        let {fecha, destino} = req.query;

        // Llamar al modelo para filtrar los viajes
        const viajesFiltrados = await filterTripModel(fecha, destino);

        // Devolver los viajes filtrados como respuesta
        //res.json(viajesFiltrados);
        res.send({
            status: 'ok',
            data: {
                viajesFiltrados,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default filterTripController;
