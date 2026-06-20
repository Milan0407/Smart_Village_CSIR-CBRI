import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import * as villageService from "./village.service.js";

export const createVillage =
  asyncHandler(
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
          "Village created successfully"
        )
      );
    }
  );

export const getAllVillages =
  asyncHandler(
    async (req, res) => {
      const villages =
        await villageService.getAllVillages();

      return res.json(
        new ApiResponse(
          200,
          villages,
          "Villages fetched successfully"
        )
      );
    }
  );

export const getVillageBySlug =
  asyncHandler(
    async (req, res) => {
      const village =
        await villageService.getVillageBySlug(
          req.params.slug
        );

      return res.json(
        new ApiResponse(
          200,
          village,
          "Village fetched successfully"
        )
      );
    }
  );

export const updateVillage =
  asyncHandler(
    async (req, res) => {
      const village =
        await villageService.updateVillage(
          req.params.id,
          req.body
        );

      return res.json(
        new ApiResponse(
          200,
          village,
          "Village updated successfully"
        )
      );
    }
  );

export const deleteVillage =
  asyncHandler(
    async (req, res) => {
      await villageService.deleteVillage(
        req.params.id
      );

      return res.json(
        new ApiResponse(
          200,
          null,
          "Village deleted successfully"
        )
      );
    }
  );