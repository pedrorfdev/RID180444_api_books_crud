import { Router } from "express";
import { booksRouter } from "./books-routes";

const routes = Router();

routes.get("/health", (request, response) => {
  return response.json({ message: "Hello Dev! I am Alive!" });
});

routes.use("/livros", booksRouter);

export default routes;
