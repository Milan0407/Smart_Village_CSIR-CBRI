import SuccessStoryVillage
  from "../../models/SuccessStoryVillage.model.js";

import ApiError
  from "../../utils/ApiError.js";

export const getAllVillages =
  async () => {
    return await SuccessStoryVillage
      .find()
      .populate("coverImage")
      .populate("bannerImage")
      .populate("video.media")
      .sort({
        sortOrder: 1,
        createdAt: -1,
      });
  };

export const getPublishedVillages =
  async () => {
    return await SuccessStoryVillage
      .find({ isPublished: true })
      .populate("coverImage")
      .populate("bannerImage")
      .populate("video.media")
      .sort({
        sortOrder: 1,
        createdAt: -1,
      });
  };

export const getVillageById =
  async (id) => {
    const village =
      await SuccessStoryVillage
        .findById(id)
        .populate("coverImage")
        .populate("bannerImage")
        .populate("video.media");

    if (!village) {
      throw new ApiError(
        404,
        "Success story village not found"
      );
    }

    return village;
  };

export const getVillageBySlug =
  async (slug) => {
    const village =
      await SuccessStoryVillage
        .findOne({
          slug,
          isPublished: true,
        })
        .populate("coverImage")
        .populate("bannerImage")
        .populate("video.media");

    if (!village) {
      throw new ApiError(
        404,
        "Success story village not found"
      );
    }

    return village;
  };

export const createVillage =
  async (payload, adminId) => {
    const existing =
      await SuccessStoryVillage.findOne({
        slug: payload.slug,
      });

    if (existing) {
      throw new ApiError(
        400,
        "Village with this slug already exists"
      );
    }

    const village =
      await SuccessStoryVillage.create({
        ...payload,
        createdBy: adminId || null,
        updatedBy: adminId || null,
      });

    return village;
  };

export const updateVillage =
  async (id, payload, adminId) => {
    const village =
      await SuccessStoryVillage.findById(id);

    if (!village) {
      throw new ApiError(
        404,
        "Success story village not found"
      );
    }

    if (
      payload.slug &&
      payload.slug !== village.slug
    ) {
      const existing =
        await SuccessStoryVillage.findOne({
          slug: payload.slug,
          _id: { $ne: id },
        });

      if (existing) {
        throw new ApiError(
          400,
          "Village with this slug already exists"
        );
      }
    }

    Object.assign(village, payload);

    village.updatedBy =
      adminId || village.updatedBy;

    await village.save();

    return village;
  };

export const deleteVillage =
  async (id) => {
    const village =
      await SuccessStoryVillage.findById(id);

    if (!village) {
      throw new ApiError(
        404,
        "Success story village not found"
      );
    }

    await village.deleteOne();

    return true;
  };