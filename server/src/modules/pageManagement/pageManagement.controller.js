import asyncHandler
  from "../../utils/asyncHandler.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

import * as pageService
  from "./pageManagement.service.js";

export const getPages =
  asyncHandler(
    async (req, res) => {
      const pages =
        await pageService.getAllPages();

      return res.status(200).json(
        new ApiResponse(
          200,
          pages,
          "Pages fetched successfully"
        )
      );
    }
  );

export const getPage =
  asyncHandler(
    async (req, res) => {
      const page =
        await pageService.getPageById(
          req.params.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          page,
          "Page fetched successfully"
        )
      );
    }
  );

export const updatePage =
  asyncHandler(
    async (req, res) => {
      const page =
        await pageService.updatePage(
          req.params.id,
          req.body
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          page,
          "Page updated successfully"
        )
      );
    }
  );