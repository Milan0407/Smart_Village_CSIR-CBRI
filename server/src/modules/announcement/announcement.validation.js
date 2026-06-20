import { z } from "zod";

export const createAnnouncementSchema =
  z.object({
    body: z.object({
      title: z.string().min(3),

      summary: z.string().min(3),

      content: z.string().min(3),

      pdfUrl: z
        .string()
        .optional(),

      externalLink: z
        .string()
        .optional(),

      publishDate: z
        .string()
        .optional(),

      expiryDate: z
        .string()
        .optional(),

      isFeatured:
        z.boolean().optional(),

      isActive:
        z.boolean().optional(),
    }),
  });

export const updateAnnouncementSchema =
  z.object({
    body: z.object({
      title:
        z.string().optional(),

      summary:
        z.string().optional(),

      content:
        z.string().optional(),

      pdfUrl:
        z.string().optional(),

      externalLink:
        z.string().optional(),

      publishDate:
        z.string().optional(),

      expiryDate:
        z.string().optional(),

      isFeatured:
        z.boolean().optional(),

      isActive:
        z.boolean().optional(),
    }),
  });