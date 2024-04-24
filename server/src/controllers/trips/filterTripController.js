import filterTripModel from '../../models/trips/filterTripModel.js';

const filterTripController = async (req, res, next) => {
    try {
        // Obtener los parámetros de consulta
        let { fecha, destino } = req.query;

        // Llamar al modelo para filtrar los viajes
        const viajesFiltrados = await filterTripModel(
            fecha,
            destino,
            req.user?.id,
        );

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