import joi from 'joi';

import imgSchema from '../imgSchema.js';

const addPhotoSchema = joi.object({
    photo: imgSchema.required(),
});

export default addPhotoSchema;
