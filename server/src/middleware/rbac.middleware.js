import ApiError from "../utils/ApiError.js";

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.admin) {
      return next(
        new ApiError(
          401,
          "Unauthorized"
        )
      );
    }

    if (
      !roles.includes(req.admin.role)
    ) {
      return next(
        new ApiError(
          403,
          "Forbidden"
        )
      );
    }

    next();
  };
};

export default authorize;