import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      type: "error",
      message: error.message,
    });
  }
  console.error("🔥 Internal Server Error:", error);
  return res.status(500).json({
    type: "error",
    message: "Internal Server Error.",
  });
}
