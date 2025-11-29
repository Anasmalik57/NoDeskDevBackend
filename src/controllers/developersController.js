import Developer from "../models/developers.js";

// Add new developer
export const addDeveloper = async (req, res) => {
  try {
    const newDev = await Developer.create(req.body);
    res.status(201).json({
      success: true,
      message: "Developer successfully added!",
      data: newDev,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid data provided",
      error: error.message,
    });
  }
};

// Get all developers
export const getAllDevelopers = async (req, res) => {
  try {
    const allDevs = await Developer.find();
    res.status(200).json({
      success: true,
      count: allDevs.length,
      data: allDevs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching developers",
    });
  }
};

// =================================================================================
// =============== Get single developer by ID ===============
// =================================================================================
export const getDeveloperById = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) {
      return res.status(404).json({
        success: false,
        message: "Developer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: developer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update developer by ID (full or partial update)
export const updateDeveloper = async (req, res) => {
  try {
    const updatedDev = await Developer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // new: true → updated document return karega
    );

    if (!updatedDev) {
      return res.status(404).json({
        success: false,
        message: "Developer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Developer updated successfully",
      data: updatedDev,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid data or validation failed",
      error: error.message,
    });
  }
};

// Delete developer by ID
export const deleteDeveloper = async (req, res) => {
  try {
    const deletedDev = await Developer.findByIdAndDelete(req.params.id);

    if (!deletedDev) {
      return res.status(404).json({
        success: false,
        message: "Developer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Developer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
