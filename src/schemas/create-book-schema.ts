import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  total_pages: z
    .number()
    .int()
    .positive("Total pages must be a positive integer"),
  isbn_code: z.string().min(1, "ISBN code is required"),
  publisher: z.string().min(1, "Publisher is required"),
});
