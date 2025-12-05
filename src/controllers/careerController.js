import Career from "../models/Career.js";

// CREATE Application
export const createCareerApplication = async (req, res) => {
  try {
    const newApp = new Career(req.body);
    await newApp.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully! We'll review it soon.",
      data: newApp,
    });
  } catch (error) {
    console.error("Career Application Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit application",
    });
  }
};

// GET ALL Applications
export const getAllCareerApplications = async (req, res) => {
  try {
    const apps = await Career.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: apps.length,
      data: apps,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Application
export const getCareerApplicationById = async (req, res) => {
  try {
    const app = await Career.findById(req.params.id);
    if (!app) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: app });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Status
export const updateCareerStatus = async (req, res) => {
  try {
    const updated = await Career.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({
      success: true,
      message: "Status updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE Application
export const deleteCareerApplication = async (req, res) => {
  try {
    const app = await Career.findByIdAndDelete(req.params.id);
    if (!app) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};