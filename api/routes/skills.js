import { Router } from 'express';
import Skill from '../models/Skill.js';
import Project from '../models/Project.js';
const r = Router();


// top skills (by frequency across projects)
r.get('/top', async (req, res) => {
const { limit = 10 } = req.query;
const agg = await Project.aggregate([
{ $unwind: '$skills' },
{ $group: { _id: '$skills', count: { $sum: 1 } } },
{ $sort: { count: -1 } },
{ $limit: Number(limit) },
{ $project: { name: '$_id', count: 1, _id: 0 } }
]);
res.json(agg);
});


// manage skills collection (optional)
r.get('/', async (req, res) => res.json(await Skill.find().sort({ level: -1 })));
r.post('/', async (req, res) => res.status(201).json(await Skill.create(req.body)));


export default r;