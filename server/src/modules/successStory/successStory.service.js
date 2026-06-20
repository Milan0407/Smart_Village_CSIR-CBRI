import SuccessStory
  from "../../models/SuccessStory.model.js";

export const getAllStories =
  async () => {
    return SuccessStory.find()
      .populate("featuredImage")
      .sort({
        createdAt: -1,
      });
  };

export const getStoryBySlug =
  async (slug) => {
    return SuccessStory.findOne({
      slug,
    }).populate(
      "featuredImage"
    );
  };

export const createStory =
  async (payload) => {
    return SuccessStory.create(
      payload
    );
  };

 export const getStoryById =
  async (id) => {
    return SuccessStory.findById(id)
      .populate(
        "featuredImage"
      );
  };

export const updateStory =
  async (
    id,
    payload
  ) => {
    return SuccessStory.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  };

export const deleteStory =
  async (id) => {
    return SuccessStory.findByIdAndDelete(
      id
    );
  };