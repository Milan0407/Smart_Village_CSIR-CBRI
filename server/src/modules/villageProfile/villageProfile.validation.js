import { z } from "zod";

const optionalText = (max = 300) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .default("");

const optionalTextUpdate = (max = 300) =>
  z.string().trim().max(max).optional();

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[+\d\s-]*$/, "Phone number can only contain digits, spaces, + and -.")
  .max(20)
  .optional()
  .default("");

const phoneUpdateSchema = z
  .string()
  .trim()
  .regex(/^[+\d\s-]*$/, "Phone number can only contain digits, spaces, + and -.")
  .max(20)
  .optional();

const pinCodeSchema = z
  .string()
  .trim()
  .regex(/^\d{0,6}$/, "PIN code must contain up to 6 digits.")
  .optional()
  .default("");

const pinCodeUpdateSchema = z
  .string()
  .trim()
  .regex(/^\d{0,6}$/, "PIN code must contain up to 6 digits.")
  .optional();

const galleryItemSchema = z.union([
  z.string(),
  z.object({
    image: z.string().min(1, "Gallery image is required."),
    caption: optionalText(200),
    sortOrder: z.coerce.number().int().optional().default(0),
  }),
]);

const optionalObjectId = z
  .string()
  .trim()
  .optional()
  .nullable()
  .transform((value) => (value === "" ? null : value));

const galleryItemUpdateSchema = z.union([
  z.string(),
  z.object({
    image: z.string().min(1, "Gallery image is required."),
    caption: optionalTextUpdate(200),
    sortOrder: z.coerce.number().int().optional(),
  }),
]);

const contactPersonSchema = z.object({
  name: optionalText(120),
  designation: optionalText(120),
  phone: phoneSchema,
  alternatePhone: phoneSchema,
  email: z
    .string()
    .email()
    .optional()
    .or(z.literal("")),
  officeAddress: optionalText(500),
  gramPanchayat: optionalText(120),
  block: optionalText(120),
  district: optionalText(120),
  state: optionalText(120),
  pinCode: pinCodeSchema,
  displayOrder: z.coerce.number().int().optional().default(0),
});

const contactPersonUpdateSchema = z.object({
  name: optionalTextUpdate(120),
  designation: optionalTextUpdate(120),
  phone: phoneUpdateSchema,
  alternatePhone: phoneUpdateSchema,
  email: z
    .string()
    .email()
    .optional()
    .or(z.literal("")),
  officeAddress: optionalTextUpdate(500),
  gramPanchayat: optionalTextUpdate(120),
  block: optionalTextUpdate(120),
  district: optionalTextUpdate(120),
  state: optionalTextUpdate(120),
  pinCode: pinCodeUpdateSchema,
  displayOrder: z.coerce.number().int().optional(),
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

    heroImage: optionalObjectId,

    overview: z
      .string()
      .optional()
      .default(""),

    aboutHeading: optionalText(200).default("About Village"),

    aboutSubtitle: optionalText(300),

    galleryImages: z
      .array(galleryItemSchema)
      .optional()
      .default([]),

    contactPersons: z
      .array(contactPersonSchema)
      .optional()
      .default([]),

    sortOrder: z
      .coerce
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

    heroImage: optionalObjectId,

    overview: z.string().optional(),

    aboutHeading: optionalTextUpdate(200),

    aboutSubtitle: optionalTextUpdate(300),

    galleryImages: z
      .array(galleryItemUpdateSchema)
      .optional(),

    contactPersons: z
      .array(contactPersonUpdateSchema)
      .optional(),

    sortOrder: z
      .coerce
      .number()
      .int()
      .nonnegative()
      .optional(),

    isPublished: z
      .boolean()
      .optional(),
  }),
});
