import InstallOwnCode from "../../models/bookings/InstallOwnCode.js";

// CREATE Request
export const createInstallRequest = async (req, res) => {
  try {
    const requestData = req.body;

    const newRequest = new InstallOwnCode(requestData);
    await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Install request submitted successfully!",
      data: newRequest,
    });
  } catch (error) {
    console.error("Create Install Request Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit request",
    });
  }
};

// GET ALL Requests
export const getAllInstallRequests = async (req, res) => {
  try {
    const requests = await InstallOwnCode.find().sort({ createdAt: -1 });
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
export const getInstallRequestById = async (req, res) => {
  try {
    const request = await InstallOwnCode.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Request not found" });
    }
    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Request (mainly status: Pending → In Progress → Completed)
export const updateInstallRequest = async (req, res) => {
  try {
    const updatedRequest = await InstallOwnCode.findByIdAndUpdate(
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
export const deleteInstallRequest = async (req, res) => {
  try {
    const request = await InstallOwnCode.findByIdAndDelete(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Request not found" });
    }
    res.status(200).json({ success: true, message: "Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};