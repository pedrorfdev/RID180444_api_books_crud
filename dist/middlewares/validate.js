"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const app_error_1 = __importDefault(require("../errors/app-error"));
function validate(schema, source = "body") {
    return (req, _res, next) => {
        const data = req[source];
        const result = schema.safeParse(data);
        if (!result.success) {
            const message = result.error.errors.map((e) => e.message).join("; ");
            throw new app_error_1.default(`Validation failed: ${message}`, 400);
        }
        // substitui os dados com a versão validada/transformada
        req[source] = result.data;
        next();
    };
}
