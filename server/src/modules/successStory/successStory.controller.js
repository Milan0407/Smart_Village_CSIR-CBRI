import * as successStoryService
  from "./successStory.service.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

export const getAllStories =
  async (req, res) => {
    const stories =
      await successStoryService.getAllStories();

    return res.json(
      new ApiResponse(
        200,
        stories,
        "Success stories fetched successfully"
      )
    );
  };

export const getStoryBySlug =
  async (req, res) => {
    const story =
      await successStoryService.getStoryBySlug(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        story,
        "Success story fetched successfully"
      )
    );
  };

export const createStory =
  async (req, res) => {
    const story =
      await successStoryService.createStory(
        req.body
      );

    return res.json(
      new ApiResponse(
        201,
        story,
        "Success story created successfully"
      )
    );
  };


  export const getStoryById =
  async (req, res) => {
    const story =
      await successStoryService.getStoryById(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        story,
        "Success story fetched successfully"
      )
    );
  };

export const updateStory =
  async (req, res) => {
    const story =
      await successStoryService.updateStory(
        req.params.id,
        req.body
      );

    return res.json(
      new ApiResponse(
        200,
        story,
        "Success story updated successfully"
      )
    );
  };

export const deleteStory =
  async (req, res) => {
    await successStoryService.deleteStory(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Success story deleted successfully"
      )
    );
  };