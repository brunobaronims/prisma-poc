import { Router } from 'express';

import { signIn } from "../controllers/authController";
import { validateBody } from "../../app/middlewares/validationMiddleware";
import { signInSchema } from "../../data/schemas/signInSchema";

export const authRouter = Router();

authRouter.post('/sign-in', validateBody(signInSchema), signIn);