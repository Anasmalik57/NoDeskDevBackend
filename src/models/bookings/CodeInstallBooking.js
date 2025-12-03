import mongoose from "mongoose";

const codeInstallBookingSchema = new mongoose.Schema(
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

    // Project Information
    projectBrief: {
      type: String,
      required: [true, "Project brief is required"],
      trim: true,
      minlength: [10, "Project brief must be at least 10 characters"],
      maxlength: [500, "Project brief cannot exceed 500 characters"],
    },

    // Preferences
    languages: {
      type: [String], // Array of languages
      required: [true, "At least one language is required"],
      default: [],
    },
    callbackTime: {
      type: String,
      required: [true, "Callback time is required"],
      trim: true,
    },

    // Booking Status
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Confirmed", "In Progress", "Completed", "Cancelled"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes for faster searches
codeInstallBookingSchema.index({ email: 1 });
codeInstallBookingSchema.index({ phone: 1 });
codeInstallBookingSchema.index({ status: 1 });

const CodeInstallBooking = mongoose.model("CodeInstallBooking", codeInstallBookingSchema);

export default CodeInstallBooking;