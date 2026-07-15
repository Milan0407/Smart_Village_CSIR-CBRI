import rateLimit from "express-rate-limit";

const commonConfig = {
  windowMs: 15 * 60 * 1000,
  standardHeaders: true,
  legacyHeaders: false,
};

// Public Website APIs
export const publicLimiter = rateLimit({
  ...commonConfig,
  max: 1000,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

// Admin CMS APIs
export const adminLimiter = rateLimit({
  ...commonConfig,
  max: 150,
  message: {
    success: false,
    message: "Too many admin requests. Please try again later.",
  },
});

// Authentication
export const authLimiter = rateLimit({
  ...commonConfig,
  max: 10,
  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
});