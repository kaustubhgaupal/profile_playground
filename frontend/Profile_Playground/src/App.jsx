import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import HealthCheck from "./components/HealthCheck";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar/>

        {/* Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/health" element={<HealthCheck />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
