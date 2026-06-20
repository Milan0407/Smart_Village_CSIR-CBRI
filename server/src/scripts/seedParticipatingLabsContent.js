import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedParticipatingLabsContent =
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

      const sections =
        await PageSection.find({
          pageId: page._id,
        });

      for (const section of sections) {
        switch (
          section.sectionType
        ) {
          case "PARTICIPATING_LABS_HERO":
            section.content = {
              heading:
                "Participating Laboratories",

              subHeading:
                "A collaborative network of CSIR laboratories contributing expertise, innovation, and technology solutions to Smart Village initiatives.",

              backgroundImage:
                null,
            };
            break;

          case "PARTICIPATING_LABS_OVERVIEW":
            section.content = {
              heading:
                "Overview",

              description:
                "Participating laboratories support Smart Village development through domain-specific research, technology deployment, scientific outreach, and capacity-building programs.",
            };
            break;

          case "PARTICIPATING_LABS_LIST":
            section.content = {
              heading:
                "Participating Laboratories",

              laboratories: [
                {
                  name:
                    "CSIR-CBRI",
                  location:
                    "Roorkee",
                },
                {
                  name:
                    "CSIR-IITR",
                  location:
                    "Lucknow",
                },
                {
                  name:
                    "CSIR-NEERI",
                  location:
                    "Nagpur",
                },
                {
                  name:
                    "CSIR-CMERI",
                  location:
                    "Durgapur",
                },
              ],
            };
            break;

          case "PARTICIPATING_LABS_RESEARCH":
            section.content = {
              heading:
                "Research Areas",

              items: [
                "Rural Infrastructure",
                "Water & Sanitation",
                "Renewable Energy",
                "Agriculture Technologies",
                "Digital Inclusion",
              ],
            };
            break;

          case "PARTICIPATING_LABS_CONTRIBUTIONS":
            section.content = {
              heading:
                "Key Contributions",

              items: [
                "Technology transfer",
                "Village capacity building",
                "Research support",
                "Innovation deployment",
                "Sustainable development initiatives",
              ],
            };
            break;

          case "PARTICIPATING_LABS_CONTACT":
            section.content = {
              heading:
                "Contact Information",

              email:
                "smartvillage@cbri.res.in",

              website:
                "https://www.cbri.res.in",
            };
            break;

          default:
            break;
        }

        await section.save();
      }

      console.log(
        "✅ Participating Labs Content Seeded"
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedParticipatingLabsContent();