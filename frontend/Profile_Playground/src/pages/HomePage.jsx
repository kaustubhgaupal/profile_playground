// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚀 Profile Playground
        </h1>
        <p className="text-gray-600 mb-6">
          A simple project to manage your <span className="font-semibold">profile</span>, 
          showcase <span className="font-semibold">projects</span>, and highlight 
          your <span className="font-semibold">skills</span>.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="/projects"
            className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
          >
            Projects
          </a>
          <a
            href="/skills"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            My Skills
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500 text-sm">
        Built with ❤️ using React + Node + MongoDB
      </p>
    </div>
  );
}

