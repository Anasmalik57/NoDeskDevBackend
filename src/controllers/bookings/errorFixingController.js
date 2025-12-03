import ErrorFixing from "../../models/bookings/ErrorFixing.js";

// CREATE Error Fixing Request
export const createErrorFixing = async (req, res) => {
  try {
    const requestData = req.body;

    const newRequest = new ErrorFixing(requestData);
    await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Error fixing request submitted successfully!",
      data: newRequest,
    });
  } catch (error) {
    console.error("Create ErrorFixing Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit request",
    });
  }
};

// GET ALL Requests
export const getAllErrorFixings = async (req, res) => {
  try {
    const requests = await ErrorFixing.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Request
export const getErrorFixingById = async (req, res) => {
  try {
    const request = await ErrorFixing.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Request not found" });
    }
    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Request (status, etc.)
export const updateErrorFixing = async (req, res) => {
  try {
    const updatedRequest = await ErrorFixing.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ success: false, message: "Request not found" });
    }

    res.status(200).json({
      success: true,
      message: "Request updated successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE Request
export const deleteErrorFixing = async (req, res) => {
  try {
    const request = await ErrorFixing.findByIdAndDelete(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Request not found" });
    }
    res.status(200).json({ success: true, message: "Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};