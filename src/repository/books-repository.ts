import { Book } from "@prisma/client";

export interface BooksRepository {
  findById(id: number): Promise<Book | null>;
  findByIsbn(isbn_code: string): Promise<Book | null>;
  findAll(): Promise<Book[]>;
  create(data: Omit<Book, "id">): Promise<Book>;
  update(id: number, data: Partial<Omit<Book, "id">>): Promise<Book>;
  delete(id: number): Promise<void>;
}
