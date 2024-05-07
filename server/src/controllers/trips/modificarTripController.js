import modifyTripModel from '../../models/trips/modifyTripModel.js';

import validateSchema from '../../utils/validateSchemaUtil.js';

import editTripSchema from '../../schemas/trips/editTripSchema.js';
import selectUserByEmailModel from '../../models/users/selectUserByEmailModel.js';

const modifyTripController = async (req, res, next) => {
    try {
        await validateSchema(editTripSchema, Object.assign(req.body, req.files));

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
            confirmado,
            imagen
        } = req.body;

        const user = await selectUserByEmailModel(req.user.role.admin);

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
        imagen = imagen === viajes.imagen ? null : imagen;
            

        // Condicional que permite realizar cambios si eres admin o no.

        if (user.role.admin) {
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
            imagen
        );
        } else {
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
                imagen
            );
        }

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
                    imagen,
                    modifiedAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

export default modifyTripController;