import { Router } from 'express';

import { authenticateToken } from "../../app/middlewares/authenticationMiddleware";
import { validateBody } from '../../app/middlewares/validationMiddleware';
import { bookSchema } from '../../data/schemas';
import { getBooks, postBook } from "../controllers";

export const bookRouter = Router();

bookRouter
    .all('/*', authenticateToken)
    .post('/', validateBody(bookSchema), postBook)
    .get('/', getBooks)

