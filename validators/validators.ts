import { z } from "zod";
export const userSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});
