import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Reminder", ReminderSchema);