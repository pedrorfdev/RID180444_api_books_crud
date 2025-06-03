import { Book } from "@prisma/client";
import { BooksRepository } from "../repository/books-repository";

export class GetBooksService {
  constructor(private booksRepository: BooksRepository) {}

  async execute(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }
}
