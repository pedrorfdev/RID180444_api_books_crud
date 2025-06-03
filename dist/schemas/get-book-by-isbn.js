"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByIsbnSchema = void 0;
const zod_1 = require("zod");
exports.getBookByIsbnSchema = zod_1.z.object({
    code: zod_1.z.string().min(1, "ISBN code is required"),
});
