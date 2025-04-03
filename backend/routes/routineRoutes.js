import express from "express";
import Routine from "../models/Routine.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add a routine
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text, time } = req.body;
    const newRoutine = new Routine({ userId: req.user.userId, text, time });
    await newRoutine.save();
    res.status(201).json(newRoutine);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all routines for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const routines = await Routine.find({ userId: req.user.userId });
    res.json(routines);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Toggle completion status
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id);
    if (!routine) return res.status(404).json({ message: "Routine not found" });

    routine.done = !routine.done;
    await routine.save();
    res.json(routine);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete a routine
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Routine.findByIdAndDelete(req.params.id);
    res.json({ message: "Routine deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;