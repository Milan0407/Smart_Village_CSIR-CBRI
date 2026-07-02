import { z } from "zod";

export const sendContactMessageSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters.")
      .max(100, "Name cannot exceed 100 characters."),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Please provide a valid email address."),

    subject: z
      .string()
      .trim()
      .min(3, "Subject must be at least 3 characters.")
      .max(150, "Subject cannot exceed 150 characters."),

    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters.")
      .max(2000, "Message cannot exceed 2000 characters."),
  }),
});