import joi from 'joi';

import joiErrorMessages from '../joiErrorMessages.js';

const bookCancelSchema = joi.object({
    reservar: joi.bool().optional().messages(joiErrorMessages),
    cancelar: joi.bool().optional().messages(joiErrorMessages),
});

export default bookCancelSchema;
