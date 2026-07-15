import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";

import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";

import path from "path";

import {
  securityMiddleware,
} from "./middleware/security.middleware.js";

import {
  globalLimiter,
} from "./middleware/rateLimit.middleware.js";

import { env } from "./config/env.js";

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://smart-village-csir-cbri.vercel.app",
    ],
    credentials: true,
  })
);

app.use(securityMiddleware);

app.use(compression());


app.use(cookieParser());

app.use(
  express.json({
    limit: "10mb",
  })
);


app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use("/api/auth", authLimiter);

app.use("/api", globalLimiter);

app.use("/api", routes);

app.use(notFound);

app.use(errorHandler);

export default app;