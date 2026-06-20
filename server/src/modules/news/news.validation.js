import Joi from "joi";

export const createNewsSchema =
  Joi.object({
    title: Joi.string()
      .required(),

    slug: Joi.string()
      .required(),

    summary: Joi.string()
      .allow(""),

    content: Joi.string()
      .allow(""),

    featuredImage:
      Joi.string()
        .allow(
          "",
          null
        ),

    category:
      Joi.string()
        .valid(
          "GENERAL",
          "EVENT",
          "ANNOUNCEMENT",
          "SUCCESS_STORY",
          "POLICY"
        ),

    status:
      Joi.string()
        .valid(
          "DRAFT",
          "PUBLISHED",
          "ARCHIVED"
        ),

    isFeatured:
      Joi.boolean(),
  });