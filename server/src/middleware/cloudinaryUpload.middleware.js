import multer from "multer";

const storage =
  multer.memoryStorage();

const fileFilter =
  (
    req,
    file,
    cb
  ) => {

    const isImage =
      file.mimetype.startsWith(
        "image/"
      );

    const isVideo =
      file.mimetype.startsWith(
        "video/"
      );

    const isPdf =
      file.mimetype ===
      "application/pdf";

    if (
      isImage ||
      isVideo ||
      isPdf
    ) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only images, videos and PDF files are allowed"
        )
      );
    }
  };

const upload = multer({
  storage,
  fileFilter,
});

export default upload;