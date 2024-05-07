import insertPhotoModel from '../../models/trips/insertPhotoModels.js';

import { savePhoto } from '../../services/photoService.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import voteTripSchema from '../../schemas/trips/voteTripSchema.js';

const addPhotoController = async (req, res, next) => {
    try {
        await validateSchema(voteTripSchema, req.files);

        const { viajeId } = req.params;

        const { value, title, description } = req.body;

        const photo = req.files;

        const photoName = await savePhoto(photo, 1000);

        const photoId = await insertPhotoModel(photoName, viajeId, req.user.id, value, title, description);



        res.status(201).send({
            status: 'ok',
            message: 'Foto guardada',
            data: {
                photo: {
                    id: photoId,
                    name: photoName,
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

export default addPhotoController;