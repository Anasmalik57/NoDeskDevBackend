import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      minlength: [3, "Project name must be at least 3 characters"],
      maxlength: [100, "Project name cannot exceed 100 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      enum: {
        values: [
          "Food",
          "E-commerce",
          "Health",
          "Education",
          "Finance",
          "Social",
          "Other",
        ],
        message: "Please select a valid category",
      },
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [1, "Description must be at least 1 characters"],
      // maxlength: [500, "Description cannot exceed 500 characters"],
    },
    platforms: {
      type: [String],
      required: [true, "At least one platform is required"],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "Platforms array cannot be empty",
      },
      enum: {
        values: ["Android", "iOS", "Web", "Desktop"],
        message: "Platform must be Android, iOS, Web, or Desktop",
      },
    },
    tech: {
      type: [String],
      required: [true, "At least one technology is required"],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "Tech stack cannot be empty",
      },
    },
    price: {
      type: Number,
      required: [true, "Base price is required"],
      min: [0, "Price cannot be negative"],
    },
    customization: {
      type: Number,
      default: 0,
      min: [0, "Customization cost cannot be negative"],
    },
    screenshots: {
      type: [String],
      required: [true, "At least one screenshot is required"],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "Screenshots array cannot be empty",
      },
    },
    demoLink: {
      type: String,
      trim: true,
      validate: {
        validator: function (url) {
          // Simple URL validation
          return !url || /^https?:\/\/.+/.test(url);
        },
        message: "Please provide a valid URL",
      },
    },
    deployment: {
      type: Number,
      default: 0,
      min: [0, "Deployment cost cannot be negative"],
    },
    branding: {
      type: Number,
      default: 0,
      min: [0, "Branding cost cannot be negative"],
    },
    payment: {
      type: Number,
      default: 0,
      min: [0, "Payment integration cost cannot be negative"],
    },
    gateway: {
      type: Number,
      default: 0,
      min: [0, "Gateway cost cannot be negative"],
    },
    whatsapp: {
      type: Number,
      default: 0,
      min: [0, "WhatsApp integration cost cannot be negative"],
    },
    multiLanguage: {
      type: Number,
      default: 0,
      min: [0, "Multi-language support cost cannot be negative"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes for faster queries
projectSchema.index({ category: 1, isActive: 1 });
projectSchema.index({ price: 1 });
projectSchema.index({ platforms: 1 });

// Virtual property to calculate total cost with all add-ons
projectSchema.virtual("totalCost").get(function () {
  return (
    this.price +
    this.customization +
    this.deployment +
    this.branding +
    this.payment +
    this.gateway +
    this.whatsapp +
    this.multiLanguage
  );
});

// Ensure virtuals are included when converting to JSON
projectSchema.set("toJSON", { virtuals: true });
projectSchema.set("toObject", { virtuals: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
