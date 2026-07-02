import { z } from "zod";

const videoSchema = z
  .object({
    type: z
      .enum([
        "YOUTUBE",
        "EXTERNAL",
        "UPLOAD",
      ])
      .optional(),

    url: z
      .string()
      .nullable()
      .optional(),

    embedUrl: z
      .string()
      .nullable()
      .optional(),

    media: z
      .string()
      .nullable()
      .optional(),
  })
  .optional();

export const createSuccessStoryVillageSchema =
  z.object({
    body: z.object({
      name: z
        .string()
        .min(2),

      slug: z
        .string()
        .min(2),

      shortDescription: z
        .string()
        .optional(),

      fullDescription: z
        .string()
        .optional(),

      coverImage: z
        .string()
        .optional(),

      bannerImage: z
        .string()
        .optional(),

      video: videoSchema,

      isPublished: z
        .boolean()
        .optional(),

      sortOrder: z.coerce
        .number()
        .optional(),
    }),
  });

export const updateSuccessStoryVillageSchema =
  z.object({
    body: z.object({
      name: z
        .string()
        .min(2)
        .optional(),

      slug: z
        .string()
        .min(2)
        .optional(),

      shortDescription: z
        .string()
        .optional(),

      fullDescription: z
        .string()
        .optional(),

      coverImage: z
        .string()
        .optional(),

      bannerImage: z
        .string()
        .optional(),

      video: videoSchema,

      isPublished: z
        .boolean()
        .optional(),

      sortOrder: z.coerce
        .number()
        .optional(),
    }),
  });