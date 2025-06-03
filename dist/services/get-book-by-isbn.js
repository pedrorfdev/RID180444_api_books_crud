"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBookByIsbnService = void 0;
const app_error_1 = __importDefault(require("../errors/app-error"));
class GetBookByIsbnService {
    booksRepository;
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async execute(isbn_code) {
        const book = await this.booksRepository.findByIsbn(isbn_code);
        if (!book) {
            throw new app_error_1.default("Book not found!", 404);
        }
        return book;
    }
}
exports.GetBookByIsbnService = GetBookByIsbnService;
