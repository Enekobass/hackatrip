import { unauthorizedUserError } from "../../services/errorService";

const confirmarCoordinadorController = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            unauthorizedUserError();
        }

        const {viajeId} = req.params;

        const coordinador = await selectCordinador(viajeId);

        await deleteCoordinadorVoluntario(viajeId);

        await insertCoordinadorConfirmado(coordinador, viajeId);

        res.status(201).send({
            status: 'ok',
            message: 'Coordinador confirmado',
        });
        
    } catch (err) {
        next(err);
    }
};

export default confirmarCoordinadorController;