import joi from "joi";

import { CreateUserParams } from "../../app/types";

export const userSchema = joi.object<CreateUserParams>({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});