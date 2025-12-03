import express from "express";
import { createCodeInstallBooking, deleteCodeInstallBooking, getAllCodeInstallBookings, getCodeInstallBookingById, updateCodeInstallBooking } from "../../controllers/bookings/codeInstallBookingController.js";

const router = express.Router();

// CREATE - Client submits booking
router.post("/code-install-booking", createCodeInstallBooking);

// GET ALL - Admin panel
router.get("/code-install-bookings", getAllCodeInstallBookings);

// GET SINGLE
router.get("/code-install-booking/:id", getCodeInstallBookingById);

// UPDATE (status, etc.)
router.put("/code-install-booking/:id", updateCodeInstallBooking);

// DELETE
router.delete("/code-install-booking/:id", deleteCodeInstallBooking);

export default router;