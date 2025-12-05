import express from "express";
import { createCareerApplication, deleteCareerApplication, getAllCareerApplications, getCareerApplicationById, updateCareerStatus } from "../controllers/careerController.js";

const router = express.Router();

// CREATE - New job application
router.post("/career", createCareerApplication);

// GET ALL - Admin panel
router.get("/careers", getAllCareerApplications);

// GET SINGLE
router.get("/career/:id", getCareerApplicationById);

// UPDATE STATUS (reviewed/accepted/rejected)
router.put("/career/:id", updateCareerStatus);

// DELETE
router.delete("/career/:id", deleteCareerApplication);

export default router;