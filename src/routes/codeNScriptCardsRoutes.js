import express from "express";
import { createCodeNScriptCard, deleteCodeNScriptCard, getAllCodeNScriptCards, getCodeNScriptCardById, getCodeNScriptCardBySlug, updateCodeNScriptCardById, updateCodeNScriptCardBySlug } from "../controllers/codeNScriptCardsController.js";

const router = express.Router();

// POST - Create new product card
router.post("/code-n-script-cards", createCodeNScriptCard);

// GET - All product cards
router.get("/code-n-script-cards", getAllCodeNScriptCards);

// GET - By ID
router.get("/code-n-script-card/:id", getCodeNScriptCardById);

// GET - By Slug
router.get("/code-n-script-card/slug/:slug", getCodeNScriptCardBySlug);

// PUT - Update by ID
router.put("/code-n-script-card/:id", updateCodeNScriptCardById);

// PUT - Update by Slug
router.put("/code-n-script-card/slug/:slug", updateCodeNScriptCardBySlug);

// DELETE - By ID
router.delete("/code-n-script-card/:id", deleteCodeNScriptCard);

export default router;