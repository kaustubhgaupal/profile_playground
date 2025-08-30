# 🚀Profile PlayGround (API + Frontend)

A full-stack project with **Express + MongoDB** backend and **React** frontend. 
A simple project to manage your profile, showcase projects, and highlight your skills.
It supports searching across projects and skills with a clean UI.

---

## ✅ Features
- **REST API** with **MongoDB (Mongoose)**
- **Seed data** for **Profile**, **Projects**, and **Skills**
- **CRUD operations** for Profile and Projects
- **Full-text search** with indexes
- **Health check** endpoint (`/health`)
- **React frontend** displaying and managing **Profile**, **Projects**, and **Skills**
- **Integrated** API ↔️ Frontend setup

---

## ⚙️ Tech Stack
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Frontend:** React, Tailwind CSS
- **Database:** MongoDB Atlas 

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/kaustubhgaupal/profile_playground.git
cd profile_playground
```

### 2️⃣ Backend Setup
```bash
cd api
npm install
```

Create a `.env` file inside `api/`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/
```

Run backend:
```bash
npm run dev
```
Server will start at [http://localhost:5000](http://localhost:5000).

### 3️⃣ Frontend Setup
```bash
cd frontend/Profile_Playground
npm install
```
Create a `.env` file inside `frontend/Profile_Playground/`:
```env
VITE_API_BASE_URL=http://localhost:5000
```
```
npm run dev
```
Frontend runs at [http://localhost:3000](http://localhost:3000).

---

---

## 🧪 Acceptance Criteria (Checked ✅)
- ✅ `GET /health` returns `200`
- ✅ Queries return filtered results (`/skills`, `/projects`)
- ✅ Seed data visible in UI
- ✅ README complete, reproducible setup

---


## 👨‍💻 Author
- GitHub: [kaustubhgaupal](https://github.com/kaustubhgaupal/)
