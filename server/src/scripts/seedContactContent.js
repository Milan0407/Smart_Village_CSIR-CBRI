import { connectDB } from "../config/database.js";
import Page from "../models/Page.model.js";
import PageSection from "../models/PageSection.model.js";

const seedContactContent = async () => {
  try {
    await connectDB();

    const page = await Page.findOne({
      slug: "contact",
    });

    const sections =
      await PageSection.find({
        pageId: page._id,
      });

    for (const section of sections) {
      switch (
        section.sectionType
      ) {
        case "CONTACT_HERO":
          section.content = {
            heading:
              "Contact Us",
            description:
              "Get in touch with the CSIR Smart Village team.",
          };
          break;

        case "CONTACT_INFORMATION":
          section.content = {
            address:
              "CSIR-CBRI, Roorkee, Uttarakhand",
            email:
              "smartvillage@cbri.res.in",
            phone:
              "+91 XXXXX XXXXX",
          };
          break;

        case "CONTACT_FORM":
          section.content = {
            heading:
              "Send Us A Message",
          };
          break;

        case "CONTACT_LOCATION":
          section.content = {
            heading:
              "Our Location",
            mapUrl: "",
          };
          break;

        case "CONTACT_FAQ":
          section.content = {
            heading:
              "Frequently Asked Questions",
            items: [
              {
                question:
                  "How can I participate?",
                answer:
                  "Contact the project team.",
              },
              {
                question:
                  "Where is the project active?",
                answer:
                  "Across selected villages under CSIR initiatives.",
              },
            ],
          };
          break;
      }

      await section.save();
    }

    console.log(
      "✅ Contact Content Seeded"
    );

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedContactContent();