import joi from 'joi';

import imgSchema from '../imgSchema.js';

const voteTripSchema = joi.object({
    photo: imgSchema.required(),
    post: joi.string().required().messages(joiErrorMessages),
    value: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages(joiErrorMessages),
});

export default voteTripSchema;
