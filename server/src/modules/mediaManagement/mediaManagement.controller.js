import * as mediaService
  from "./mediaManagement.service.js";

import ApiResponse
  from "../../utils/ApiResponse.js";

import cloudinary
  from "../../config/cloudinary.js";

import streamifier
  from "streamifier";

export const uploadMedia =
  async (req, res) => {

    if (!req.file) {
      throw new Error(
        "No file uploaded"
      );
    }

    const uploadResult =
      await new Promise(
        (
          resolve,
          reject
        ) => {

          const uploadStream =
            cloudinary.uploader.upload_stream(
              {
                folder:
                  "smart-village",

                resource_type:
                  "auto",
              },

              (
                error,
                result
              ) => {

                if (error) {
                  reject(
                    error
                  );
                } else {
                  resolve(
                    result
                  );
                }
              }
            );

          streamifier
            .createReadStream(
              req.file.buffer
            )
            .pipe(
              uploadStream
            );
        }
      );

    const media =
      await mediaService.createMedia({
        filename:
          uploadResult.public_id,

        originalName:
          req.file.originalname,

        url:
          uploadResult.secure_url,

        publicId:
          uploadResult.public_id,

        resourceType:
          uploadResult.resource_type,

        mimeType:
          req.file.mimetype,

        size:
          req.file.size,
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

    await cloudinary.uploader.destroy(
      media.publicId,
      {
        resource_type:
          media.resourceType ||
          "image",
      }
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