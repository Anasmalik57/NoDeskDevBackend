import express from "express";
import { createInstallRequest, deleteInstallRequest, getAllInstallRequests, getInstallRequestById, updateInstallRequest } from "../../controllers/bookings/installOwnCodeController.js";

const router = express.Router();

// CREATE - Client submits request
router.post("/install-own-code", createInstallRequest);

// GET ALL - Admin dashboard ke liye
router.get("/install-requests", getAllInstallRequests);

// GET SINGLE
router.get("/install-request/:id", getInstallRequestById);

// UPDATE (status change, notes, etc.)
router.put("/install-request/:id", updateInstallRequest);

// DELETE (rarely used, but good to have)
router.delete("/install-request/:id", deleteInstallRequest);

export default router;