import insertCoordinadorVoteModel from "../../models/trips/insertCoordinadorVoteModel";

const voteCoordinadorController = async (req, res, next) => {
    try {
      const {viajeId} = req.params;
      const {value} = req.body;
      await insertCoordinadorVoteModel(value, viajeId)
    } catch (err) {
        next(err);
    }
};

export default voteCoordinadorController;