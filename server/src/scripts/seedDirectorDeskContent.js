import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedDirectorDeskContent =
  async () => {
    try {
      await connectDB();

      const page =
        await Page.findOne({
          slug:
            "director-desk",
        });

      const sections =
        await PageSection.find({
          pageId: page._id,
        });

      for (const section of sections) {

        switch (
          section.sectionType
        ) {

          case "PROFILE_HERO":
            section.content = {
              heading:
                "Director's Desk",

              subHeading:
                "Message from the Director, CSIR-CBRI",
            };
            break;

          case "PROFILE_MESSAGE":
            section.content = {
              name:
                "Dr. Director Name",

              designation:
                "Director, CSIR-CBRI",

              image: null,

              message:
                "Welcome to the CSIR Smart Village Mission. Through innovation, technology and community participation we aim to create sustainable and inclusive rural development models for India.",
            };
            break;

          case "PROFILE_BIO":
            section.content = {
              heading:
                "Biography",

              description:
                "Detailed biography, achievements, research contributions and leadership journey of the Director will be displayed here.",
            };
            break;

          default:
            break;
        }

        await section.save();
      }

      console.log(
        "✅ Director Desk Content Seeded"
      );

      process.exit(0);

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

seedDirectorDeskContent();