import mongoose from 'mongoose';


const WorkSchema = new mongoose.Schema({
role: String,
company: String,
duration: String,
description: String
}, { timestamps: true });


WorkSchema.index({ role: 'text', company: 'text', description: 'text' });


export default mongoose.model('Work', WorkSchema);