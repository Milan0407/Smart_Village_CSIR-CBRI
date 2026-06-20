import { connectDB }
  from "../config/database.js";

import Page
  from "../models/Page.model.js";

import PageSection
  from "../models/PageSection.model.js";

const seedNodalLabContent =
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

      const sections =
        await PageSection.find({
          pageId: page._id,
        });

      for (const section of sections) {
        switch (
          section.sectionType
        ) {
          case "NODAL_LAB_HERO":
            section.content = {
              heading:
                "Nodal Laboratory",

              subHeading:
                "Leading the coordination, implementation, and monitoring of Smart Village initiatives across the CSIR network.",

              backgroundImage:
                null,
            };
            break;

          case "NODAL_LAB_OVERVIEW":
            section.content = {
              heading:
                "About Nodal Laboratory",

              description:
                "The Nodal Laboratory acts as the central coordinating institution for Smart Village activities, providing technical guidance, project oversight, and strategic direction.",
            };
            break;

          case "NODAL_LAB_RESPONSIBILITIES":
            section.content = {
              heading:
                "Responsibilities",

              items: [
                "Project coordination",
                "Technical guidance",
                "Monitoring and evaluation",
                "Stakeholder engagement",
                "Capacity building",
              ],
            };
            break;

          case "NODAL_LAB_RESEARCH_AREAS":
            section.content = {
              heading:
                "Research Areas",

              items: [
                "Rural Infrastructure",
                "Housing Technologies",
                "Water Management",
                "Renewable Energy",
                "Digital Transformation",
              ],
            };
            break;

          case "NODAL_LAB_PROJECTS":
            section.content = {
              heading:
                "Key Projects",

              items: [
                "Smart Village Pilot Program",
                "Rural Housing Initiative",
                "Technology Demonstration Projects",
              ],
            };
            break;

          case "NODAL_LAB_ACHIEVEMENTS":
            section.content = {
              heading:
                "Achievements",

              items: [
                "Successful village transformations",
                "Technology deployment initiatives",
                "Community capacity-building programs",
              ],
            };
            break;

          case "NODAL_LAB_CONTACT":
            section.content = {
              heading:
                "Contact Information",

              address:
                "CSIR-CBRI, Roorkee, Uttarakhand",

              email:
                "smartvillage@cbri.res.in",

              phone:
                "+91 XXXXX XXXXX",

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
        "✅ Nodal Lab Content Seeded"
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedNodalLabContent();