import { Router } from 'express';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Work from '../models/Work.js';
const r = Router();


r.get('/', async (req, res) => {
const { q = '' } = req.query;
if (!q) return res.json({ projects: [], skills: [], work: [] });


const [projects, skills, work] = await Promise.all([
Project.find({ $text: { $search: q } }).limit(20),
Skill.find({ $text: { $search: q } }).limit(20),
Work.find({ $text: { $search: q } }).limit(20)
]);


res.json({ projects, skills, work });
});


export default r;