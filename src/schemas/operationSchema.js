import joi from 'joi';

export const addSchema = joi.object({
    value: joi.number().positive().required(),
    description: joi.string().required()
});

export const subtractSchema = joi.object({
    value: joi.number().negative().required(),
    description: joi.string().required()
});