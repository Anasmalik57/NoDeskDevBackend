import express from "express";
import { createEnquiry, deleteEnquiry, getAllEnquiries, getEnquiryById, updateEnquiryById } from "../../controllers/enquiries/codeNScriptEnquiriesController.js";

const router = express.Router();

// POST - Submit new enquiry (Public)
router.post("/add-code-n-script-enquiry", createEnquiry);

// GET - All enquiries (Admin)
router.get("/code-n-script-enquiries", getAllEnquiries);

// GET - Single enquiry by ID
router.get("/code-n-script-enquiry/:id", getEnquiryById);

// PUT - Update enquiry by ID (Admin - e.g., change status)
router.put("/code-n-script-enquiry/:id", updateEnquiryById);

// DELETE - Delete enquiry
router.delete("/code-n-script-enquiry/:id", deleteEnquiry);

export default router;