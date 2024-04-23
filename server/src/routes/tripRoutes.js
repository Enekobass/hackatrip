import express from 'express';

import {
    newTripController,
    editTripController,
    coordinadorTripController,
    confirmarCoordinadorController,
    bookCancelTripController,
    addPhotoController,
    voteCoordinadorController
} from '../controllers/trips/index.js';

import { authUserController } from '../middlewares/index.js';

const router = express.Router();

router.post('/viajes', authUserController, newTripController);

router.post(
    '/viajes/:userId/confirmar',
    authUserController,
    confirmarCoordinadorController,
);

router.post('/viajes/:viajeId', authUserController, editTripController);

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

router.post(
    '/viajes/:viajeId/:coordinadorId',
    authUserController,
    coordinadorTripController,
);

router.post(
    '/viajes/:viajeId/coordinadorVotes',
    authUserController,
    voteCoordinadorController, 
)

export default router;
