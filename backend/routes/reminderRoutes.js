import express from "express";
import Reminder from "../models/Reminder.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add a reminder
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text, time } = req.body;
    const newReminder = new Reminder({ userId: req.user.userId, text, time });
    await newReminder.save();
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all reminders for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.user.userId });
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete a reminder
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
    res.json({ message: "Reminder deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;