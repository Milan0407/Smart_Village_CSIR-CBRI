import Page from "../../models/Page.model.js";

export const getAllPages =
  async () => {
    return Page.find()
      .sort({
        createdAt: 1,
      });
  };

export const getPageById =
  async (id) => {
    return Page.findById(id);
  };

export const updatePage =
  async (
    id,
    payload
  ) => {
    return Page.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  };