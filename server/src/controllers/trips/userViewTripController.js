import userViewTripModel from '../models/userViewTripModel.js';

const userViewTripController = async (req, res) => {
    try {
        // Obtener el ID del viaje desde los parámetros de la URL
        const tripId = req.params.id;

        // Llamar al modelo para obtener la información del viaje y los usuarios inscritos
        const tripData = await userViewTripModel(tripId);

        // Devolver los datos del viaje como respuesta
        res.json(tripData);
    } catch (err) {
        next(err);
    }
};

export default userViewTripController;
