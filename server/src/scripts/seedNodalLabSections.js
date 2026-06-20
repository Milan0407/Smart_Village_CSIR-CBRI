import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedNodalLabSections =
  async () => {
    try {
      await connectDB();

      const page =
        await Page.findOne({
          slug: "nodal-lab",
        });

      if (!page) {
        throw new Error(
          "Nodal Lab page not found"
        );
      }

      await PageSection.deleteMany({
        pageId: page._id,
      });

      const sections = [
        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_HERO",
          title:
            "Nodal Laboratory",
          order: 1,
        },

        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_OVERVIEW",
          title:
            "About Nodal Laboratory",
          order: 2,
        },

        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_RESPONSIBILITIES",
          title:
            "Responsibilities",
          order: 3,
        },

        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_RESEARCH_AREAS",
          title:
            "Research Areas",
          order: 4,
        },

        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_PROJECTS",
          title:
            "Projects",
          order: 5,
        },

        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_ACHIEVEMENTS",
          title:
            "Achievements",
          order: 6,
        },

        {
          pageId: page._id,
          sectionType:
            "NODAL_LAB_CONTACT",
          title:
            "Contact Information",
          order: 7,
        },
      ];

      await PageSection.insertMany(
        sections
      );

      console.log(
        "✅ Nodal Lab Sections Seeded"
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedNodalLabSections();