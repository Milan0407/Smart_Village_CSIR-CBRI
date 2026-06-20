import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedParticipatingLabsSections =
  async () => {
    try {
      await connectDB();

      const page =
        await Page.findOne({
          slug:
            "participating-labs",
        });

      if (!page) {
        throw new Error(
          "Participating Labs page not found"
        );
      }

      await PageSection.deleteMany({
        pageId: page._id,
      });

      const sections = [
        {
          pageId: page._id,
          sectionType:
            "PARTICIPATING_LABS_HERO",
          title:
            "Participating Laboratories",
          order: 1,
        },

        {
          pageId: page._id,
          sectionType:
            "PARTICIPATING_LABS_OVERVIEW",
          title:
            "Overview",
          order: 2,
        },

        {
          pageId: page._id,
          sectionType:
            "PARTICIPATING_LABS_LIST",
          title:
            "Laboratory List",
          order: 3,
        },

        {
          pageId: page._id,
          sectionType:
            "PARTICIPATING_LABS_RESEARCH",
          title:
            "Research Areas",
          order: 4,
        },

        {
          pageId: page._id,
          sectionType:
            "PARTICIPATING_LABS_CONTRIBUTIONS",
          title:
            "Contributions",
          order: 5,
        },

        {
          pageId: page._id,
          sectionType:
            "PARTICIPATING_LABS_CONTACT",
          title:
            "Contact Information",
          order: 6,
        },
      ];

      await PageSection.insertMany(
        sections
      );

      console.log(
        "✅ Participating Labs Sections Seeded"
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedParticipatingLabsSections();