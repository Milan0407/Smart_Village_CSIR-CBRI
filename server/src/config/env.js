import dotenv from "dotenv";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV,

  port: process.env.PORT,

  mongoUri: process.env.MONGODB_URI,

  accessSecret: process.env.JWT_ACCESS_SECRET,
  refreshSecret: process.env.JWT_REFRESH_SECRET,

  accessExpiry: process.env.ACCESS_TOKEN_EXPIRY,
  refreshExpiry: process.env.REFRESH_TOKEN_EXPIRY,

  clientUrl: process.env.CLIENT_URL,

  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,

  contactReceiver: process.env.CONTACT_RECEIVER,
};