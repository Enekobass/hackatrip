import userViewTripModel from '../../models/trips/userViewTripModel.js';

import selectInscritosModel from '../../models/trips/selectInscritosModel.js';

const userViewTripController = async (req, res, next) => {
    try {

        const { viajeId } = req.params;

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