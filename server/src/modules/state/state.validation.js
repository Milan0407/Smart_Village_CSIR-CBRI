import { z } from "zod";

export const createStateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(2, "State name must be at least 2 characters.")
      .max(100, "State name cannot exceed 100 characters."),

    slug: z
      .string()
      .trim()
      .toLowerCase()
      .min(2, "Slug is required."),

    code: z
      .string()
      .trim()
      .toUpperCase()
      .min(2, "State code is required.")
      .max(20, "State code cannot exceed 20 characters."),

    description: z
      .string()
      .trim()
      .optional()
      .default(""),

    coverImage: z
      .string()
      .nullable()
      .optional(),

    sortOrder: z
      .number()
      .int()
      .nonnegative()
      .optional()
      .default(0),

    isPublished: z
      .boolean()
      .optional()
      .default(true),
  }),
});

export const updateStateSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2).max(100).optional(),

    slug: z.string().trim().toLowerCase().optional(),

    code: z.string().trim().toUpperCase().optional(),

    description: z.string().trim().optional(),

    coverImage: z.string().nullable().optional(),

    sortOrder: z.number().int().nonnegative().optional(),

    isPublished: z.boolean().optional(),
  }),
});