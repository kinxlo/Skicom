import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      // select: false, // incase of oauth feature
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    authProviderId: {
      type: String,
    },
  },

  {
    timestamps: true,
  },
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
