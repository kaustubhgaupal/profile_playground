import { Router } from "express";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";

const r = Router();

// list + filter by skill
r.get("/", async (req, res) => {
  const { skill } = req.query;
  const q = skill ? { skills: { $in: [skill] } } : {};
  const docs = await Project.find(q).sort({ createdAt: -1 });
  res.json(docs);
});

// create (for seeding/admin)
r.post("/", async (req, res) => {
  try {
    const { skills = [], ...rest } = req.body;

    // 1. Create the project
    const doc = await Project.create({ ...rest, skills });

    // 2. Ensure skills exist in Skill collection
    if (skills.length > 0) {
      await Promise.all(
        skills.map(async (s) => {
          await Skill.updateOne(
            { name: s },               // check if skill already exists
            { $setOnInsert: { name: s } }, 
            { upsert: true }           // insert if not exists
          );
        })
      );
    }

    res.status(201).json(doc);
  } catch (e) {
    console.log(`${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

export default r;
