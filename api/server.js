import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from './db.js';


import health from './routes/health.js';
import profile from './routes/profile.js';
import projects from './routes/projects.js';
import skills from './routes/skills.js';
import search from './routes/search.js';


dotenv.config();
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/health', health);
app.use('/profile', profile);
app.use('/projects', projects);
app.use('/skills', skills);
app.use('/search', search);


const PORT = process.env.PORT || 8080;


connect(process.env.MONGO_URI).then(() => {
app.listen(PORT, () => console.log(`API listening on :${PORT} `));
}).catch((e) => {
console.error('Mongo connection failed', e);
process.exit(1);
});