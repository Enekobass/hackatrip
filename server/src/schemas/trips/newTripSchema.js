import joi from 'joi';

import imgSchema from '../imgSchema.js';

import joiErrorMessages from '../joiErrorMessages.js';

const newTripSchema = joi.object({
    titulo: joi.string().min(5).max(100).required().messages(joiErrorMessages),
    destino: joi.string().min(3).max(50).required().messages(joiErrorMessages),
    fechaDeInicio: joi.date().required().messages(joiErrorMessages),
    fechaDeFin: joi.date().required().messages(joiErrorMessages),
    plazasMinimas: joi.number().required().messages(joiErrorMessages),
    plazasMaximas: joi.number().required().messages(joiErrorMessages),
    ruta: joi.string().min(3).max(2000).required().messages(joiErrorMessages),
    precio: joi.number().required().messages(joiErrorMessages),
    descripcion: joi
        .string()
        .min(10)
        .max(2500)
        .required()
        .messages(joiErrorMessages),
    activo: joi.number().required().messages(joiErrorMessages),
    photo: imgSchema.required(),
});

export default newTripSchema;
