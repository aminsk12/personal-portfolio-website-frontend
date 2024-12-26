import { z } from "zod";

export const registrationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(2, "Password should be at least 6 characters long"),
    role: z.string(),
    // role: z.enum(["customer", "vendor"],
});