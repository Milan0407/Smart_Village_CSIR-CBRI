import mongoose from "mongoose";

const auditLogSchema =
  new mongoose.Schema(
    {
      actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
      },

      action: {
        type: String,
        required: true,
      },

      resource: {
        type: String,
        required: true,
      },

      resourceId: {
        type: String,
        default: null,
      },

      ipAddress: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );

const AuditLog = mongoose.model(
  "AuditLog",
  auditLogSchema
);

export default AuditLog;