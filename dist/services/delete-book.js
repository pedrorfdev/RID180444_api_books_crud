"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookService = void 0;
class DeleteBookService {
    booksRepository;
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async execute(id) {
        await this.booksRepository.delete(id);
    }
}
exports.DeleteBookService = DeleteBookService;
