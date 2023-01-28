import { Book } from '@prisma/client';

import { prisma } from '../../config/database';
import { PostBookParams } from '../../app/types/index';

async function getBooks(): Promise<Book[]> {
    return prisma.book.findMany();
};

const bookRepository = {
    getBooks,
};

export default bookRepository;