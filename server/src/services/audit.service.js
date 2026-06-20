import AuditLog from "../models/AuditLog.model.js";

export const createAuditLog =
  async ({
    actor,
    action,
    resource,
    resourceId = null,
    ipAddress = null,
  }) => {
    await AuditLog.create({
      actor,
      action,
      resource,
      resourceId,
      ipAddress,
    });
  };