import asyncHandler
  from "../../utils/asyncHandler.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

import * as sectionService
  from "./sectionManagement.service.js";

export const getSectionsByPage =
  asyncHandler(
    async (req, res) => {
      const sections =
        await sectionService.getSectionsByPageId(
          req.params.pageId
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          sections,
          "Sections fetched successfully"
        )
      );
    }
  );

export const getSection =
  asyncHandler(
    async (req, res) => {
      const section =
        await sectionService.getSectionById(
          req.params.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          section,
          "Section fetched successfully"
        )
      );
    }
  );

export const updateSection =
  asyncHandler(
    async (req, res) => {
      const section =
        await sectionService.updateSection(
          req.params.id,
          req.body
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          section,
          "Section updated successfully"
        )
      );
    }
  );