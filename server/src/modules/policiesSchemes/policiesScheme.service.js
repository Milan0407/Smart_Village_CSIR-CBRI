import PoliciesScheme from "./PoliciesScheme.model.js";
import Village from "../../models/Village.model.js";
import ApiError from "../../utils/ApiError.js";

const findSchemeOrThrow = async (id) => {
  const scheme = await PoliciesScheme.findById(id);

  if (!scheme) {
    throw new ApiError(
      404,
      "Policy or Scheme not found."
    );
  }

  return scheme;
};

export const createPoliciesScheme = async (
  payload,
  adminId
) => {
  const village = await Village.findById(
    payload.village
  );

  if (!village) {
    throw new ApiError(404, "Village not found.");
  }

  const scheme = await PoliciesScheme.create({
    ...payload,
    createdBy: adminId,
    updatedBy: adminId,
  });

  return scheme.populate(
    "village",
    "name slug district state"
  );
};

export const updatePoliciesScheme = async (
  id,
  payload,
  adminId
) => {
  if (payload.village) {
    const village = await Village.findById(
      payload.village
    );

    if (!village) {
      throw new ApiError(404, "Village not found.");
    }
  }

  const scheme =
    await PoliciesScheme.findByIdAndUpdate(
      id,
      {
        ...payload,
        updatedBy: adminId,
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate(
      "village",
      "name slug district state"
    );

  if (!scheme) {
    throw new ApiError(
      404,
      "Policy or Scheme not found."
    );
  }

  return scheme;
};

export const deletePoliciesScheme = async (id) => {
  const scheme = await findSchemeOrThrow(id);

  await scheme.deleteOne();

  return true;
};

export const getPoliciesSchemeById =
  async (id) => {
    const scheme = await PoliciesScheme.findById(id)
      .populate(
        "village",
        "name slug district state"
      )
      .populate("createdBy", "username email")
      .populate("updatedBy", "username email");

    if (!scheme) {
      throw new ApiError(
        404,
        "Policy or Scheme not found."
      );
    }

    return scheme;
  };

export const getPoliciesSchemeBySlug =
  async (slug) => {
    const scheme =
      await PoliciesScheme.findOne({
        slug,
        published: true,
      })
        .populate(
          "village",
          "name slug district state"
        )
        .lean();

    if (!scheme) {
      throw new ApiError(
        404,
        "Policy or Scheme not found."
      );
    }

    return scheme;
  };

export const getPoliciesSchemesByVillage =
  async (villageSlug) => {
    const village =
      await Village.findOne({
        slug: villageSlug,
      });

    if (!village) {
      throw new ApiError(404, "Village not found.");
    }

    const schemes = await PoliciesScheme.find({
      village: village._id,
      published: true,
    })
      .sort({
        displayOrder: 1,
        createdAt: -1,
      })
      .lean();

    return {
      centralSchemes: schemes.filter(
        (scheme) => scheme.category === "CENTRAL"
      ),
      stateSchemes: schemes.filter(
        (scheme) => scheme.category === "STATE"
      ),
    };
  };

export const getAllPoliciesSchemes =
  async (query = {}) => {
    const {
      page = 1,
      limit = 10,
      search,
      village,
      category,
      published,
      sortBy = "displayOrder",
      sortOrder = "asc",
    } = query;

    const filter = {};

    if (search) {
      filter.$or = [
        {
          schemeName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          shortDescription: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    if (village) filter.village = village;
    if (category) filter.category = category;

    if (published !== undefined) {
      filter.published = published === "true";
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const [schemes, total] = await Promise.all([
      PoliciesScheme.find(filter)
        .populate("village", "name slug")
        .sort({
          [sortBy]: sortOrder === "desc" ? -1 : 1,
        })
        .skip(skip)
        .limit(limitNumber)
        .lean(),

      PoliciesScheme.countDocuments(filter),
    ]);

    return {
      data: schemes,

      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
      },
    };
  };
