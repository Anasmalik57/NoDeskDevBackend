import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    profileLink: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    resumeName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Career", CareerSchema);
