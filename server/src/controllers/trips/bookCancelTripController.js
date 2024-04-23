import reservarTripModel from "../../models/trips/reservarTripModel.js";
import cancelarTripModel from "../../models/trips/cancelarTripModel.js";

const bookCancelTripController = async (req, res, next) => {
    try {
        const {reservar, cancelar} = req.body;
        const {viajeId} = req.params;
        if (reservar) {
            reservarTripModel(req.user.id, viajeId)
            res.status(201).send({
                status: 'ok',
                message: 'Viaje reservado',
            });
        }
        if (cancelar) {
            cancelarTripModel(req.user.id)
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