import { z } from "zod";

const highlightSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Highlight title is required.")
    .max(100),

  value: z
    .string()
    .trim()
    .min(1, "Highlight value is required.")
    .max(200),

  icon: z
    .string()
    .trim()
    .optional()
    .default(""),
});

export const createVillageProfileSchema = z.object({
  body: z.object({
    village: z
      .string()
      .min(1, "Village is required."),

    heroTitle: z
      .string()
      .trim()
      .min(2)
      .max(200),

    heroSubtitle: z
      .string()
      .trim()
      .optional()
      .default(""),

    heroImage: z
      .string()
      .nullable()
      .optional(),

    overview: z
      .string()
      .optional()
      .default(""),

    history: z
      .string()
      .optional()
      .default(""),

    geography: z
      .string()
      .optional()
      .default(""),

    climate: z
      .string()
      .optional()
      .default(""),

    culture: z
      .string()
      .optional()
      .default(""),

    strengths: z
      .string()
      .optional()
      .default(""),

    challenges: z
      .string()
      .optional()
      .default(""),

    opportunities: z
      .string()
      .optional()
      .default(""),

    highlights: z
      .array(highlightSchema)
      .optional()
      .default([]),

    galleryImages: z
      .array(z.string())
      .optional()
      .default([]),

    contactPerson: z
      .string()
      .optional()
      .default(""),

    contactDesignation: z
      .string()
      .optional()
      .default(""),

    contactNumber: z
      .string()
      .optional()
      .default(""),

    email: z
      .string()
      .email()
      .optional()
      .or(z.literal("")),

    website: z
      .string()
      .url()
      .optional()
      .or(z.literal("")),

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

export const updateVillageProfileSchema = z.object({
  body: z.object({
    village: z.string().optional(),

    heroTitle: z
      .string()
      .trim()
      .min(2)
      .max(200)
      .optional(),

    heroSubtitle: z
      .string()
      .trim()
      .optional(),

    heroImage: z
      .string()
      .nullable()
      .optional(),

    overview: z.string().optional(),

    history: z.string().optional(),

    geography: z.string().optional(),

    climate: z.string().optional(),

    culture: z.string().optional(),

    strengths: z.string().optional(),

    challenges: z.string().optional(),

    opportunities: z.string().optional(),

    highlights: z
      .array(highlightSchema)
      .optional(),

    galleryImages: z
      .array(z.string())
      .optional(),

    contactPerson: z.string().optional(),

    contactDesignation: z.string().optional(),

    contactNumber: z.string().optional(),

    email: z
      .string()
      .email()
      .optional()
      .or(z.literal("")),

    website: z
      .string()
      .url()
      .optional()
      .or(z.literal("")),

    sortOrder: z
      .number()
      .int()
      .nonnegative()
      .optional(),

    isPublished: z
      .boolean()
      .optional(),
  }),
});