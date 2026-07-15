import DevelopmentPlan from "./DevelopmentPlan.model.js";
import Village from "../../models/Village.model.js";

/*
=====================================================
Create Development Plan
=====================================================
*/

export const createDevelopmentPlan = async (
  payload,
  adminId
) => {
  const village = await Village.findById(
    payload.village
  );

  if (!village) {
    throw new Error("Village not found.");
  }

  const plan =
    await DevelopmentPlan.create({
      ...payload,
      createdBy: adminId,
    });

  return plan;
};

/*
=====================================================
Update Development Plan
=====================================================
*/

export const updateDevelopmentPlan = async (
  id,
  payload,
  adminId
) => {
  const plan =
    await DevelopmentPlan.findById(id);

  if (!plan) {
    throw new Error(
      "Development Plan not found."
    );
  }

  Object.assign(plan, payload);

  plan.updatedBy = adminId;

  await plan.save();

  return plan;
};

/*
=====================================================
Delete Development Plan
=====================================================
*/

export const deleteDevelopmentPlan =
  async (id) => {
    const plan =
      await DevelopmentPlan.findById(id);

    if (!plan) {
      throw new Error(
        "Development Plan not found."
      );
    }

    await plan.deleteOne();

    return true;
  };

/*
=====================================================
Get Development Plan By ID
=====================================================
*/

export const getDevelopmentPlanById =
  async (id) => {
    return await DevelopmentPlan.findById(id)
      .populate(
        "village",
        "name slug district state"
      )
      .populate("coverImage")
      .populate("gallery")
      .populate("documents.file");
  };

/*
=====================================================
Get Development Plans By Village
=====================================================
*/

export const getDevelopmentPlansByVillage =
  async (slug) => {
    const village =
      await Village.findOne({
        slug,
      });

    if (!village) {
      throw new Error("Village not found.");
    }

    return await DevelopmentPlan.find({
      village: village._id,
      isPublished: true,
    })
      .sort({
        sortOrder: 1,
        createdAt: -1,
      })
      .populate("coverImage");
  };

/*
=====================================================
Admin List
=====================================================
*/

export const getAllDevelopmentPlans =
  async () => {
    return await DevelopmentPlan.find()
      .populate(
        "village",
        "name slug"
      )
      .sort({
        createdAt: -1,
      });
  };

/*
=====================================================
Publish / Unpublish
=====================================================
*/

export const togglePublishStatus =
  async (id, adminId) => {
    const plan =
      await DevelopmentPlan.findById(id);

    if (!plan) {
      throw new Error(
        "Development Plan not found."
      );
    }

    plan.isPublished =
      !plan.isPublished;

    plan.updatedBy = adminId;

    await plan.save();

    return plan;
  };