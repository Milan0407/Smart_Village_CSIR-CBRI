import asyncHandler from "../../utils/asyncHandler.js";

import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  createDevelopmentPlan,
  updateDevelopmentPlan,
  deleteDevelopmentPlan,
  getDevelopmentPlanById,
  getDevelopmentPlansByVillage,
  getAllDevelopmentPlans,
  togglePublishStatus,
} from "./developmentPlan.service.js";

/*
=====================================================
Create Development Plan
=====================================================
*/

export const create = asyncHandler(
  async (req, res) => {
    const plan =
      await createDevelopmentPlan(
        req.body,
        req.admin._id
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        plan,
        "Development Plan created successfully."
      )
    );
  }
);

/*
=====================================================
Update Development Plan
=====================================================
*/

export const update = asyncHandler(
  async (req, res) => {
    const plan =
      await updateDevelopmentPlan(
        req.params.id,
        req.body,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        plan,
        "Development Plan updated successfully."
      )
    );
  }
);

/*
=====================================================
Delete Development Plan
=====================================================
*/

export const remove = asyncHandler(
  async (req, res) => {
    await deleteDevelopmentPlan(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Development Plan deleted successfully."
      )
    );
  }
);

/*
=====================================================
Get Single Development Plan
=====================================================
*/

export const getById = asyncHandler(
  async (req, res) => {
    const plan =
      await getDevelopmentPlanById(
        req.params.id
      );

    if (!plan) {
      throw new ApiError(
        404,
        "Development Plan not found."
      );
    }

    return res.json(
      new ApiResponse(
        200,
        plan,
        "Development Plan fetched successfully."
      )
    );
  }
);

/*
=====================================================
Get Development Plans By Village
=====================================================
*/

export const getByVillage = asyncHandler(
  async (req, res) => {
    const plans =
      await getDevelopmentPlansByVillage(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        plans,
        "Development Plans fetched successfully."
      )
    );
  }
);

/*
=====================================================
Admin List
=====================================================
*/

export const getAll = asyncHandler(
  async (req, res) => {
    const plans =
      await getAllDevelopmentPlans();

    return res.json(
      new ApiResponse(
        200,
        plans,
        "Development Plans fetched successfully."
      )
    );
  }
);

/*
=====================================================
Publish / Unpublish
=====================================================
*/

export const togglePublish =
  asyncHandler(async (req, res) => {
    const plan =
      await togglePublishStatus(
        req.params.id,
        req.admin._id
      );

    return res.json(
      new ApiResponse(
        200,
        plan,
        "Publish status updated successfully."
      )
    );
  });