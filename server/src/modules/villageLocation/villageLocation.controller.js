import asyncHandler from "../../utils/asyncHandler.js";

import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  createVillageLocation,
  updateVillageLocation,
  deleteVillageLocation,
  getVillageLocationById,
  getVillageLocationByVillage,
  getAllVillageLocations,
  togglePublishStatus,
  createFacility,
  updateFacility,
  deleteFacility,
} from "./villageLocation.service.js";

export const create = asyncHandler(
  async (req, res) => {
    const location =
      await createVillageLocation(
        req.body,
        req.admin._id
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        location,
        "Village Location created successfully."
      )
    );
  }
);

export const update = asyncHandler(
  async (req, res) => {
    const location =
      await updateVillageLocation(
        req.params.id,
        req.body,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        location,
        "Village Location updated successfully."
      )
    );
  }
);

export const remove = asyncHandler(
  async (req, res) => {
    await deleteVillageLocation(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Village Location deleted successfully."
      )
    );
  }
);

export const getById = asyncHandler(
  async (req, res) => {
    const location =
      await getVillageLocationById(
        req.params.id
      );

    if (!location) {
      throw new ApiError(
        404,
        "Village Location not found."
      );
    }

    return res.json(
      new ApiResponse(
        200,
        location,
        "Village Location fetched successfully."
      )
    );
  }
);

export const getByVillage =
  asyncHandler(async (req, res) => {
    const location =
      await getVillageLocationByVillage(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        location,
        "Village Location fetched successfully."
      )
    );
  });

  export const getAll = asyncHandler(
  async (req, res) => {
    const locations =
      await getAllVillageLocations();

    return res.json(
      new ApiResponse(
        200,
        locations,
        "Village Locations fetched successfully."
      )
    );
  }
);

export const togglePublish =
  asyncHandler(async (req, res) => {
    const location =
      await togglePublishStatus(
        req.params.id,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        location,
        "Publish status updated successfully."
      )
    );
  });

  export const addFacility = asyncHandler(
  async (req, res) => {
    const location =
      await createFacility(
        req.params.id,
        req.body,
        req.admin._id
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        location,
        "Nearby facility created successfully."
      )
    );
  }
);

export const editFacility = asyncHandler(
  async (req, res) => {
    const location =
      await updateFacility(
        req.params.id,
        req.params.facilityId,
        req.body,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        location,
        "Nearby facility updated successfully."
      )
    );
  }
);

export const removeFacility = asyncHandler(
  async (req, res) => {
    const location =
      await deleteFacility(
        req.params.id,
        req.params.facilityId,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        location,
        "Nearby facility deleted successfully."
      )
    );
  }
);