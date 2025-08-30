import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  level: Number,
});

// text index
skillSchema.index({ name: "text" });

export default mongoose.model("Skill", skillSchema);
