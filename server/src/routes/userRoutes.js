import express from 'express';

import {
    newUserController,
    validateUserController,
} from '../controllers/users/index.js';

const router = express.Router();

router.post('/users/register', newUserController);

router.put('/users/validate/:registrationCode', validateUserController);

export default router;
