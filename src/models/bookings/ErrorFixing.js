import mongoose from "mongoose";

const errorFixingSchema = new mongoose.Schema(
  {
    // Client Information
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    // Project/Product Details
    productType: {
      type: String,
      required: [true, "Product type is required"],
      trim: true,
    },
    productUrl: {
      type: String,
      required: [true, "Product URL is required"],
      trim: true,
    },
    codingLang: {
      type: [String], // Array of coding languages like ["React", "JavaScript", "Next.js", "Python"]
      required: [true, "At least one coding language is required"],
      default: [],
    },

    // Issue Details
    issueDesc: {
      type: String,
      required: [true, "Issue description is required"],
      trim: true,
      minlength: [10, "Issue description must be at least 10 characters"],
      maxlength: [500, "Issue description cannot exceed 500 characters"],
    },
    language: {
      type: String,
      required: [true, "Language is required"],
      trim: true,
    },

    // Submission Tracking
    submittedAt: {
      type: Date,
      default: Date.now,
    },

    // Request Status
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Under Review", "In Progress", "Fixed", "Closed"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes for faster searches
errorFixingSchema.index({ email: 1 });
errorFixingSchema.index({ phone: 1 });
errorFixingSchema.index({ status: 1 });
errorFixingSchema.index({ submittedAt: 1 });

const ErrorFixing = mongoose.model("ErrorFixing", errorFixingSchema);

export default ErrorFixing;
