"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const app_error_1 = __importDefault(require("../errors/app-error"));
function errorHandler(error, _req, res, _next) {
    if (error instanceof app_error_1.default) {
        return res.status(error.statusCode).json({
            type: "error",
            message: error.message,
        });
    }
    return res.status(500).json({
        type: "error",
        message: "Internal Server Error.",
    });
}
