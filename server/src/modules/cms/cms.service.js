import Page from "../../models/Page.model.js";
import PageSection from "../../models/PageSection.model.js";
import ApiError from "../../utils/ApiError.js";

import Navigation from "../../models/Navigation.model.js";

import Media
  from "../../models/Media.model.js";

export const getNavigation =
  async () => {
    return Navigation.find({
      isVisible: true,
    })
      .sort({
        order: 1,
      })
      .lean();
  };

export const getPageBySlug =
  async (slug) => {
    const page =
      await Page.findOne({
        slug,
        status: "PUBLISHED",
        isVisible: true,
      }).lean();

    if (!page) {
      throw new ApiError(
        404,
        "Page not found"
      );
    }

    const sections =
      await PageSection.find({
        pageId: page._id,
        isVisible: true,
      })
        .sort({
          order: 1,
        })
        .lean();

for (const section of sections) {

  // Single Hero Image

  if (
    section.content?.heroImage
  ) {

    const media =
      await Media.findById(
        section.content.heroImage
      ).lean();

    if (media) {

      section.content.heroImage =
        media;

      section.content.backgroundImage =
        media.url;

    }

  }

  // Multiple Hero Images

  if (
    Array.isArray(
      section.content?.heroImages
    )
  ) {

    const heroImages =
      await Promise.all(

        section.content.heroImages.map(
          async (imageId) => {

            return Media.findById(
              imageId
            ).lean();

          }
        )

      );

    section.content.heroImages =
      heroImages.filter(
        Boolean
      );

  }

}

    return {
      page,
      sections,
    };
  };