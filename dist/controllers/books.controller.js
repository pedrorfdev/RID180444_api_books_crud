"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const prisma_books_repository_1 = require("../repository/prisma/prisma-books-repository");
const create_book_1 = require("../services/create-book");
const delete_book_1 = require("../services/delete-book");
const get_book_by_isbn_1 = require("../services/get-book-by-isbn");
const get_book_details_1 = require("../services/get-book-details");
const get_books_1 = require("../services/get-books");
const update_book_1 = require("../services/update-book");
class BooksController {
    booksRepository = new prisma_books_repository_1.PrismaBooksRepository();
    async getBooks(request, response) {
        const service = new get_books_1.GetBooksService(this.booksRepository);
        const books = await service.execute();
        return response.json(books);
    }
    async getBookDetails(request, response) {
        const { id } = request.params;
        const service = new get_book_details_1.GetBookDetailsService(this.booksRepository);
        const book = await service.execute(Number(id));
        return response.json(book);
    }
    async getBookByIsbn(request, response) {
        const { isbn_code } = request.params;
        const service = new get_book_by_isbn_1.GetBookByIsbnService(this.booksRepository);
        const book = await service.execute(isbn_code);
        return response.json(book);
    }
    async createBook(request, response) {
        const { title, total_pages, isbn_code, publisher } = request.body;
        const service = new create_book_1.CreateBookService(this.booksRepository);
        const book = await service.execute({
            title,
            total_pages,
            isbn_code,
            publisher,
        });
        return response.json(book);
    }
    async updateBook(request, response) {
        const id = Number(request.params.id);
        const data = request.body;
        const service = new update_book_1.UpdateBookService(this.booksRepository);
        const book = await service.execute({ id, data });
        return response.json(book);
    }
    async deleteBook(request, response) {
        const { id } = request.params;
        const service = new delete_book_1.DeleteBookService(this.booksRepository);
        await service.execute(Number(id));
        return response.status(204).send;
    }
}
exports.BooksController = BooksController;
