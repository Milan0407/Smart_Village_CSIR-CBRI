import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  createPoliciesScheme,
  updatePoliciesScheme,
  deletePoliciesScheme,
  getPoliciesSchemeById,
  getPoliciesSchemeBySlug,
  getPoliciesSchemesByVillage,
  getAllPoliciesSchemes,
} from "./policiesScheme.service.js";

export const create = asyncHandler(
  async (req, res) => {
    const scheme = await createPoliciesScheme(
      req.body,
      req.admin._id
    );

    return res.status(201).json(
      new ApiResponse(
        201,
        scheme,
        "Policy or Scheme created successfully."
      )
    );
  }
);

export const update = asyncHandler(
  async (req, res) => {
    const scheme = await updatePoliciesScheme(
      req.params.id,
      req.body,
      req.admin._id
    );

    return res.json(
      new ApiResponse(
        200,
        scheme,
        "Policy or Scheme updated successfully."
      )
    );
  }
);

export const remove = asyncHandler(
  async (req, res) => {
    await deletePoliciesScheme(req.params.id);

    return res.json(
      new ApiResponse(
        200,
        null,
        "Policy or Scheme deleted successfully."
      )
    );
  }
);

export const getById = asyncHandler(
  async (req, res) => {
    const scheme = await getPoliciesSchemeById(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        scheme,
        "Policy or Scheme fetched successfully."
      )
    );
  }
);

export const getBySlug = asyncHandler(
  async (req, res) => {
    const scheme = await getPoliciesSchemeBySlug(
      req.params.schemeSlug
    );

    return res.json(
      new ApiResponse(
        200,
        scheme,
        "Policy or Scheme fetched successfully."
      )
    );
  }
);

export const getByVillage = asyncHandler(
  async (req, res) => {
    const schemes =
      await getPoliciesSchemesByVillage(
        req.params.villageSlug
      );

    return res.json(
      new ApiResponse(
        200,
        schemes,
        "Policies and Schemes fetched successfully."
      )
    );
  }
);

export const getAll = asyncHandler(
  async (req, res) => {
    const schemes =
      await getAllPoliciesSchemes(req.query);

    return res.json(
      new ApiResponse(
        200,
        schemes,
        "Policies and Schemes fetched successfully."
      )
    );
  }
);
