import insertUserModel from '../../models/users/insertUserModel.js';

import validateSchemaUtil from '../../utils/validateSchemaUtil.js';

import newUserSchema from '../../schemas/users/newUserSchema.js';

const newUserController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        await validateSchemaUtil(newUserSchema, req.body);

        const id = crypto.randomUUID();

        await insertUserModel(id, username, email, password);

        res.status(201).send({
            status: 'ok',
            message: 'User created.',
        });
    } catch (err) {
        next(err);
    }
};

export default newUserController;
