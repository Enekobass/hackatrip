import modifyTripModel from '../../models/trips/modifyTripModel.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import modifyTripSchema from '../../schemas/trips/modifyTripSchema.js';

const modifyTripController = async (req, res, next) => {
    try {
        await validateSchema(modifyTripSchema, req.body);

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
            confirmado,
        } = req.body;

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
            confirmado,
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
