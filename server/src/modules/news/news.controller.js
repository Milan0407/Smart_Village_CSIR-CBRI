import * as newsService
  from "./news.service.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

export const createNews =
  async (
    req,
    res
  ) => {
    const news =
      await newsService.createNews(
        req.body
      );

    return res.json(
      new ApiResponse(
        201,
        news,
        "News created successfully"
      )
    );
  };

export const getAllNews =
  async (
    req,
    res
  ) => {
    const news =
      await newsService.getAllNews();

    return res.json(
      new ApiResponse(
        200,
        news,
        "News fetched successfully"
      )
    );
  };

export const getNewsBySlug =
  async (
    req,
    res
  ) => {
    const news =
      await newsService.getNewsBySlug(
        req.params.slug
      );

    return res.json(
      new ApiResponse(
        200,
        news,
        "News fetched successfully"
      )
    );
  };

  export const getNewsById =
  async (
    req,
    res
  ) => {
    const news =
      await newsService.getNewsById(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        news,
        "News fetched successfully"
      )
    );
  };

export const updateNews =
  async (
    req,
    res
  ) => {
    const news =
      await newsService.updateNews(
        req.params.id,
        req.body
      );

    return res.json(
      new ApiResponse(
        200,
        news,
        "News updated successfully"
      )
    );
  };

export const deleteNews =
  async (
    req,
    res
  ) => {
    await newsService.deleteNews(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "News deleted successfully"
      )
    );
  };