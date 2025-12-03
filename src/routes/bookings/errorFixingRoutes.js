import express from "express";
import { createErrorFixing, deleteErrorFixing, getAllErrorFixings, getErrorFixingById, updateErrorFixing } from "../../controllers/bookings/errorFixingController.js";

const router = express.Router();

// CREATE - Client submits error fixing request
router.post("/error-fixing", createErrorFixing);

// GET ALL - Admin panel
router.get("/error-fixings", getAllErrorFixings);

// GET SINGLE
router.get("/error-fixing/:id", getErrorFixingById);

// UPDATE (status, etc.)
router.put("/error-fixing/:id", updateErrorFixing);

// DELETE
router.delete("/error-fixing/:id", deleteErrorFixing);

export default router;