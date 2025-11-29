// src/routes/projectRoutes.js

import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post("/add-project", addProject);
router.get("/projects", getAllProjects);
router.get("/project/:id", getProjectById);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

export default router;