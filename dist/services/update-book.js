"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookService = void 0;
class UpdateBookService {
    booksRepository;
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async execute({ id, data }) {
        const updatedBook = await this.booksRepository.update(id, data);
        return updatedBook;
    }
}
exports.UpdateBookService = UpdateBookService;
