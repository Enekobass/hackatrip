import selectCordinador from '../../models/trips/selectCordinador.js';
import deleteCoordinadorVoluntario from '../../models/trips/deleteCoordinadorVoluntario.js';
import insertCoordinadorConfirmadoModel from '../../models/trips/insertCoordinadorConfirmadoModel.js';
import { unauthorizedUserError } from "../../services/errorService.js";

const confirmarCoordinadorController = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            unauthorizedUserError();
        }

        const {viajeId} = req.params;

        const coordinador = await selectCordinador(viajeId);

        await deleteCoordinadorVoluntario(viajeId);

        await insertCoordinadorConfirmadoModel(coordinador.coordinadorvoluntario, viajeId);

        res.status(201).send({
            status: 'ok',
            message: 'Coordinador confirmado',
        });
        
    } catch (err) {
        next(err);
    }
};

export default confirmarCoordinadorController;