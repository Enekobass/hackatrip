import express from 'express';

import { newTripController } from '../controllers/trips/index.js';

import { editTripController } from '../controllers/trips/index.js';

import { authUserController } from '../middlewares/index.js';

const router = express.Router();

router.post('/viajes', authUserController, newTripController);

router.post('/viajes/:viajeId', authUserController, editTripController);

export default router;
