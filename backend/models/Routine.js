import mongoose from "mongoose";

const RoutineSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  time: { type: String, required: true },
  done: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Routine", RoutineSchema);