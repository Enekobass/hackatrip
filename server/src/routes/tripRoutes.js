import express from 'express';

import {
    newTripController,
    editTripController,
    coordinadorTripController,
    confirmarCoordinadorController,
    bookCancelTripController,
    addPhotoController
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

router.post(
    '/viajes/:viajeId/confirmar/coordinador',
    authUserController,
    confirmarCoordinadorController,
);
router.post(
    '/viajes/:viajeId/reservarycancelar',
    authUserController,
    bookCancelTripController,
);

router.post(
    '/viajes/:viajeId/addfotos',
    authUserController,
    addPhotoController,
);


export default router;
