import { z } from "zod";

export const updateBookSchema = z.object({
  title: z.string().min(1).optional(),
  total_pages: z.number().int().positive().optional(),
  isbn_code: z.string().min(1).optional(),
  publisher: z.string().min(1).optional(),
});
