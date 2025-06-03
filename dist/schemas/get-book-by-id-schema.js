"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByIdSchema = void 0;
const zod_1 = require("zod");
exports.getBookByIdSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive("ID must be a positive integer"),
});
