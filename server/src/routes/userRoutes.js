import express from 'express';

import { newUserController } from '../controllers/users/index.js';

const router = express.Router();

router.post('/users/register', newUserController);

export default router;
