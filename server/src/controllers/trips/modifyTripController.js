import modifyTripModel from '../../models/trips/modifyTripModel.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import modifyTripSchema from '../../schemas/trips/modifyTripSchema.js';

import { savePhoto } from '../../services/photoService.js';

const modifyTripController = async (req, res, next) => {
    try {
        await validateSchema(
            modifyTripSchema,
            Object.assign(req.body, req.files),
        );

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
            activo,
        } = req.body;

        const photoName = await savePhoto(req.files, 300);

        const { viajeId } = req.params;

        await modifyTripModel(
            titulo,
            descripcion,
            destino,
            fechaDeInicio,
            fechaDeFin,
            plazasMinimas,
            plazasMaximas,
            ruta,
            precio,
            activo,
            photoName,
            viajeId,
        );

        res.send({
            status: 'ok',
            message: 'Viaje modificado',
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
                    viajeId,
                    modifiedAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

export default modifyTripController;
