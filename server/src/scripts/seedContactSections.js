import { connectDB } from "../config/database.js";
import Page from "../models/Page.model.js";
import PageSection from "../models/PageSection.model.js";

const seedContactSections = async () => {
  try {
    await connectDB();

    const page = await Page.findOne({
      slug: "contact",
    });

    if (!page) {
      throw new Error(
        "Contact page not found"
      );
    }

    await PageSection.deleteMany({
      pageId: page._id,
    });

  await PageSection.insertMany([
  {
    pageId: page._id,
    sectionType: "CONTACT_HERO",
    title: "Contact Hero",
    order: 1,
  },
  {
    pageId: page._id,
    sectionType: "CONTACT_FORM",
    title: "Contact Form",
    order: 2,
  },
  {
    pageId: page._id,
    sectionType: "CONTACT_INFORMATION",
    title: "Contact Information",
    order: 3,
  },
]);

    console.log(
      "✅ Contact Sections Seeded"
    );

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedContactSections();