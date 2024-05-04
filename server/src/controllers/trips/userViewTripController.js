import userViewTripModel from '../../models/trips/userViewTripModel.js';

import selectInscritosModel from '../../models/trips/selectInscritosModel.js';

import selectCoordinadorModel from '../../models/trips/selectCoordinadorModel.js';

const userViewTripController = async (req, res, next) => {
    try {
        const { viajeId } = req.params;

        const tripData = await userViewTripModel(viajeId, req.user?.id);

        const inscritos = await selectInscritosModel(viajeId);

        const coordinador = await selectCoordinadorModel(viajeId);

        res.send({
            status: 'ok',
            data: {
                tripData,
                inscritos,
                coordinador,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default userViewTripController;
