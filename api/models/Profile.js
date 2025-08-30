import mongoose from 'mongoose';


const LinksSchema = new mongoose.Schema({
github: String,
linkedin: String,
portfolio: String
}, { _id: false });


const ProfileSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true },
education: [String],
links: LinksSchema
}, { timestamps: true });


export default mongoose.model('Profile', ProfileSchema);