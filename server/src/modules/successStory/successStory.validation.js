import { z } from "zod";

export const createSuccessStorySchema =
  z.object({
    body: z.object({
      title: z
        .string()
        .min(3),

      slug: z
        .string()
        .min(2),

      village: z
        .string()
        .min(1),

      featuredImage:
        z.string().optional(),

      galleryImages:
        z.array(z.string()).optional(),

      videoUrl:
        z.string().optional(),

      summary:
        z.string().optional(),

      story:
        z.string().optional(),

      impact:
        z.string().optional(),

      beneficiaries:
        z.number().optional(),

      isFeatured:
        z.boolean().optional(),

      status:
        z.enum([
          "DRAFT",
          "PUBLISHED",
          "ARCHIVED",
        ]).optional(),
    }),
  });

export const updateSuccessStorySchema =
  z.object({
    body: z.object({
      title:
        z.string().min(3).optional(),

      slug:
        z.string().min(2).optional(),

      village:
        z.string().optional(),

      featuredImage:
        z.string().optional(),

      galleryImages:
        z.array(z.string()).optional(),

      videoUrl:
        z.string().optional(),

      summary:
        z.string().optional(),

      story:
        z.string().optional(),

      impact:
        z.string().optional(),

      beneficiaries:
        z.number().optional(),

      isFeatured:
        z.boolean().optional(),

      status:
        z.enum([
          "DRAFT",
          "PUBLISHED",
          "ARCHIVED",
        ]).optional(),
    }),
  });