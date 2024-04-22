import express from 'express';

import {
    newTripController,
    editTripController,
    coordinadorTripController,
} from '../controllers/trips/index.js';

import { authUserController } from '../middlewares/index.js';

const router = express.Router();

router.post('/viajes', authUserController, newTripController);

router.post('/viajes/:viajeId', authUserController, editTripController);

router.post(
    '/viajes/:viajeId/coordinador',
    authUserController,
    coordinadorTripController,
);

export default router;
