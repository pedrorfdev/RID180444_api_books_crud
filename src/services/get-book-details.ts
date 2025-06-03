import { Book } from "@prisma/client";
import AppError from "src/errors/app-error";
import { BooksRepository } from "src/repository/books-repository";

export class GetBookDetailsService {
  constructor(private booksRepository: BooksRepository) {}

  async execute(id: number): Promise<Book> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new AppError("Book not found", 404);
    }

    return book;
  }
}
