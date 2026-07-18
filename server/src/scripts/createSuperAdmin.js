import { env } from "../config/env.js";
import { connectDB } from "../config/database.js";

import Admin from "../models/Admin.model.js";

const createSuperAdmin = async () => {
  try {
    const {
      superAdminUsername,
      superAdminEmail,
      superAdminPassword,
    } = env;

    if (
      !superAdminUsername ||
      !superAdminEmail ||
      !superAdminPassword
    ) {
      throw new Error(
        "SUPER_ADMIN_USERNAME, SUPER_ADMIN_EMAIL, and SUPER_ADMIN_PASSWORD must be set in the environment."
      );
    }

    await connectDB();

    const existingAdmin =
      await Admin.findOne({
        username: superAdminUsername,
      });

    if (existingAdmin) {
      console.log(
        "Super Admin already exists"
      );

      process.exit(0);
    }

    const admin = await Admin.create({
      username: superAdminUsername,

      email: superAdminEmail,

      password: superAdminPassword,

      role: "SUPER_ADMIN",
    });

    console.log(
      "Super Admin created"
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
