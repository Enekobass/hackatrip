import { unauthorizedUserError } from '../services/errorService.js';

const authAdminController = async (req, res, next) => {
    try {
        if (req.user.role !== 'coordinador') {
            unauthorizedUserError();
        }

        next();
    } catch (err) {
        next(err);
    }
};

export default authAdminController;
