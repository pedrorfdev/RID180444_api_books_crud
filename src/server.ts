import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/error-handle";
import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: "https://books-central.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => {
  console.log(`Server is running!! 🚀`);
});
