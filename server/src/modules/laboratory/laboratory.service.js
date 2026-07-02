import Laboratory from "../../models/Laboratory.model.js";

export const createLaboratory =
  async (payload) => {
    return Laboratory.create(payload);
  };

export const getAllLaboratories =
  async () => {
    return Laboratory.find()
      .populate("heroImage")
      .sort({ createdAt: -1 });
  };

export const getLaboratoryById =
  async (id) => {
    return Laboratory.findById(id)
      .populate("heroImage");
  };

export const getLaboratoryBySlug =
  async (slug) => {
    return Laboratory.findOne({
      slug,
    }).populate("heroImage");
  };


  export const getNodalLaboratory =
  async () => {
    return Laboratory.findOne({
      type: "NODAL",
      isPublished: true,
    }).populate("heroImage");
  };

export const updateLaboratory =
  async (id, payload) => {
    return Laboratory.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  };

export const deleteLaboratory =
  async (id) => {
    return Laboratory.findByIdAndDelete(
      id
    );
  };