// src/controllers/requestProductDemoController.js
import RequestProductDemo from "../../models/bookings/RequestProductDemo.js";

// CREATE Demo Request
export const createDemoRequest = async (req, res) => {
  try {
    const demoData = req.body;
    const newRequest = new RequestProductDemo(demoData);
    await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Demo request submitted successfully!",
      data: newRequest,
    });
  } catch (error) {
    console.error("Create Demo Request Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit demo request",
    });
  }
};

// GET ALL Demo Requests
export const getAllDemoRequests = async (req, res) => {
  try {
    const requests = await RequestProductDemo.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Demo Request
export const getDemoRequestById = async (req, res) => {
  try {
    const request = await RequestProductDemo.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Demo request not found" });
    }
    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Demo Request (mainly status)
export const updateDemoRequest = async (req, res) => {
  try {
    const updatedRequest = await RequestProductDemo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ success: false, message: "Demo request not found" });
    }

    res.status(200).json({
      success: true,
      message: "Demo request updated successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE Demo Request
export const deleteDemoRequest = async (req, res) => {
  try {
    const request = await RequestProductDemo.findByIdAndDelete(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Demo request not found" });
    }
    res.status(200).json({ success: true, message: "Demo request deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};