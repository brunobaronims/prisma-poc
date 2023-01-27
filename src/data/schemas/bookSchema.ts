import { PostBookParams } from "../../app/types";

import joi from 'joi';

export const bookSchema = joi.object<PostBookParams>({
    name: joi.string().min(3).required(),
    category: joi.string().min(3).max(20).required(),
    author: joi.string().min(3).max(30).required()
});