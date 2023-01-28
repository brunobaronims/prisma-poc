import { Book } from '@prisma/client';

import { prisma } from '../../config/database';
import { CreatedBookParams, UpdatedBookParams } from '../../app/types/index';

async function getBooks(userId: number): Promise<Book[]> {
    const booksList = await prisma.book.findMany({
        where: {
            userId: userId
        }
    });

    return booksList;
};

async function addBook(createdBook: CreatedBookParams) {
    const newBook = await prisma.book.create({
        data: createdBook
    })
    
    return newBook;
};

const bookRepository = {
    getBooks,
    addBook
};

export default bookRepository;