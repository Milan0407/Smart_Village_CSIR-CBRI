import { connectDB }
  from "../config/database.js";

import SuccessStory
  from "../models/SuccessStory.model.js";

const seedSuccessStories =
  async () => {
    try {
      await connectDB();

      await SuccessStory.deleteMany(
        {}
      );

      await SuccessStory.insertMany([
        {
          title:
            "Solar Lighting Improved Village Life",

          slug:
            "solar-lighting-improved-village-life",

          villageName:
            "Village A",

          summary:
            "Installation of solar lighting enhanced safety and productivity.",

          story:
            "The introduction of solar-powered street lighting significantly improved night-time mobility, education opportunities, and public safety.",

          impact:
            "120 households benefited",

          beneficiaries:
            450,

          isFeatured:
            true,

          status:
            "PUBLISHED",

          publishedAt:
            new Date(),
        },

        {
          title:
            "Smart Water Management Initiative",

          slug:
            "smart-water-management-initiative",

          villageName:
            "Village B",

          summary:
            "Technology-driven water management improved conservation.",

          story:
            "Sensors and monitoring systems were introduced to optimize water usage and reduce wastage.",

          impact:
            "40% reduction in water loss",

          beneficiaries:
            600,

          isFeatured:
            false,

          status:
            "PUBLISHED",

          publishedAt:
            new Date(),
        },

        {
          title:
            "Digital Literacy Program Success",

          slug:
            "digital-literacy-program-success",

          villageName:
            "Village C",

          summary:
            "Residents gained access to digital skills and online services.",

          story:
            "Training programs enabled villagers to access government services and educational resources online.",

          impact:
            "300 villagers trained",

          beneficiaries:
            300,

          isFeatured:
            false,

          status:
            "PUBLISHED",

          publishedAt:
            new Date(),
        },
      ]);

      console.log(
        "✅ Success Stories Seeded"
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedSuccessStories();