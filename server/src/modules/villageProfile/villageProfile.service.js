import VillageProfile from "../../models/VillageProfile.model.js";
import Village from "../../models/Village.model.js";
import ApiError from "../../utils/ApiError.js";

/*
=====================================
Create Village Profile
=====================================
*/

export const createVillageProfile = async (
  payload,
  adminId
) => {
  // Check if village exists
  const village = await Village.findById(payload.village);

  if (!village) {
    throw new ApiError(404, "Village not found.");
  }

  // One profile per village
  const existingProfile = await VillageProfile.findOne({
    village: payload.village,
  });

  if (existingProfile) {
    throw new ApiError(
      409,
      "Profile already exists for this village."
    );
  }

  const profile = await VillageProfile.create({
    ...payload,
    createdBy: adminId,
  });

  return profile.populate([
    {
      path: "village",
      populate: {
        path: "state",
      },
    },
    {
      path: "heroImage",
    },
    {
      path: "galleryImages",
    },
  ]);
};

/*
=====================================
Get All Profiles (Admin)
=====================================
*/

export const getAllVillageProfiles =
  async () => {
    return VillageProfile.find()
      .populate({
        path: "village",
        populate: {
          path: "state",
        },
      })
      .populate("heroImage")
      .populate("galleryImages")
      .sort({
        sortOrder: 1,
        createdAt: 1,
      });
  };


  /*
=====================================
Get Village Profile By ID
=====================================
*/

export const getVillageProfile = async (id) => {
  const profile = await VillageProfile.findById(id)
    .populate({
      path: "village",
      populate: {
        path: "state",
      },
    })
    .populate("heroImage")
    .populate("galleryImages");

  if (!profile) {
    throw new ApiError(
      404,
      "Village profile not found."
    );
  }

  return profile;
};


/*
=====================================
Get Profile By Village ID
=====================================
*/

export const getVillageProfileByVillage =
  async (villageId) => {
    const profile =
      await VillageProfile.findOne({
        village: villageId,
        isPublished: true,
      })
        .populate({
          path: "village",
          populate: {
            path: "state",
          },
        })
        .populate("heroImage")
        .populate("galleryImages");

    if (!profile) {
      throw new ApiError(
        404,
        "Village profile not found."
      );
    }

    return profile;
  };

/*
=====================================
Get Profile By Village Slug
=====================================
*/

export const getVillageProfileBySlug =
  async (slug) => {
    const village = await Village.findOne({
      slug,
      isPublished: true,
      status: "ACTIVE",
      isActive: true,
    });

    if (!village) {
      throw new ApiError(
        404,
        "Village not found."
      );
    }

    return getVillageProfileByVillage(
      village._id
    );
  };

/*
=====================================
Update Village Profile
=====================================
*/

export const updateVillageProfile =
  async (
    id,
    payload,
    adminId
  ) => {
    const profile =
      await VillageProfile.findById(id);

    if (!profile) {
      throw new ApiError(
        404,
        "Village profile not found."
      );
    }

    // Prevent assigning the same village to two profiles
    if (
      payload.village &&
      payload.village.toString() !==
        profile.village.toString()
    ) {
      const duplicate =
        await VillageProfile.findOne({
          village: payload.village,
          _id: { $ne: id },
        });

      if (duplicate) {
        throw new ApiError(
          409,
          "Another profile already exists for this village."
        );
      }

      const village =
        await Village.findById(
          payload.village
        );

      if (!village) {
        throw new ApiError(
          404,
          "Village not found."
        );
      }
    }

    Object.assign(profile, payload);

    profile.updatedBy = adminId;

    await profile.save();

    return profile.populate([
      {
        path: "village",
        populate: {
          path: "state",
        },
      },
      {
        path: "heroImage",
      },
      {
        path: "galleryImages",
      },
    ]);
  };

/*
=====================================
Delete Village Profile
=====================================
*/

export const deleteVillageProfile =
  async (id) => {
    const profile =
      await VillageProfile.findById(id);

    if (!profile) {
      throw new ApiError(
        404,
        "Village profile not found."
      );
    }

    await profile.deleteOne();

    return true;
  };