import { z } from "zod";
import { FACILITY_CATEGORIES } from "./VillageLocation.model.js";

/*
=====================================================
Common Schemas
=====================================================
*/

const objectId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

const geoPointSchema = z.object({
  type: z.literal("Point").default("Point"),

  coordinates: z.tuple([
    z
      .number()
      .min(-180, "Invalid longitude")
      .max(180, "Invalid longitude"),

    z
      .number()
      .min(-90, "Invalid latitude")
      .max(90, "Invalid latitude"),
  ]),
});

const facilityCategorySchema = z.enum(
  FACILITY_CATEGORIES
);

/*
=====================================================
Nearby Facility
=====================================================
*/

const nearbyFacilitySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Facility name is required.")
    .max(150),

  category: facilityCategorySchema.optional(),

  description: z
    .string()
    .trim()
    .max(500)
    .optional(),

  address: z
    .string()
    .trim()
    .max(300)
    .optional(),

  contactNumber: z
    .string()
    .trim()
    .max(20)
    .optional(),

  location: geoPointSchema,

  displayOrder: z
    .coerce
    .number()
    .optional(),
});

/*
=====================================================
Create Village Location
=====================================================
*/

export const createVillageLocationSchema =
  z.object({
    body: z.object({
      village: objectId,

      overview: z
        .string()
        .trim()
        .max(1000)
        .optional(),

      zoomLevel: z
        .coerce
        .number()
        .min(1)
        .max(22)
        .optional(),

      googleMapsLink: z
        .string()
        .trim()
        .url("Invalid Google Maps URL.")
        .or(z.literal(""))
        .optional(),

      nearbyFacilities: z
        .array(nearbyFacilitySchema)
        .optional(),

      isPublished: z
        .boolean()
        .optional(),
    }),
  });

/*
=====================================================
Update Village Location
=====================================================
*/

export const updateVillageLocationSchema =
  z.object({
    params: z.object({
      id: objectId,
    }),

    body:
      createVillageLocationSchema.shape.body.partial(),
  });

/*
=====================================================
Get Village Location By ID
=====================================================
*/

export const villageLocationIdSchema =
  z.object({
    params: z.object({
      id: objectId,
    }),
  });

/*
=====================================================
Get Village Location By Village Slug
=====================================================
*/

export const villageSlugSchema =
  z.object({
    params: z.object({
      slug: z.string().trim(),
    }),
  });

/*
=====================================================
Nearby Facility Params
=====================================================
*/

export const facilityParamsSchema =
  z.object({
    params: z.object({
      id: objectId,
      facilityId: objectId,
    }),
  });

/*
=====================================================
Create Facility
=====================================================
*/

export const createFacilitySchema =
  z.object({
    params: z.object({
      id: objectId,
    }),

    body: nearbyFacilitySchema,
  });

/*
=====================================================
Update Facility
=====================================================
*/

export const updateFacilitySchema =
  z.object({
    params: z.object({
      id: objectId,
      facilityId: objectId,
    }),

    body: nearbyFacilitySchema.partial(),
  });