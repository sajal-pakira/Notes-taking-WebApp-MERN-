import express from "express";
import { createNote, getAllNotes } from "../controllers/notes.controller";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);

export default router;
