import { Book } from "@prisma/client";
import { BooksRepository } from "src/repository/books-repository";

interface CreateBookInput {
  title: string;
  total_pages: number;
  isbn_code: string;
  publisher: string;
}

export class CreateBookService {
  constructor(private booksRepository: BooksRepository) {}

  async execute(data: CreateBookInput): Promise<Book> {
    const existingBook = await this.booksRepository.findByIsbn(data.isbn_code);

    if (existingBook) {
      throw new Error("Book with this ISBN already exists.");
    }

    const book = await this.booksRepository.create(data);
    return book;
  }
}
