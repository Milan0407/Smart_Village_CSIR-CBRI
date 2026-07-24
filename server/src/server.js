import app from "./app.js";

import { env } from "./config/env.js";
import { connectDB } from "./config/database.js";

const startServer = async () => {
  try {
    console.log({
  region: process.env.AWS_REGION,
  bucket: process.env.AWS_S3_BUCKET,
});
    await connectDB();

    app.listen(env.port, () => {
      console.log(
        `🚀 Server running on port ${env.port}`
      );
    });
  } catch (error) {
    console.error(
      "Failed to start server:",
      error
    );

    process.exit(1);
  }
};

startServer();