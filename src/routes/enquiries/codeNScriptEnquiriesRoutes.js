import express from "express";
import { createEnquiry, deleteEnquiry, getAllEnquiries, getEnquiryById } from "../../controllers/enquiries/codeNScriptEnquiriesController.js";

const router = express.Router();

// POST - Submit new enquiry (Public)
router.post("/add-code-n-script-enquiry", createEnquiry);

// GET - All enquiries (Admin only - add auth middleware if needed)
router.get("/code-n-script-enquiries", getAllEnquiries);

// GET - Single enquiry by ID (Admin)
router.get("/code-n-script-enquiry/:id", getEnquiryById);

// DELETE - Delete enquiry (Admin)
router.delete("/code-n-script-enquiry/:id", deleteEnquiry);

export default router;