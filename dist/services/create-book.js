"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookService = void 0;
class CreateBookService {
    booksRepository;
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async execute(data) {
        const existingBook = await this.booksRepository.findByIsbn(data.isbn_code);
        if (existingBook) {
            throw new Error("Book with this ISBN already exists.");
        }
        const book = await this.booksRepository.create(data);
        return book;
    }
}
exports.CreateBookService = CreateBookService;
