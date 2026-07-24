import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { v4 as uuidv4 } from "uuid";
import path from "path";

import s3Client from "../config/aws.js";

const BUCKET = process.env.AWS_S3_BUCKET;

const generateObjectKey = (
  originalName,
  folder = "media",
  date = new Date()
) => {
  const ext = path.extname(originalName);

  const uploadDate = new Date(date);

  const year = uploadDate.getFullYear();

  const month = String(
    uploadDate.getMonth() + 1
  ).padStart(2, "0");

  return `${folder}/${year}/${month}/${uuidv4()}${ext}`;
};

export const uploadFile = async ({
  file,
  folder = "media",
  date,
}) => {
const key = generateObjectKey(
  file.originalname,
  folder,
  date
);

  const params = {
    Bucket: BUCKET,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await new Upload({
    client: s3Client,
    params,
  }).done();

  return {
    filename: key.split("/").pop(),
    publicId: key,
    url: `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    resourceType: file.mimetype.split("/")[0],
    mimeType: file.mimetype,
    size: file.size,
  };
};

export const deleteFile = async (key) => {
  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    })
  );
};