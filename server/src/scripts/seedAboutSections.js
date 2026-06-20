import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedAboutSections =
  async () => {
    try {
      await connectDB();

      const aboutPage =
        await Page.findOne({
          slug: "about",
        });

      if (!aboutPage) {
        throw new Error(
          "About page not found"
        );
      }

      await PageSection.deleteMany({
        pageId: aboutPage._id,
      });

const sections = [


  {
    pageId: aboutPage._id,
    sectionType: "ABOUT_GALLERY",
    title: "Gallery",
    order: 1,
  },

  {
    pageId: aboutPage._id,
    sectionType: "ABOUT_OVERVIEW",
    title: "Overview",
    order: 2,
  },


  {
    pageId: aboutPage._id,
    sectionType: "ABOUT_HISTORY",
    title: "History",
    order: 3,
  },

  {
    pageId: aboutPage._id,
    sectionType: "ABOUT_QUICK_LINKS",
    title: "Quick Links",
    order: 4  ,
  },
];

      await PageSection.insertMany(
        sections
      );

      console.log(
        "✅ About Sections Seeded"
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedAboutSections();