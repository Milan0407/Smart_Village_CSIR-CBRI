import SiteSettings from "../../models/SiteSettings.model.js";

/**
 * Get Site Settings
 */
export const getSiteSettings = async () => {
  const settings = await SiteSettings.findOne();

  return settings;
};

/**
 * Update Site Settings
 */
export const updateSiteSettings = async (
  payload,
  adminId
) => {
  let settings = await SiteSettings.findOne();

  if (!settings) {
    throw new Error(
      "Site settings not found. Please run the seedSiteSettings script first."
    );
  }

  Object.assign(settings, payload);

  settings.updatedBy = adminId;

  await settings.save();

  return settings;
};