// src/controllers/projectController.js

import Project from "../models/Project.js";

// Add new project
export const addProject = async (req, res) => {
  try {
    // Generate slug from name
    const slug = req.body.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^\-|\-$/g, ""); // remove leading/trailing hyphens

    // Check duplicate slug
    const existing = await Project.findOne({ slug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Project with similar name already exists (slug conflict)",
      });
    }

    const newProject = await Project.create({
      ...req.body,
      slug,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully!",
      data: newProject,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message.includes("duplicate key")
        ? "Project with this name already exists"
        : "Invalid data",
      error: error.message,
    });
  }
};

// Get all active projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isActive: true });
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Get single project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update project by ID
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    // Agar name change ho raha hai
    if (req.body.name && req.body.name !== project.name) {
      const newSlug = req.body.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^\-|\-$/g, "");

      const existing = await Project.findOne({ slug: newSlug });
      if (existing && existing._id.toString() !== req.params.id) {
        return res.status(400).json({
          success: false,
          message: "Another project with similar name already exists",
        });
      }

      req.body.slug = newSlug;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid data",
      error: error.message,
    });
  }
};

// Permanent Delete (remove from DB)
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project permanently deleted!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Is function ko controller file me add kar do
export const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};