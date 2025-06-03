import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import AppError from "../errors/app-error";

export function validate(
  schema: ZodSchema,
  source: "body" | "params" | "query" = "body"
) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const data = req[source];
    const result = schema.safeParse(data);

    if (!result.success) {
      const message = result.error.errors.map((e) => e.message).join("; ");
      throw new AppError(`Validation failed: ${message}`, 400);
    }

    // substitui os dados com a versão validada/transformada
    req[source] = result.data;
    next();
  };
}
