import joi from 'joi';

import imgSchema from '../imgSchema.js';

import joiErrorMessages from '../joiErrorMessages.js';

const newTripSchema = joi.object({
    titulo: joi.string().min(5).max(20).required().messages(joiErrorMessages),
    destino: joi.string().min(3).max(50).required().messages(joiErrorMessages),
    fechaDeInicio: joi.string().min(3).max(30).required().messages(joiErrorMessages),
    fechaDeFin: joi.string().min(3).max(30).required().messages(joiErrorMessages),
    plazasMinimas: joi.number().required().messages(joiErrorMessages),
    plazasMaximas: joi.number().required().messages(joiErrorMessages),
    ruta: joi.string().min(3).max(200).required().messages(joiErrorMessages),
    precio: joi.number().required().messages(joiErrorMessages),
    description: joi
        .string()
        .min(10)
        .max(250)
        .required()
        .messages(joiErrorMessages),
    photo1: imgSchema.optional(),
    photo2: imgSchema.optional(),
    photo3: imgSchema.optional(),
});

export default newTripSchema;
