import mongoose from "mongoose";

const requestProductDemoSchema = new mongoose.Schema(
  {
    // Client Information
    name: {
      type: String,
      required: [true, "Your name is required"],
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

    // Product Information
    productId: {
      type: String,
      required: [true, "Product ID is required"],
    },
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    projectType: {
      type: String,
      required: [true, "Project type is required"],
      trim: true,
    },

    // Demo Preferences
    availabilityTime: {
      type: String,
      required: [true, "Availability time is required"],
      enum: ["morning", "afternoon", "evening"],
      lowercase: true,
    },
    preferredLanguage: {
      type: String,
      required: [true, "Preferred language is required"],
      trim: true,
      lowercase: true,
    },

    // Request Status
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Scheduled", "Completed", "Cancelled"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes for faster searches
requestProductDemoSchema.index({ email: 1 });
requestProductDemoSchema.index({ productId: 1 });
requestProductDemoSchema.index({ status: 1 });

const RequestProductDemo = mongoose.model("RequestProductDemo", requestProductDemoSchema);

export default RequestProductDemo;