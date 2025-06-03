"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBooksService = void 0;
class GetBooksService {
    booksRepository;
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async execute() {
        return this.booksRepository.findAll();
    }
}
exports.GetBooksService = GetBooksService;
