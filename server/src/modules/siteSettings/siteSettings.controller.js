import * as siteSettingsService from "./siteSettings.service.js";

import ApiResponse from "../../utils/ApiResponse.js";

/**
 * Get Site Settings
 */
export const getSiteSettings = async (req, res) => {
  const settings = await siteSettingsService.getSiteSettings();

  return res.json(
    new ApiResponse(
      200,
      settings,
      "Site settings fetched successfully."
    )
  );
};

/**
 * Update Site Settings
 */
export const updateSiteSettings = async (req, res) => {
  const settings =
    await siteSettingsService.updateSiteSettings(
      req.body,
      req.admin?._id
    );

  return res.json(
    new ApiResponse(
      200,
      settings,
      "Site settings updated successfully."
    )
  );
};