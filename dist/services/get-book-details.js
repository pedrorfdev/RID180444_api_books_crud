"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBookDetailsService = void 0;
const app_error_1 = __importDefault(require("../errors/app-error"));
class GetBookDetailsService {
    booksRepository;
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async execute(id) {
        const book = await this.booksRepository.findById(id);
        if (!book) {
            throw new app_error_1.default("Book not found", 404);
        }
        return book;
    }
}
exports.GetBookDetailsService = GetBookDetailsService;
