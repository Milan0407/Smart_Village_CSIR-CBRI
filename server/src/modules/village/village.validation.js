import { z } from "zod";

export const createVillageSchema = z.object({
  body: z.object({
    state: z
      .string()
      .min(1, "State is required."),

    name: z.object({
      en: z
        .string()
        .trim()
        .min(2, "English name must be at least 2 characters.")
        .max(100),

      regional: z
        .string()
        .trim()
        .optional()
        .default(""),
    }),

    slug: z
      .string()
      .trim()
      .toLowerCase()
      .min(2, "Slug is required."),

    villageCode: z
      .string()
      .trim()
      .toUpperCase()
      .min(2, "Village code is required.")
      .max(50),

    district: z
      .string()
      .trim()
      .min(2, "District is required."),

    block: z
      .string()
      .trim()
      .optional()
      .default(""),

    gramPanchayat: z
      .string()
      .trim()
      .optional()
      .default(""),

    pinCode: z
      .string()
      .trim()
      .optional()
      .default(""),

    location: z
      .object({
        type: z.literal("Point").default("Point"),

        coordinates: z
          .array(z.number())
          .length(2, "Coordinates must contain longitude and latitude."),
      })
      .optional(),

    coverImage: z
      .string()
      .nullable()
      .optional(),

    languages: z
      .array(z.string())
      .optional()
      .default(["en"]),

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

    status: z
      .enum([
        "ACTIVE",
        "INACTIVE",
        "ARCHIVED",
      ])
      .optional()
      .default("ACTIVE"),
  }),
});

export const updateVillageSchema = z.object({
  body: z.object({
    state: z.string().optional(),

    name: z
      .object({
        en: z.string().trim().min(2).max(100),

        regional: z.string().trim().optional(),
      })
      .optional(),

    slug: z.string().trim().toLowerCase().optional(),

    villageCode: z
      .string()
      .trim()
      .toUpperCase()
      .optional(),

    district: z.string().trim().optional(),

    block: z.string().trim().optional(),

    gramPanchayat: z.string().trim().optional(),

    pinCode: z.string().trim().optional(),

    location: z
      .object({
        type: z.literal("Point").optional(),

        coordinates: z.array(z.number()).length(2).optional(),
      })
      .optional(),

    coverImage: z.string().nullable().optional(),

    languages: z.array(z.string()).optional(),

    sortOrder: z.number().int().nonnegative().optional(),

    isPublished: z.boolean().optional(),

    status: z
      .enum([
        "ACTIVE",
        "INACTIVE",
        "ARCHIVED",
      ])
      .optional(),
  }),
});