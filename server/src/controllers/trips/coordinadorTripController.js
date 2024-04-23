import insertCoordinadorModel from '../../models/trips/insertCoordinadorModel.js';

import { unauthorizedUserError } from '../../services/errorService.js';

const coordinadorTripController = async (req, res, next) => {
    try {
        if (req.user.role !== 'coordinador') {
            unauthorizedUserError();
        }

        const { username } = req.body;

        const { viajeId } = req.params;

        await insertCoordinadorModel(username, viajeId);

        res.status(201).send({
            status: 'ok',
            message: 'Apuntado como coordinador. Espera la confirmacion',
        });
    } catch (err) {
        next(err);
    }
};

export default coordinadorTripController;