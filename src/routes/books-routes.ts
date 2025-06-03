import { Router } from "express";
import { BooksController } from "src/controllers/books.controller";
import { validate } from "src/middlewares/validate";
import { createBookSchema } from "src/schemas/create-book-schema";
import { getBookByIdSchema } from "src/schemas/get-book-by-id-schema";
import { getBookByIsbnSchema } from "src/schemas/get-book-by-isbn";
import { updateBookSchema } from "src/schemas/update-book-schema";

export const booksRouter = Router();

const controller = new BooksController();

booksRouter.get("/", controller.getBooks.bind(controller));

booksRouter.get(
  "/:id",
  validate(getBookByIdSchema, "params"),
  controller.getBookDetails.bind(controller)
);
booksRouter.get(
  "/search",
  validate(getBookByIsbnSchema, "query"),
  controller.getBookByIsbn.bind(controller)
);

booksRouter.post(
  "/",
  validate(createBookSchema, "body"),
  controller.createBook.bind(controller)
);
booksRouter.put(
  "/:id",
  validate(updateBookSchema, "body"),
  controller.updateBook.bind(controller)
);

booksRouter.delete("/:id", controller.deleteBook.bind(controller));
