import mongoose from "mongoose";

const installOwnCodeSchema = new mongoose.Schema(
  {
    // Project Details
    productLinkOrName: {
      type: String,
      required: [true, "Product link or name is required"],
      trim: true,
    },
    setupType: {
      type: String,
      required: [true, "Setup type is required"],
      trim: true,
    },

    // Technical Information
    codingLanguage: {
      type: String,
      required: [true, "Coding language is required"],
      trim: true,
    },
    preferredLanguage: {
      type: [String], // Array of languages
      required: [true, "At least one preferred language is required"],
      default: [],
    },
    communicationLanguage: {
      type: String,
      required: [true, "Communication language is required"],
      trim: true,
    },

    // Scheduling
    preferredTime: {
      type: String,
      required: [true, "Preferred time is required"],
      trim: true,
    },

    // Additional Information
    additionalNotes: {
      type: String,
      trim: true,
      maxlength: [500, "Additional notes cannot exceed 500 characters"],
    },

    // Request Status
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "In Progress", "Completed", "Cancelled"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes for faster searches
installOwnCodeSchema.index({ codingLanguage: 1 });
installOwnCodeSchema.index({ status: 1 });

const InstallOwnCode = mongoose.model("InstallOwnCode", installOwnCodeSchema);

export default InstallOwnCode;