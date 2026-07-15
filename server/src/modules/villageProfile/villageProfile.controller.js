import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import * as villageProfileService from "./villageProfile.service.js";

/*
=====================================
Create Village Profile
=====================================
*/

export const createVillageProfile = asyncHandler(
  async (req, res) => {
    const profile =
      await villageProfileService.createVillageProfile(
        req.body,
        req.admin._id
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        profile,
        "Village profile created successfully."
      )
    );
  }
);

/*
=====================================
Get All Village Profiles (Admin)
=====================================
*/

export const getAllVillageProfiles = asyncHandler(
  async (req, res) => {
    const profiles =
      await villageProfileService.getAllVillageProfiles();

    return res.json(
      new ApiResponse(
        200,
        profiles,
        "Village profiles fetched successfully."
      )
    );
  }
);


/*
=====================================
Get Village Profile By ID
=====================================
*/

export const getVillageProfile =
  asyncHandler(async (req, res) => {
    const profile =
      await villageProfileService.getVillageProfile(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        profile,
        "Village profile fetched successfully."
      )
    );
  });

/*
=====================================
Get Village Profile By Village ID
=====================================
*/

export const getVillageProfileByVillage =
  asyncHandler(async (req, res) => {
    const profile =
      await villageProfileService.getVillageProfileByVillage(
        req.params.villageId
      );

    return res.json(
      new ApiResponse(
        200,
        profile,
        "Village profile fetched successfully."
      )
    );
  });

/*
=====================================
Get Village Profile By Village Slug
=====================================
*/

export const getVillageProfileBySlug =
  asyncHandler(async (req, res) => {
    const profile =
      await villageProfileService.getVillageProfileBySlug(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        profile,
        "Village profile fetched successfully."
      )
    );
  });

/*
=====================================
Update Village Profile
=====================================
*/

export const updateVillageProfile =
  asyncHandler(async (req, res) => {
    const profile =
      await villageProfileService.updateVillageProfile(
        req.params.id,
        req.body,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        profile,
        "Village profile updated successfully."
      )
    );
  });

/*
=====================================
Delete Village Profile
=====================================
*/

export const deleteVillageProfile =
  asyncHandler(async (req, res) => {
    await villageProfileService.deleteVillageProfile(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Village profile deleted successfully."
      )
    );
  });