import { Book } from "@prisma/client";
import { BooksRepository } from "../repository/books-repository";

interface UpdateBookInput {
  id: number;
  data: Partial<Omit<Book, "id">>;
}

export class UpdateBookService {
  constructor(private booksRepository: BooksRepository) {}

  async execute({ id, data }: UpdateBookInput): Promise<Book> {
    const updatedBook = await this.booksRepository.update(id, data);
    return updatedBook;
  }
}
