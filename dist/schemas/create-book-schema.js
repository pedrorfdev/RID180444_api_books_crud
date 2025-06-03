"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookSchema = void 0;
const zod_1 = require("zod");
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    total_pages: zod_1.z
        .number()
        .int()
        .positive("Total pages must be a positive integer"),
    isbn_code: zod_1.z.string().min(1, "ISBN code is required"),
    publisher: zod_1.z.string().min(1, "Publisher is required"),
});
