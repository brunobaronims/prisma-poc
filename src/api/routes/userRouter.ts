import { Router } from "express";

import { validateBody } from "../../app/middlewares/validationMiddleware";
import { userSchema } from "../../data/schemas";
import { postUser } from "../controllers";

export const userRouter = Router();

userRouter
    .post('/', validateBody(userSchema), postUser);

