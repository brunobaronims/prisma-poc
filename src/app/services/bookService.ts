import { CreatedBookParams } from "../types";
import bookRepository from "../../data/repositories/bookRepository";

async function addBook(params: CreatedBookParams) {
    return bookRepository.addBook(params);
};

async function getBooksList(userId: number) {
    return bookRepository.getBooks(userId);
}

const bookService = {
    addBook,
    getBooksList
};

export default bookService;