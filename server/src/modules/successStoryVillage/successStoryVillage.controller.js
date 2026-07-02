import * as successStoryVillageService
  from "./successStoryVillage.service.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

export const getAllVillages =
  async (req, res) => {
    const villages =
      await successStoryVillageService.getAllVillages();

    return res.json(
      new ApiResponse(
        200,
        villages,
        "Success story villages fetched successfully"
      )
    );
  };

export const getPublishedVillages =
  async (req, res) => {
    const villages =
      await successStoryVillageService.getPublishedVillages();

    return res.json(
      new ApiResponse(
        200,
        villages,
        "Published success story villages fetched successfully"
      )
    );
  };

export const getVillageById =
  async (req, res) => {
    const village =
      await successStoryVillageService.getVillageById(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        village,
        "Success story village fetched successfully"
      )
    );
  };

export const getVillageBySlug =
  async (req, res) => {
    const village =
      await successStoryVillageService.getVillageBySlug(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        village,
        "Success story village fetched successfully"
      )
    );
  };

export const createVillage =
  async (req, res) => {
    const village =
      await successStoryVillageService.createVillage(
        req.body,
        req.admin?._id
      );

    return res.json(
      new ApiResponse(
        201,
        village,
        "Success story village created successfully"
      )
    );
  };

export const updateVillage =
  async (req, res) => {
    const village =
      await successStoryVillageService.updateVillage(
        req.params.id,
        req.body,
        req.admin?._id
      );

    return res.json(
      new ApiResponse(
        200,
        village,
        "Success story village updated successfully"
      )
    );
  };

export const deleteVillage =
  async (req, res) => {
    await successStoryVillageService.deleteVillage(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Success story village deleted successfully"
      )
    );
  };