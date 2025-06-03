import { BooksRepository } from "../repository/books-repository";

export class DeleteBookService {
  constructor(private booksRepository: BooksRepository) {}

  async execute(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
