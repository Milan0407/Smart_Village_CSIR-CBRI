import mongoose from "mongoose";

import { env } from "../config/env.js";
import { connectDB } from "../config/database.js";

import Admin from "../models/Admin.model.js";

const createSuperAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin =
      await Admin.findOne({
        username: "superadmin",
      });

    if (existingAdmin) {
      console.log(
        "⚠️ Super Admin already exists"
      );

      process.exit(0);
    }

    const admin = await Admin.create({
      username: "superadmin",

      email: "superadmin@cbri.in",

      password: "Admin@123",

      role: "SUPER_ADMIN",
    });

    console.log(
      "✅ Super Admin Created"
    );

    console.log({
      username: admin.username,
      email: admin.email,
      role: admin.role,
    });

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

createSuperAdmin();