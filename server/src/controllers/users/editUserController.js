import updateUserModel from '../../models/users/updateUserModel.js';

import validateSchemaUtil from '../../utils/validateSchemaUtil.js';

import editUserSchema from '../../schemas/users/editUserSchema.js';

const editUserController = async (req, res, next) => {
    try {
        await validateSchemaUtil(editUserSchema, req.body);

        const { username, email, password } = req.body;

        await updateUserModel(username, email, password, req.user.id);

        res.send({
            status: 'ok',
            message: 'Usuario actualizado',
            data: {
                user: {
                    username,
                    email,
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

export default editUserController;
