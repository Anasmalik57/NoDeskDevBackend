import express from "express";
import {
  addDeveloper,
  deleteDeveloper,
  getAllDevelopers,
  getDeveloperById,
  updateDeveloper,
} from "../controllers/developersController.js";

const router = express.Router();

// POST - Add a new developer
router.post("/add-developer", addDeveloper);

// GET - Get all developers
router.get("/developers", getAllDevelopers);

// GET single developer
router.get("/developer/:id", getDeveloperById);

// PUT update developer
router.put("/developer/:id", updateDeveloper);

// DELETE developer
router.delete("/developer/:id", deleteDeveloper);

export default router;
