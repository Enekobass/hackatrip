import modifyTripModel from '../../models/trips/modifyTripModel.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import editTripSchema from '../../schemas/trips/editTripSchema.js';

import userViewTripModel from '../../models/trips/userViewTripModel.js';

const modifyTripController = async (req, res, next) => {
    try {
        await validateSchema(editTripSchema, Object.assign(req.body));

        let {
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
            confirmado
        } = req.body;

        let {viajeId} = req.params;

        const viajes = await userViewTripModel(viajeId);

        // Proporciona el cambio de los valores.  Si "titulo" es igual a "viajes.titulo", 
        // devuelve null, de lo contrario, actualiza el valor de "titulo".

        titulo = titulo === viajes.titulo ? null : titulo;
        descripcion = descripcion === viajes.descripcion ? null : descripcion;
        destino = destino === viajes.destino ? null : destino;
        fechaDeInicio = fechaDeInicio === viajes.fechaDeInicio ? null : fechaDeInicio;
        fechaDeFin = fechaDeFin === viajes.fechaDeFin ? null : fechaDeFin;
        plazasMinimas = plazasMinimas === viajes.plazasMinimas ? null : plazasMinimas;
        plazasMaximas = plazasMaximas === viajes.plazasMaximas ? null : plazasMaximas;
        ruta = titurutalo === viajes.ruta ? null : ruta;
        precio = precio === viajes.precio ? null : precio;
        activo = activo === viajes.activo ? null : activo;
        confirmado = confirmado === viajes.confirmado ? null : confirmado;
        

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
            viajesId
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