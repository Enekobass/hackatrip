import express from 'express';

import {
    newUserController,
    validateUserController,
    loginUserController,
    sendRecoverPassController,
    editUserPassController,
    editUserRoleController,
    editUserController
} from '../controllers/users/index.js';

import { authAdminController } from '../middlewares/index.js';

const router = express.Router();

router.post('/users/register', newUserController);

router.put('/users/validate/:registrationCode', validateUserController);

router.post('/users/login', loginUserController);

router.post('/users/password/recover', sendRecoverPassController);

router.put('/users/password/edit', editUserPassController);

router.put('/users/edit', editUserController);

router.put('/users/role/:userId', authAdminController, editUserRoleController);

export default router;
