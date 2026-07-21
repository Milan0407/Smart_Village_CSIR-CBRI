import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import * as homeService from "./home.service.js";

export const getHomeStats = asyncHandler(
  async (req, res) => {
    const stats = await homeService.getHomeStats();

    return res.status(200).json(
      new ApiResponse(
        200,
        stats,
        "Home statistics fetched successfully."
      )
    );
  }
);
