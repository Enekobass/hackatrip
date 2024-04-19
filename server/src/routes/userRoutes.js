import express from 'express';

import {
    newUserController,
    validateUserController,
    loginUserController,
} from '../controllers/users/index.js';

const router = express.Router();

router.post('/users/register', newUserController);

router.put('/users/validate/:registrationCode', validateUserController);

router.post('/users/login', loginUserController);

export default router;
