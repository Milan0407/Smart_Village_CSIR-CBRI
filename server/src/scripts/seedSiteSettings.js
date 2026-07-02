import { connectDB } from "../config/database.js";
import SiteSettings from "../models/SiteSettings.model.js";

const seedSiteSettings = async () => {
  try {
    await connectDB();

    const existingSettings = await SiteSettings.findOne();

    if (existingSettings) {
      console.log("ℹ️ Site Settings already exist.");
      process.exit(0);
    }

    await SiteSettings.create({
      siteName: "Smart Village Management Portal",

      organizationName:
        "CSIR - Central Building Research Institute (CSIR-CBRI)",

      logoUrl: null,

      faviconUrl: null,

      footerDescription:
        "Empowering rural communities through sustainable technologies, innovation, and scientific research under the CSIR Smart Village initiative.",

      contactEmail: "smartvillage@cbri.res.in",

      contactPhone: "+91 XXXXX XXXXX",

      address:
        "CSIR–Central Building Research Institute, Roorkee, Uttarakhand, India",

      website: "https://cbri.res.in",

      socialLinks: {
        facebook: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        instagram: "",
      },

      copyrightText: `© ${new Date().getFullYear()} CSIR-CBRI. All Rights Reserved.`,
    });

    console.log("✅ Site Settings seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed Site Settings");
    console.error(error);
    process.exit(1);
  }
};

seedSiteSettings();