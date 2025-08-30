import dotenv from 'dotenv';
import { connect } from './db.js';
import Profile from './models/Profile.js';
import Skill from './models/Skill.js';
import Project from './models/Project.js';
import Work from './models/Work.js';


dotenv.config();
await connect(process.env.MONGO_URI);

const profile = {
name: 'Kaustubh Gaupal',
email: 'kaustubhgaupal@gmail.com',
education: ['B.Tech CSE – IIIT Nagpur (expected Jun 2026)'],
links: {
github: 'https://github.com/kaustubhgaupal',
linkedin: 'https://www.linkedin.com/in/kaustubh-gaupal-353b37256',
portfolio: 'https://doc-spot-2xsy.vercel.app/'
}
};


const skills = [
{ name: 'javascript', level: 8 },
{ name: 'nodejs', level: 8 },
{ name: 'express', level: 7 },
{ name: 'react', level: 7 },
{ name: 'mongodb', level: 7 }
];


const projects = [
  {
    title: 'DocSpot',
    description: 'MERN stack doctor appointment booking system with user, doctor, and admin modules.',
    links: { github: 'https://github.com/kaustubhgaupal/DocSpot' },
    skills: ['mongodb', 'express', 'react', 'nodejs']
  },
  {
    title: 'CPU Scheduling Simulator',
    description: 'React app supporting FCFS, SJF, RR, Priority scheduling with Tailwind.',
    links: { github: 'https://github.com/kaustubhgaupal/CPUScheduler' },
    skills: ['react', 'javascript', 'tailwind']
  },
  {
    title: 'Text Compressor',
    description: 'Huffman Encoding based project for efficient text compression and decompression.',
    links: { github: 'https://github.com/kaustubhgaupal/txt-compressor' },
    skills: ['c++', 'algorithms', 'data-structures']
  }
];




const work = [
{ role: 'APM Intern', company: 'IQOL Technologies', duration: '2024', description: 'Worked on product specs and user flows.' }
];


await Profile.deleteMany({});
await Skill.deleteMany({});
await Project.deleteMany({});
await Work.deleteMany({});


await Profile.create(profile);
await Skill.insertMany(skills);
await Project.insertMany(projects);
await Work.insertMany(work);


console.log('Seeded successfully');
process.exit(0);