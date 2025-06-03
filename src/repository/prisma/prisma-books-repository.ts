import { Book } from "@prisma/client";
import AppError from "src/errors/app-error";
import { prisma } from "src/lib/prisma";
import { BooksRepository } from "../books-repository";

export class PrismaBooksRepository implements BooksRepository {
  async findById(id: number): Promise<Book | null> {
    const book = await prisma.book.findUnique({ where: { id } });

    return book;
  }

  async findByIsbn(isbn_code: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
      where: {
        isbn_code,
      },
    });

    if (!book) {
      throw new AppError("Book not found!", 404);
    }

    return book;
  }

  async findAll(): Promise<Book[]> {
    const books = await prisma.book.findMany();

    return books;
  }

  async create(data: Omit<Book, "id">): Promise<Book> {
    const newBook = await prisma.book.create({
      data: data,
    });

    return newBook;
  }

  async update(id: number, data: Partial<Omit<Book, "id">>): Promise<Book> {
    const updatedBook = await prisma.book.update({
      where: { id },
      data: data,
    });

    return updatedBook;
  }

  async delete(id: number): Promise<void> {
    await prisma.book.delete({
      where: { id },
    });
  }
}
