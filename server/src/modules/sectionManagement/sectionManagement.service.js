import PageSection from "../../models/PageSection.model.js";

export const getSectionsByPageId =
  async (pageId) => {
    return PageSection.find({
      pageId,
    }).sort({
      order: 1,
    });
  };

export const getSectionById =
  async (id) => {
    return PageSection.findById(id);
  };

export const updateSection =
  async (
    id,
    payload
  ) => {
    return PageSection.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  };