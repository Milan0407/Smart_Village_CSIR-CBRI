import Joi from "joi";

export const createSuccessStorySchema =
  Joi.object({
    title: Joi.string()
      .required(),

    slug: Joi.string()
      .required(),

    villageName:
      Joi.string()
        .required(),

        featuredImage:
  Joi.string()
    .allow("", null),

    summary:
      Joi.string()
        .allow(""),

    story:
      Joi.string()
        .allow(""),

    impact:
      Joi.string()
        .allow(""),

    beneficiaries:
      Joi.number(),

    isFeatured:
      Joi.boolean(),
  });