import express from 'express';

import {
    newTripController,
    editTripController,
    coordinadorTripController,
    confirmarCoordinadorController,
    bookCancelTripController,
    addPhotoController,
    voteCoordinadorController,
    filterTripController,
    userViewTripController,
} from '../controllers/trips/index.js';

import {
    authUserController,
    authUserOptionalController,
} from '../middlewares/index.js';

const router = express.Router();

router.get('/todosviajes', authUserOptionalController, filterTripController);

router.post('/viajes', authUserController, newTripController);

router.get('/viajes/:viajeId', authUserController, userViewTripController);

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
    '/viajes/:viajeId/coordinadorVotes',
    authUserController,
    voteCoordinadorController,
);

router.post(
    '/viajes/:viajeId/:coordinadorId',
    authUserController,
    coordinadorTripController,
);

export default router;