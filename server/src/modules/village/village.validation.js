import Joi from "joi";

export const createVillageSchema =
  Joi.object({
    name: Joi.object({
      en: Joi.string()
        .required(),

      regional: Joi.string()
        .allow(""),
    }).required(),

    slug: Joi.string()
      .required(),

    district: Joi.string()
      .required(),

    state: Joi.string()
      .required(),

    pinCode: Joi.string(),

    population: Joi.number(),

    coverImageUrl:
      Joi.string(),

    languages: Joi.array()
      .items(Joi.string()),
  });