import express from 'express';

import {
    newUserController,
    validateUserController,
    loginUserController,
    sendRecoverPassController,
    editUserPassController,
    editUserRoleController,
} from '../controllers/users/index.js';

const router = express.Router();

router.post('/users/register', newUserController);

router.put('/users/validate/:registrationCode', validateUserController);

router.post('/users/login', loginUserController);

router.post('/users/password/recover', sendRecoverPassController);

router.put('/users/password/edit', editUserPassController);

router.put('/users/role/:userId', editUserRoleController);

export default router;
