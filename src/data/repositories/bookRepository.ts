import { Book } from '@prisma/client';

import { prisma } from '../../config/database'

async function getBooks(): Promise<Book[]> {
    return prisma.book.findMany();
};

async function addBook(name: string, category: string, author: string) {
    await prisma.book.create({
        data: {
            name: name,
            category: category,
            author: author
        }
    });
};

const bookRepository = {
    getBooks,
    addBook
};

export default bookRepository;