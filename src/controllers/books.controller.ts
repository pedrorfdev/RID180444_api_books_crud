import { Request, Response } from "express";
import { PrismaBooksRepository } from "../repository/prisma/prisma-books-repository";
import { CreateBookService } from "../services/create-book";
import { DeleteBookService } from "../services/delete-book";
import { GetBookByIsbnService } from "../services/get-book-by-isbn";
import { GetBookDetailsService } from "../services/get-book-details";
import { GetBooksService } from "../services/get-books";
import { UpdateBookService } from "../services/update-book";

export class BooksController {
  private booksRepository = new PrismaBooksRepository();

  async getBooks(request: Request, response: Response) {
    const service = new GetBooksService(this.booksRepository);
    const books = await service.execute();
    return response.json(books);
  }

  async getBookDetails(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetBookDetailsService(this.booksRepository);
    const book = await service.execute(Number(id));
    return response.json(book);
  }

  async getBookByIsbn(request: Request, response: Response) {
    const { isbn_code } = request.params;
    const service = new GetBookByIsbnService(this.booksRepository);
    const book = await service.execute(isbn_code);
    return response.json(book);
  }

  async createBook(request: Request, response: Response) {
    const { title, total_pages, isbn_code, publisher } = request.body;
    const service = new CreateBookService(this.booksRepository);
    const book = await service.execute({
      title,
      total_pages,
      isbn_code,
      publisher,
    });
    return response.json(book);
  }

  async updateBook(request: Request, response: Response) {
    const id = Number(request.params.id);
    const data = request.body;
    const service = new UpdateBookService(this.booksRepository);
    const book = await service.execute({ id, data });
    return response.json(book);
  }

  async deleteBook(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteBookService(this.booksRepository);
    await service.execute(Number(id));
    return response.status(204).send;
  }
}
