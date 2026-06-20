import Village from "../../models/Village.model.js";
import ApiError from "../../utils/ApiError.js";

export const createVillage = async (
  payload,
  adminId
) => {
  const existingVillage =
    await Village.findOne({
      slug: payload.slug,
    });

  if (existingVillage) {
    throw new ApiError(
      409,
      "Village slug already exists"
    );
  }

  return Village.create({
    ...payload,
    createdBy: adminId,
  });
};

export const getAllVillages =
  async () => {
    return Village.find({
      isActive: true,
    })
      .sort({
        createdAt: -1,
      })
      .lean();
  };

export const getVillageBySlug =
  async (slug) => {
    const village =
      await Village.findOne({
        slug,
        isActive: true,
      }).lean();

    if (!village) {
      throw new ApiError(
        404,
        "Village not found"
      );
    }

    return village;
  };

export const updateVillage =
  async (id, payload) => {
    const village =
      await Village.findByIdAndUpdate(
        id,
        payload,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!village) {
      throw new ApiError(
        404,
        "Village not found"
      );
    }

    return village;
  };

export const deleteVillage =
  async (id) => {
    const village =
      await Village.findByIdAndUpdate(
        id,
        {
          isActive: false,
        },
        {
          new: true,
        }
      );

    if (!village) {
      throw new ApiError(
        404,
        "Village not found"
      );
    }

    return village;
};
