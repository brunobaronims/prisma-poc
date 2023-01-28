import { CreatedBookParams } from "../types";
import bookRepository from "../../data/repositories/bookRepository";

async function addBook(params: CreatedBookParams) {
    return bookRepository.addBook(params);
};

async function getBooksList() {
    return bookRepository.getBooks();
}

const bookService = {
    addBook,
    getBooksList
};

export default bookService;