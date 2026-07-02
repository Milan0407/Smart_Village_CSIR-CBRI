import { z } from "zod";

export const updateSiteSettingsSchema = z.object({
  body: z.object({
    siteName: z
      .string()
      .trim()
      .min(2, "Site name is required.")
      .max(100, "Site name cannot exceed 100 characters."),

    organizationName: z
      .string()
      .trim()
      .min(2, "Organization name is required.")
      .max(
        150,
        "Organization name cannot exceed 150 characters."
      ),

    footerDescription: z
      .string()
      .trim()
      .max(
        500,
        "Footer description cannot exceed 500 characters."
      )
      .optional()
      .or(z.literal("")),

    contactEmail: z
      .string()
      .trim()
      .email("Please provide a valid email address.")
      .optional()
      .or(z.literal("")),

    contactPhone: z
      .string()
      .trim()
      .max(30, "Phone number cannot exceed 30 characters.")
      .optional()
      .or(z.literal("")),

    address: z
      .string()
      .trim()
      .max(300, "Address cannot exceed 300 characters.")
      .optional()
      .or(z.literal("")),

    website: z
      .string()
      .trim()
      .url("Please provide a valid website URL.")
      .optional()
      .or(z.literal("")),

    copyrightText: z
      .string()
      .trim()
      .max(
        300,
        "Copyright text cannot exceed 300 characters."
      )
      .optional()
      .or(z.literal("")),

    socialLinks: z
      .object({
        facebook: z.string().trim().optional().or(z.literal("")),
        twitter: z.string().trim().optional().or(z.literal("")),
        linkedin: z.string().trim().optional().or(z.literal("")),
        youtube: z.string().trim().optional().or(z.literal("")),
        instagram: z.string().trim().optional().or(z.literal("")),
      })
      .optional(),
  }),
});