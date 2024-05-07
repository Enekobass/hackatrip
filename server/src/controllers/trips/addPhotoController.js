import insertPhotoModel from '../../models/trips/insertPhotoModels.js';

import { savePhoto } from '../../services/photoService.js';

import validateSchemaUtil from '../../utils/validateSchemaUtil.js';

import voteTripSchema from '../../schemas/trips/voteTripSchema.js';

const addPhotoController = async (req, res, next) => {
    try {
        await validateSchemaUtil(voteTripSchema, Object.assign(req.files, req.body));

        const { viajeId } = req.params;

        const { value, title, description } = req.body;

        console.log(req.user.id);

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