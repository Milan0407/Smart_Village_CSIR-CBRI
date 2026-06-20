import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedDGDeskSections =
  async () => {
    try {
      await connectDB();

      const page =
        await Page.findOne({
          slug: "dg-desk",
        });

      if (!page) {
        throw new Error(
          "DG Desk page not found"
        );
      }

      await PageSection.deleteMany({
        pageId: page._id,
      });

      await PageSection.insertMany([
        {
          pageId: page._id,
          sectionType:
            "PROFILE_HERO",
          title: "Hero",
          order: 1,
        },

        {
          pageId: page._id,
          sectionType:
            "PROFILE_MESSAGE",
          title: "Message",
          order: 2,
        },

        {
          pageId: page._id,
          sectionType:
            "PROFILE_BIO",
          title: "Biography",
          order: 3,
        },
      ]);

      console.log(
        "✅ DG Desk Sections Seeded"
      );

      process.exit(0);

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

seedDGDeskSections();