import express from 'express';

import {
    newUserController,
    validateUserController,
    loginUserController,
    sendRecoverPassController,
    editUserPassController,
} from '../controllers/users/index.js';

const router = express.Router();

router.post('/users/register', newUserController);

router.put('/users/validate/:registrationCode', validateUserController);

router.post('/users/login', loginUserController);

router.post('/users/password/recover', sendRecoverPassController);

router.put('/users/password/edit', editUserPassController);

export default router;