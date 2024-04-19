import insertTripModel from '../../models/trips/insertTripModel.js';
import insertPhotoModel from '../../models/trips/insertPhotoModel.js';

import { savePhoto } from '../../services/photoService.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import newTripSchema from '../../schemas/trips/newTripSchema.js';

import { unauthorizedUserError } from '../../services/errorService.js';

const newTripController = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            unauthorizedUserError();
        }

        await validateSchema(newTripSchema, Object.assign(req.body, req.files));

        const {
            titulo,
            descripcion,
            destino,
            fechaDeInicio,
            fechaDeFin,
            plazasMinimas,
            plazasMaximas,
            ruta,
            precio,
        } = req.body;

        const id = crypto.randomUUID();

        await insertTripModel(
            id,
            titulo,
            descripcion,
            destino,
            fechaDeInicio,
            fechaDeFin,
            plazasMinimas,
            plazasMaximas,
            ruta,
            precio,
            req.user.id,
        );

        const photos = [];

        if (req.files) {
            const photosArr = Object.values(req.files).slice(0, 3);

            for (const photo of photosArr) {
                const photoName = await savePhoto(photo);

                const photoId = await insertPhotoModel(photoName, id);

                photos.push({
                    id: photoId,
                    name: photoName,
                });
            }
        }

        res.status(201).send({
            status: 'ok',
            message: 'Viaje creado',
            data: {
                trip: {
                    titulo,
                    descripcion,
                    destino,
                    fechaDeInicio,
                    fechaDeFin,
                    plazasMinimas,
                    plazasMaximas,
                    ruta,
                    precio,
                    userId: req.user.id,
                    photos,
                    createdAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

export default newTripController;
