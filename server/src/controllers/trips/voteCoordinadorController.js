import insertCoordinadorVoteModel from '../../models/trips/insertCoordinadorVoteModel.js';

const voteCoordinadorController = async (req, res, next) => {
    try {
        const { viajeId } = req.params;

        const { value } = req.body;

        await insertCoordinadorVoteModel(value, viajeId);

        res.status(201).send({
            status: 'ok',
            message: 'Coordinador Votado',
        });
    } catch (err) {
        next(err);
    }
};

export default voteCoordinadorController;
