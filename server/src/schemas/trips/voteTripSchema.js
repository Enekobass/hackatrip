import joi from 'joi';

import imgSchema from '../imgSchema.js';

import joiErrorMessages from '../joiErrorMessages.js';

const voteTripSchema = joi.object({
    photo: imgSchema.required(),
    title: joi
        .string()
        .required()
        .messages(joiErrorMessages),
    description: joi
        .string()
        .required()
        .messages(joiErrorMessages),
    value: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages(joiErrorMessages),
});

export default voteTripSchema;
