import VillageProfile from "../../models/VillageProfile.model.js";
import Village from "../../models/Village.model.js";
import ApiError from "../../utils/ApiError.js";

const allowedProfileFields = [
  "village",
  "heroTitle",
  "heroSubtitle",
  "heroImage",
  "overview",
  "aboutHeading",
  "aboutSubtitle",
  "galleryImages",
  "contactPersons",
  "sortOrder",
  "isPublished",
];

const legacyContactFields = [
  "contactPerson",
  "designation",
  "phone",
  "alternatePhone",
  "email",
  "officeAddress",
  "gramPanchayat",
  "block",
  "district",
  "state",
  "pinCode",
];

const buildLegacyContactPerson = (payload = {}) => {
  const hasLegacyContact = legacyContactFields.some((field) =>
    Boolean(payload[field])
  );

  if (!hasLegacyContact) {
    return null;
  }

  return {
    name: payload.contactPerson || "",
    designation: payload.designation || "",
    phone: payload.phone || "",
    alternatePhone: payload.alternatePhone || "",
    email: payload.email || "",
    officeAddress: payload.officeAddress || "",
    gramPanchayat: payload.gramPanchayat || "",
    block: payload.block || "",
    district: payload.district || "",
    state: payload.state || "",
    pinCode: payload.pinCode || "",
    displayOrder: 0,
  };
};

const sanitizeProfilePayload = (payload = {}) => {
  const cleanPayload = allowedProfileFields.reduce((clean, field) => {
    if (Object.prototype.hasOwnProperty.call(payload, field)) {
      clean[field] = payload[field];
    }

    return clean;
  }, {});

  if (Array.isArray(cleanPayload.galleryImages)) {
    cleanPayload.galleryImages =
      cleanPayload.galleryImages
        .map((item, index) => {
          if (typeof item === "string") {
            return {
              image: item,
              caption: "",
              sortOrder: index,
            };
          }

          return {
            image: item.image,
            caption: item.caption || "",
            sortOrder: Number.isFinite(Number(item.sortOrder))
              ? Number(item.sortOrder)
              : index,
          };
        })
        .filter((item) => item.image);
  }

  if (Array.isArray(cleanPayload.contactPersons)) {
    cleanPayload.contactPersons =
      cleanPayload.contactPersons
        .map((contact, index) => ({
          name: contact.name || "",
          designation: contact.designation || "",
          phone: contact.phone || "",
          alternatePhone: contact.alternatePhone || "",
          email: contact.email || "",
          officeAddress: contact.officeAddress || "",
          gramPanchayat: contact.gramPanchayat || "",
          block: contact.block || "",
          district: contact.district || "",
          state: contact.state || "",
          pinCode: contact.pinCode || "",
          displayOrder: Number.isFinite(Number(contact.displayOrder))
            ? Number(contact.displayOrder)
            : index,
        }))
        .filter((contact) =>
          [
            contact.name,
            contact.designation,
            contact.phone,
            contact.alternatePhone,
            contact.email,
            contact.officeAddress,
          ].some(Boolean)
        );
  } else {
    const legacyContact = buildLegacyContactPerson(payload);

    if (legacyContact) {
      cleanPayload.contactPersons = [legacyContact];
    }
  }

  return cleanPayload;
};

/*
=====================================
Create Village Profile
=====================================
*/

export const createVillageProfile = async (
  payload,
  adminId
) => {
  const cleanPayload = sanitizeProfilePayload(payload);

  // Check if village exists
  const village = await Village.findById(cleanPayload.village);

  if (!village) {
    throw new ApiError(404, "Village not found.");
  }

  // One profile per village
  const existingProfile = await VillageProfile.findOne({
    village: cleanPayload.village,
  });

  if (existingProfile) {
    throw new ApiError(
      409,
      "Profile already exists for this village."
    );
  }

  const profile = await VillageProfile.create({
    ...cleanPayload,
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
      path: "galleryImages.image",
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
      .populate("galleryImages.image")
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
    .populate("galleryImages.image");

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
        .populate("galleryImages.image");

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
    const cleanPayload = sanitizeProfilePayload(payload);
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
      cleanPayload.village &&
      cleanPayload.village.toString() !==
        profile.village.toString()
    ) {
      const duplicate =
        await VillageProfile.findOne({
          village: cleanPayload.village,
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
          cleanPayload.village
        );

      if (!village) {
        throw new ApiError(
          404,
          "Village not found."
        );
      }
    }

    Object.assign(profile, cleanPayload);

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
        path: "galleryImages.image",
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
