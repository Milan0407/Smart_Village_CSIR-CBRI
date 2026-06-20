import News
  from "../../models/News.model.js";

export const createNews =
  async (
    payload
  ) => {
    return News.create(
      payload
    );
  };

export const getAllNews =
  async () => {
    return News.find()
    .populate("featuredImage")
    .sort({
        createdAt: -1,
      });
  };

export const getNewsBySlug =
  async (
    slug
  ) => {
    return News.findOne({
      slug,
    }).populate(
      "featuredImage"
    );
  };

  export const getNewsById =
  async (id) => {
    return News.findById(id)
    .populate("featuredImage");
  };

export const updateNews =
  async (
    id,
    payload
  ) => {
    return News.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  };

export const deleteNews =
  async (id) => {
    return News.findByIdAndDelete(
      id
    );
  };