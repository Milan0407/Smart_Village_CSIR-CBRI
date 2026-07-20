import { z } from "zod";

import {
  POLICY_SCHEME_CATEGORIES,
} from "./PoliciesScheme.model.js";

const objectId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

const mediaSchema = z.object({
  url: z.string().trim().url(),
  publicId: z.string().trim().min(1),
  alt: z.string().trim().optional(),
});

export const createPoliciesSchemeSchema = z.object({
  body: z.object({
    village: objectId,

    category: z.enum(POLICY_SCHEME_CATEGORIES),

    schemeName: z
      .string()
      .trim()
      .min(3, "Scheme name must be at least 3 characters")
      .max(200),

    shortDescription: z
      .string()
      .trim()
      .min(3)
      .max(500),

    detailedDescription: z
      .string()
      .trim()
      .min(3),

    featuredImage: mediaSchema.optional(),

    beneficiariesCount: z
      .coerce
      .number()
      .int()
      .min(0)
      .optional(),

    officialWebsiteUrl: z
      .string()
      .trim()
      .url()
      .optional()
      .or(z.literal("")),

    displayOrder: z
      .coerce
      .number()
      .int()
      .optional(),

    published: z.boolean().optional(),

    slug: z
      .string()
      .trim()
      .min(1)
      .optional(),
  }),
});

export const updatePoliciesSchemeSchema = z.object({
  params: z.object({
    id: objectId,
  }),

  body: createPoliciesSchemeSchema.shape.body.partial(),
});

export const policiesSchemeIdSchema = z.object({
  params: z.object({
    id: objectId,
  }),
});

export const policiesSchemeSlugSchema = z.object({
  params: z.object({
    schemeSlug: z.string().trim().min(1),
  }),
});

export const villageSlugSchema = z.object({
  params: z.object({
    villageSlug: z.string().trim().min(1),
  }),
});

export const policiesSchemeQuerySchema = z.object({
  query: z.object({
    search: z.string().optional(),

    village: objectId.optional(),

    category: z
      .enum(POLICY_SCHEME_CATEGORIES)
      .optional(),

    published: z
      .enum(["true", "false"])
      .optional(),

    page: z
      .coerce
      .number()
      .min(1)
      .optional(),

    limit: z
      .coerce
      .number()
      .min(1)
      .max(100)
      .optional(),

    sortBy: z.string().optional(),

    sortOrder: z
      .enum(["asc", "desc"])
      .optional(),
  }),
});
