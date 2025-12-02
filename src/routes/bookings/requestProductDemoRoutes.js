import express from "express";
import { createDemoRequest, deleteDemoRequest, getAllDemoRequests, getDemoRequestById, updateDemoRequest } from "../../controllers/bookings/requestProductDemoController.js";

const router = express.Router();

// CREATE
router.post("/request-demo", createDemoRequest);

// READ ALL (Admin)
router.get("/demo-requests", getAllDemoRequests);

// READ SINGLE
router.get("/demo-request/:id", getDemoRequestById);

// UPDATE (status, etc.)
router.put("/demo-request/:id", updateDemoRequest);

// DELETE
router.delete("/demo-request/:id", deleteDemoRequest);

export default router;