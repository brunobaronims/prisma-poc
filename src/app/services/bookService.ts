import { PostBookParams } from "../types";
import bookRepository from "../../data/repositories/bookRepository";

//async function addBook({name, author, category}: PostBookParams) {
//    return bookRepository.addBook(name, author, category);
//};

async function getBooksList() {
    return bookRepository.getBooks();
}

const bookService = {
    //addBook,
    getBooksList
};

export default bookService;