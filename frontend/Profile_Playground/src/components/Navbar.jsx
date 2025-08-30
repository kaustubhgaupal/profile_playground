import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-green-600 hover:text-green-700">
          Profile Playground
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/profile"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Profile
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Skills
          </Link>
          <Link
            to="/search"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Search
          </Link>
          <Link to="/health" className="text-gray-700 hover:text-green-600">Health</Link>

        </div>
      </div>
    </nav>
  );
}
