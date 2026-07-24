import * as mediaService
  from "./mediaManagement.service.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

import {
  uploadFile,
  deleteFile,
} from "../../services/s3.service.js";

export const uploadMedia =
  async (req, res) => {

    if (!req.file) {
      throw new Error(
        "No file uploaded"
      );
    }

    const uploadResult =
  await uploadFile({
    file: req.file,
    folder: "media",
  });

   const media =
  await mediaService.createMedia({
    filename:
      uploadResult.filename,

    originalName:
      req.file.originalname,

    url:
      uploadResult.url,

    publicId:
      uploadResult.publicId,

    resourceType:
      uploadResult.resourceType,

    mimeType:
      uploadResult.mimeType,

    size:
      uploadResult.size,
  });

    return res.json(
      new ApiResponse(
        201,
        media,
        "File uploaded successfully"
      )
    );
  };
    
export const getAllMedia =
  async (req, res) => {
    const media =
      await mediaService.getAllMedia();

    return res.json(
      new ApiResponse(
        200,
        media,
        "Media fetched successfully"
      )
    );
  };

export const getMediaById =
  async (req, res) => {
    const media =
      await mediaService.getMediaById(
        req.params.id
      );

    return res.json(
      new ApiResponse(
        200,
        media,
        "Media fetched successfully"
      )
    );
  };

export const createMedia =
  async (req, res) => {
    const media =
      await mediaService.createMedia(
        req.body
      );

    return res.json(
      new ApiResponse(
        201,
        media,
        "Media created successfully"
      )
    );
  };

export const deleteMedia =
  async (req, res) => {

    const media =
      await mediaService.getMediaById(
        req.params.id
      );

    if (!media) {
      throw new Error(
        "Media not found"
      );
    }

   await deleteFile(
  media.publicId
);

    await mediaService.deleteMedia(
      req.params.id
    );

    return res.json(
      new ApiResponse(
        200,
        null,
        "Media deleted successfully"
      )
    );
  };