import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import * as villageService from "./village.service.js";

/*
=====================================
Create Village
=====================================
*/

export const createVillage = asyncHandler(
  async (req, res) => {
    const village =
      await villageService.createVillage(
        req.body,
        req.admin._id
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        village,
        "Village created successfully."
      )
    );
  }
);

/*
=====================================
Get All Villages (Admin)
=====================================
*/

export const getAllVillages = asyncHandler(
  async (req, res) => {
    const villages =
      await villageService.getAllVillages();

    return res.json(
      new ApiResponse(
        200,
        villages,
        "Villages fetched successfully."
      )
    );
  }
);

/*
=====================================
Get Published Villages (Public)
=====================================
*/

export const getPublishedVillages =
  asyncHandler(async (req, res) => {
    const villages =
      await villageService.getPublishedVillages();

    return res.json(
      new ApiResponse(
        200,
        villages,
        "Published villages fetched successfully."
      )
    );
  });

/*
=====================================
Get Village By Slug
=====================================
*/

export const getVillageBySlug =
  asyncHandler(async (req, res) => {
    const village =
      await villageService.getVillageBySlug(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        village,
        "Village fetched successfully."
      )
    );
  });


  export const getVillage = asyncHandler(
  async (req, res) => {
    const village =
      await villageService.getVillage(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        village,
        "Village fetched successfully."
      )
    );
  }
);

/*
=====================================
Update Village
=====================================
*/

export const updateVillage =
  asyncHandler(async (req, res) => {
    const village =
      await villageService.updateVillage(
        req.params.id,
        req.body,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        village,
        "Village updated successfully."
      )
    );
  });

/*
=====================================
Archive Village
=====================================
*/

export const deleteVillage =
  asyncHandler(async (req, res) => {
    await villageService.deleteVillage(
      req.params.id,
      req.admin._id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Village archived successfully."
      )
    );
  });

  /*
=====================================
Get Published Villages By State
=====================================
*/

export const getVillagesByState =
  asyncHandler(async (req, res) => {
    const villages =
      await villageService.getVillagesByState(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        villages,
        "Villages fetched successfully."
      )
    );
  });