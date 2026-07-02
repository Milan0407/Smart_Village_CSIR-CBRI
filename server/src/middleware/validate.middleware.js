import { ZodError } from "zod";
import ApiError from "../utils/ApiError.js";

const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("========== ZOD VALIDATION ==========");
        console.log("Request Body:", req.body);
        console.log("Issues:", error.issues);
        console.log("====================================");

        return next(
          new ApiError(
            400,
            "Validation Failed",
            error.issues
          )
        );
      }

      console.error(error);
      next(error);
    }
  };
};

export default validate;