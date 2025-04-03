import express from "express";
import Note from "../models/Note.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add a note
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = new Note({ userId: req.user.userId, text });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all notes for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete a note
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;