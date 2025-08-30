import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    links: {
      github: String,
      demo: String,
    },
    skills: [String],
  },
  { timestamps: true }
);

// create text index
projectSchema.index({
  title: "text",
  description: "text",
  skills: "text"
});

export default mongoose.model("Project", projectSchema);
