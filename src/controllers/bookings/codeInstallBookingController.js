import CodeInstallBooking from "../../models/bookings/CodeInstallBooking.js";

// CREATE Booking
export const createCodeInstallBooking = async (req, res) => {
  try {
    const bookingData = req.body;

    const newBooking = new CodeInstallBooking(bookingData);
    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Code installation booking created successfully!",
      data: newBooking,
    });
  } catch (error) {
    console.error("Create CodeInstallBooking Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create booking",
    });
  }
};

// GET ALL Bookings
export const getAllCodeInstallBookings = async (req, res) => {
  try {
    const bookings = await CodeInstallBooking.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Booking
export const getCodeInstallBookingById = async (req, res) => {
  try {
    const booking = await CodeInstallBooking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Booking (status change mostly)
export const updateCodeInstallBooking = async (req, res) => {
  try {
    const updatedBooking = await CodeInstallBooking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE Booking
export const deleteCodeInstallBooking = async (req, res) => {
  try {
    const booking = await CodeInstallBooking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};