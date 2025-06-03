import { z } from "zod";

export const getBookByIsbnSchema = z.object({
  code: z.string().min(1, "ISBN code is required"),
});
