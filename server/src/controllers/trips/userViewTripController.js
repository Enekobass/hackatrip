import userViewTripModel from '../../models/trips/userViewTripModel.js';

import selectInscritosModel from '../../models/trips/selectInscritosModel.js';

const userViewTripController = async (req, res, next) => {
    try {
        // Obtener el ID del viaje desde los parámetros de la URL
        const { viajeId } = req.params;

        // Llamar al modelo para obtener la información del viaje y los usuarios inscritos
        const tripData = await userViewTripModel(viajeId, req.user?.id);

        const inscritos = await selectInscritosModel(viajeId);

        res.send({
            status: 'ok',
            data: {
                tripData,
                inscritos,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default userViewTripController;