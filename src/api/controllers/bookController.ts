import { Request, Response } from "express";
import httpStatus from "http-status";

import bookService from "../../app/services/bookService";
import { AuthenticatedRequest } from "../../app/types";

export async function getBooks(req: Request, res: Response) {
    const authenticatedRequest = req as AuthenticatedRequest;
    
    try {
        const books = await bookService.getBooksList(authenticatedRequest.id);
        return res.status(httpStatus.OK).send(books);
    } catch (e) {
        return res.status(httpStatus.BAD_REQUEST).send(e);
    }
};

export async function postBook(req: Request, res: Response) {
    const authenticatedRequest = req as AuthenticatedRequest;

    try {
        const book = await bookService.addBook({
            ...authenticatedRequest.body,
            userId: authenticatedRequest.id
        });
        return res.status(httpStatus.CREATED).send(book);
    } catch (e) {
        return res.status(httpStatus.BAD_REQUEST).send(e);
    }
};