import { z } from "zod";

const objectId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

const statusEnum = z.enum([
  "PLANNED",
  "IN_PROGRESS",
  "COMPLETED",
  "ON_HOLD",
  "CANCELLED",
]);

const priorityEnum = z.enum([
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
]);

const categoryEnum = z.enum([
  "INFRASTRUCTURE",
  "WATER",
  "ENERGY",
  "HEALTH",
  "EDUCATION",
  "AGRICULTURE",
  "DIGITAL",
  "SANITATION",
  "SKILL_DEVELOPMENT",
  "OTHER",
]);

// HTML <input type="date"> returns YYYY-MM-DD
const dateString = z
  .string()
  .regex(
    /^\d{4}-\d{2}-\d{2}$/,
    "Invalid date format"
  );

/*
=====================================================
Create Development Plan
=====================================================
*/

export const createDevelopmentPlanSchema = z.object({
  body: z.object({
    village: objectId,

    title: z
      .string()
      .trim()
      .min(3, "Title must be at least 3 characters.")
      .max(200, "Title cannot exceed 200 characters."),

    category: categoryEnum,

    description: z
      .string()
      .trim()
      .min(10, "Description must be at least 10 characters."),

    objectives: z
      .array(z.string().trim())
      .optional(),

    status: statusEnum.optional(),

    priority: priorityEnum.optional(),

    progress: z
      .coerce
      .number()
      .min(0)
      .max(100)
      .optional(),

    budget: z
      .coerce
      .number()
      .min(0)
      .optional(),

    fundingAgency: z
      .string()
      .trim()
      .optional(),

    implementingAgency: z
      .string()
      .trim()
      .optional(),

    startDate: dateString.optional(),

    targetDate: dateString.optional(),

    completedDate: z
      .union([
        dateString,
        z.literal("")
      ])
      .optional(),

    sdgGoals: z
      .array(
        z.coerce
          .number()
          .min(1)
          .max(17)
      )
      .optional(),

    beneficiaries: z
      .coerce
      .number()
      .min(0)
      .optional(),

    coverImage: objectId.optional(),

    gallery: z
      .array(objectId)
      .optional(),

    documents: z
      .array(
        z.object({
          title: z.string().trim(),

          file: objectId,
        })
      )
      .optional(),

    sortOrder: z
      .coerce
      .number()
      .optional(),

    isPublished: z
      .boolean()
      .optional(),
  }),
});

/*
=====================================================
Update Development Plan
=====================================================
*/

export const updateDevelopmentPlanSchema =
  z.object({
    params: z.object({
      id: objectId,
    }),

    body:
      createDevelopmentPlanSchema.shape.body.partial(),
  });

/*
=====================================================
Get Development Plan By ID
=====================================================
*/

export const developmentPlanIdSchema =
  z.object({
    params: z.object({
      id: objectId,
    }),
  });

/*
=====================================================
Get Development Plans By Village
=====================================================
*/

export const villageSlugSchema =
  z.object({
    params: z.object({
      slug: z.string().trim(),
    }),
  });