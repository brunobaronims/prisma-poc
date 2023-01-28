import { CreatedBookParams } from "../../app/types";

import joi from 'joi';

export const bookSchema = joi.object<CreatedBookParams>({
    name: joi.string().min(3).required(),
    category: joi.string().min(3).max(20).required(),
    author: joi.string().min(3).max(30).required(),
    startedAt: joi.date(),
    finishedAt: joi.date()
});