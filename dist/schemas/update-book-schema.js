"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookSchema = void 0;
const zod_1 = require("zod");
exports.updateBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    total_pages: zod_1.z.number().int().positive().optional(),
    isbn_code: zod_1.z.string().min(1).optional(),
    publisher: zod_1.z.string().min(1).optional(),
});
