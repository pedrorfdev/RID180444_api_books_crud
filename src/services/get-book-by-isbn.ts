import { Book } from "@prisma/client";
import AppError from "../errors/app-error";
import { BooksRepository } from "../repository/books-repository";

export class GetBookByIsbnService {
  constructor(private booksRepository: BooksRepository) {}

  async execute(isbn_code: string): Promise<Book> {
    const book = await this.booksRepository.findByIsbn(isbn_code);

    if (!book) {
      throw new AppError("Book not found!", 404);
    }

    return book;
  }
}
