import Navigation
  from "../../models/Navigation.model.js";

export const getAllNavigation =
  async () => {
    return Navigation.find()
      .sort({
        order: 1,
      });
  };

export const getNavigationById =
  async (id) => {
    return Navigation.findById(
      id
    );
  };

export const createNavigation =
  async (payload) => {
    return Navigation.create(
      payload
    );
  };

export const updateNavigation =
  async (
    id,
    payload
  ) => {
    return Navigation.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  };

export const deleteNavigation =
  async (id) => {
    return Navigation.findByIdAndDelete(
      id
    );
  };