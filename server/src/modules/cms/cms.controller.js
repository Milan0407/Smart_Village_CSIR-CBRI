import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  getNavigation,
} from "./cms.service.js";

import {
  getPageBySlug,
} from "./cms.service.js";

export const navigation =
  asyncHandler(
    async (req, res) => {
      const items =
        await getNavigation();

      return res.status(200).json(
        new ApiResponse(
          200,
          items,
          "Navigation fetched successfully"
        )
      );
    }
  );
  
export const getPage =
  asyncHandler(
    async (req, res) => {
      const data =
        await getPageBySlug(
          req.params.slug
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          data,
          "Page fetched successfully"
        )
      );
    }
  );