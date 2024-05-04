import reservarTripModel from '../../models/trips/reservarTripModel.js';

import cancelarTripModel from '../../models/trips/cancelarTripModel.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import bookCancelSchema from '../../schemas/trips/bookCancelSchema.js';

const bookCancelTripController = async (req, res, next) => {
    try {
        await validateSchema(bookCancelSchema, req.body);

        const { reservar, cancelar } = req.body;

        const { viajeId } = req.params;

        if (reservar) {
            await reservarTripModel(req.user.id, viajeId);
            res.status(201).send({
                status: 'ok',
                message: 'Viaje reservado',
            });
        }
        if (cancelar) {
            await cancelarTripModel(req.user.id, viajeId);
            res.status(201).send({
                status: 'ok',
                message: 'Viaje cancelado',
            });
        }
    } catch (err) {
        next(err);
    }
};

export default bookCancelTripController;
