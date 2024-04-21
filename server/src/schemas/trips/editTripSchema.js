import joi from 'joi';

import joiErrorMessages from '../joiErrorMessages.js';

const editTripSchema = joi.object({
    desactivar: joi.string().optional().messages(joiErrorMessages),
    reactivar: joi.string().optional().messages(joiErrorMessages),
    confirmar: joi.string().optional().messages(joiErrorMessages),
});

export default editTripSchema;
