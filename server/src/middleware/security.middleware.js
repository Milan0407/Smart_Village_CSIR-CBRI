import helmet from "helmet";

// Configure helmet to allow cross-origin requests from the frontend.
// CORS is handled separately (see app.js), so we disable the CSP and
// cross-origin policies that would block browser CORS requests.
export const securityMiddleware = [
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
    contentSecurityPolicy: false,
  }),
];