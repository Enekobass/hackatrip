import insertPhotoModel from '../../models/trips/insertPhotoModels.js';
import { savePhoto } from '../../services/photoService.js';

const addPhotoController = async (req, res, next) => {
    try {
        const { viajeId } = req.params;
        const photo = req.files?.photo;
        const photoName = await savePhoto(photo, 1000);
        const photoId = await insertPhotoModel(photoName, viajeId);

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
}

export default addPhotoController;
