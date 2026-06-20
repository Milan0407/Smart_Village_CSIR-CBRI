import Media
  from "../../models/Media.model.js";

export const getAllMedia =
  async () => {
    return Media.find()
      .sort({
        createdAt: -1,
      });
  };

export const getMediaById =
  async (id) => {
    return Media.findById(
      id
    );
  };

export const createMedia =
  async (payload) => {
    return Media.create(
      payload
    );
  };

export const deleteMedia =
  async (id) => {
    return Media.findByIdAndDelete(
      id
    );
  };