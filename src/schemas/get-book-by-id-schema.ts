import { z } from "zod";

export const getBookByIdSchema = z.object({
  id: z.coerce.number().int().positive("ID must be a positive integer"),
});
