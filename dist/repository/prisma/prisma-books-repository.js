"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBooksRepository = void 0;
const app_error_1 = __importDefault(require("../../errors/app-error"));
const prisma_1 = require("../../lib/prisma");
class PrismaBooksRepository {
    async findById(id) {
        const book = await prisma_1.prisma.book.findUnique({ where: { id } });
        return book;
    }
    async findByIsbn(isbn_code) {
        const book = await prisma_1.prisma.book.findUnique({
            where: {
                isbn_code,
            },
        });
        if (!book) {
            throw new app_error_1.default("Book not found!", 404);
        }
        return book;
    }
    async findAll() {
        const books = await prisma_1.prisma.book.findMany();
        return books;
    }
    async create(data) {
        const newBook = await prisma_1.prisma.book.create({
            data: data,
        });
        return newBook;
    }
    async update(id, data) {
        const updatedBook = await prisma_1.prisma.book.update({
            where: { id },
            data: data,
        });
        return updatedBook;
    }
    async delete(id) {
        await prisma_1.prisma.book.delete({
            where: { id },
        });
    }
}
exports.PrismaBooksRepository = PrismaBooksRepository;
