import { Router } from 'express';
import Profile from '../models/Profile.js';
const r = Router();


// Create
// Create profile
r.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const existing = await Profile.findOne();
    if (existing) return res.status(400).json({ message: 'Profile already exists. Use PUT to update.' });
    const doc = await Profile.create(req.body);
    res.status(201).json(doc);
  } catch (e) { res.status(500).json({ error: e.message }); }
});



// Read (single profile)
r.get('/', async (req, res) => {
    
const doc = await Profile.findOne();
res.json(doc || {});
});


// Update
r.put('/', async (req, res) => {
try {
    console.log(req.body);
const updated = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
res.json(updated);
} catch (e) { res.status(500).json({ error: e.message }); }
});


export default r;