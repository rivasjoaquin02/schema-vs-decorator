import { z } from "zod";

export const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email().optional(),
  age: z.number(),
});

export const PartialUserSchema = UserSchema.partial();

