import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import * as stateService from "./state.service.js";

/**
 * Create State
 */
export const createState = asyncHandler(
  async (req, res) => {
    const state =
      await stateService.createState(
        req.body
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        state,
        "State created successfully."
      )
    );
  }
);

/**
 * Get All States
 */
export const getAllStates = asyncHandler(
  async (req, res) => {
    const states =
      await stateService.getAllStates();

    return res.json(
      new ApiResponse(
        200,
        states,
        "States fetched successfully."
      )
    );
  }
);

/**
 * Get Published States
 */
export const getPublishedStates =
  asyncHandler(async (req, res) => {
    const states =
      await stateService.getPublishedStates();

    return res.json(
      new ApiResponse(
        200,
        states,
        "Published states fetched successfully."
      )
    );
  });

/**
 * Get State By ID
 */
export const getStateById =
  asyncHandler(async (req, res) => {
    const state =
      await stateService.getStateById(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        state,
        "State fetched successfully."
      )
    );
  });

/**
 * Get State By Slug
 */
export const getStateBySlug =
  asyncHandler(async (req, res) => {
    const state =
      await stateService.getStateBySlug(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        state,
        "State fetched successfully."
      )
    );
  });

/**
 * Update State
 */
export const updateState =
  asyncHandler(async (req, res) => {
    const state =
      await stateService.updateState(
        req.params.id,
        req.body
      );

    return res.json(
      new ApiResponse(
        200,
        state,
        "State updated successfully."
      )
    );
  });

/**
 * Delete State
 */
export const deleteState =
  asyncHandler(async (req, res) => {
    await stateService.deleteState(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "State deleted successfully."
      )
    );
  });