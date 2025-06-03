"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_routes_1 = require("./books-routes");
const routes = (0, express_1.Router)();
routes.get("/health", (request, response) => {
    return response.json({ message: "Hello Dev! I am Alive!" });
});
routes.use("/livros", books_routes_1.booksRouter);
exports.default = routes;
