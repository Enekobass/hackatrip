import insertCoordinadorConfirmadoModel from '../../models/trips/insertCoordinadorConfirmadoModel.js';

import { unauthorizedUserError } from '../../services/errorService.js';

const confirmarCoordinadorController = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            unauthorizedUserError();
        }

        const { userId } = req.params;

        await insertCoordinadorConfirmadoModel(userId);

        res.status(201).send({
            status: 'ok',
            message: 'Coordinador confirmado',
        });
    } catch (err) {
        next(err);
    }
};

export default confirmarCoordinadorController;
