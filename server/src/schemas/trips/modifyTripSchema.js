import joi from 'joi';

import imgSchema from '../imgSchema.js';

import joiErrorMessages from '../joiErrorMessages.js';

const newTripSchema = joi.object({
    titulo: joi.string().min(5).max(20).optional().messages(joiErrorMessages),
    destino: joi.string().min(3).max(50).optional().messages(joiErrorMessages),
    fechaDeInicio: joi.date().optional().messages(joiErrorMessages),
    fechaDeFin: joi.date().optional().messages(joiErrorMessages),
    plazasMinimas: joi.number().optional().messages(joiErrorMessages),
    plazasMaximas: joi.number().optional().messages(joiErrorMessages),
    ruta: joi.string().min(3).max(200).optional().messages(joiErrorMessages),
    precio: joi.number().optional().messages(joiErrorMessages),
    descripcion: joi
        .string()
        .min(10)
        .max(250)
        .optional()
        .messages(joiErrorMessages),
    activo: joi.number().optional().messages(joiErrorMessages),
    confirmado: joi.number().optional().messages(joiErrorMessages),
    photo: imgSchema.optional(),
});

export default newTripSchema;
