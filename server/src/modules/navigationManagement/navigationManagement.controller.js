import * as navigationService
  from "./navigationManagement.service.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

export const getAllNavigation =
  async (req, res) => {
    const navigation =
      await navigationService.getAllNavigation();

    return res.json(
      new ApiResponse(
        200,
        navigation,
        "Navigation fetched successfully"
      )
    );
  };

export const getNavigationById =
  async (req, res) => {
    const navigation =
      await navigationService.getNavigationById(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        navigation,
        "Navigation item fetched successfully"
      )
    );
  };

export const createNavigation =
  async (req, res) => {
    const navigation =
      await navigationService.createNavigation(
        req.body
      );

    return res.json(
      new ApiResponse(
        201,
        navigation,
        "Navigation item created successfully"
      )
    );
  };

export const updateNavigation =
  async (req, res) => {
    const navigation =
      await navigationService.updateNavigation(
        req.params.id,
        req.body
      );

    return res.json(
      new ApiResponse(
        200,
        navigation,
        "Navigation item updated successfully"
      )
    );
  };

export const deleteNavigation =
  async (req, res) => {
    await navigationService.deleteNavigation(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Navigation item deleted successfully"
      )
    );
  };