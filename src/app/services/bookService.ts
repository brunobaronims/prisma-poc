import { CreatedBookParams } from "../types";
import bookRepository from "../../data/repositories/bookRepository";
import { exclude } from "../../utils/prisma-utils";

async function addBook(params: CreatedBookParams) {
    return bookRepository.addBook(params);
};

async function getBooksList(userId: number) {
    const booksList = await bookRepository.getBooks(userId);
    const formattedList = booksList.map((book) => {
        return exclude(book, "userId", "id");
    })
    return formattedList;
}

const bookService = {
    addBook,
    getBooksList
};

export default bookService;