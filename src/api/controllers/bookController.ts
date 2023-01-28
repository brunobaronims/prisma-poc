import { Request, Response } from "express";
import httpStatus from "http-status";
import bookService from "../../app/services/bookService";

export async function getBooks(res: Response) {
    try {
        const books = bookService.getBooksList();
        return res.status(httpStatus.OK).send(books);
    } catch (e) {
        return res.status(httpStatus.BAD_REQUEST).send(e);
    }
};

//export async function postBook(req: Request, res: Response) {
//    const {
//        name,
//        author, 
//        category
//    } = req.body;
//    
//    try {
//        const book = await bookService.addBook({ name, author, category });
//        return res.status(httpStatus.CREATED).send(book);
//    } catch (e) {
//        return res.status(httpStatus.BAD_REQUEST).send(e);
//    }
//}