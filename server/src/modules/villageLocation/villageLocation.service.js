import VillageLocation from "./VillageLocation.model.js";
import Village from "../../models/Village.model.js";
import ApiError from "../../utils/ApiError.js";

const findVillageLocationOrThrow = async (id) => {
  const location =
    await VillageLocation.findById(id);

  if (!location) {
    throw new ApiError(
      404,
      "Village Location not found."
    );
  }

  return location;
};


const findFacilityOrThrow = (
  location,
  facilityId
) => {
  const facility =
    location.nearbyFacilities.id(
      facilityId
    );

  if (!facility) {
    throw new ApiError(
      404,
      "Nearby facility not found."
    );
  }

  return facility;
};


export const createVillageLocation =
  async (payload, adminId) => {

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

    const existing =
      await VillageLocation.findOne({
        village: payload.village,
      });

    if (existing) {
      throw new ApiError(
        409,
        "Village location already exists."
      );
    }

    return VillageLocation.create({
      ...payload,
      createdBy: adminId,
    });
};


export const updateVillageLocation =
  async (
    id,
    payload,
    adminId
  ) => {

    const location =
      await findVillageLocationOrThrow(id);

    Object.assign(location, payload);

    location.updatedBy = adminId;

    await location.save();

    return location;
};


export const deleteVillageLocation =
  async (id) => {

    const location =
      await findVillageLocationOrThrow(id);

    await location.deleteOne();

    return true;
};


export const getVillageLocationById =
  async (id) => {

    return VillageLocation.findById(id)
      .populate(
        "village",
        "name slug district block gramPanchayat state location coverImage"
      );
};

export const getVillageLocationByVillage =
  async (slug) => {

    const village =
      await Village.findOne({
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

    return VillageLocation.findOne({
      village: village._id,
      isPublished: true,
    }).populate(
      "village",
      "name slug district block gramPanchayat state location coverImage"
    );
};

export const getAllVillageLocations =
  async () => {

    return VillageLocation.find()
      .populate(
        "village",
        "name slug"
      )
      .sort({
        createdAt: -1,
      });
};

export const togglePublishStatus =
  async (
    id,
    adminId
  ) => {

    const location =
      await findVillageLocationOrThrow(id);

    location.isPublished =
      !location.isPublished;

    location.updatedBy = adminId;

    await location.save();

    return location;
};

export const createFacility =
  async (
    locationId,
    payload,
    adminId
  ) => {

    const location =
      await findVillageLocationOrThrow(
        locationId
      );

    location.nearbyFacilities.push(
      payload
    );

    location.updatedBy = adminId;

    await location.save();

    return location;
};

export const updateFacility =
  async (
    locationId,
    facilityId,
    payload,
    adminId
  ) => {

    const location =
      await findVillageLocationOrThrow(
        locationId
      );

    const facility =
      findFacilityOrThrow(
        location,
        facilityId
      );

    Object.assign(
      facility,
      payload
    );

    location.updatedBy = adminId;

    await location.save();

    return location;
};

export const deleteFacility =
  async (
    locationId,
    facilityId,
    adminId
  ) => {

    const location =
      await findVillageLocationOrThrow(
        locationId
      );

    const facility =
      findFacilityOrThrow(
        location,
        facilityId
      );

    facility.deleteOne();

    location.updatedBy = adminId;

    await location.save();

    return location;
};